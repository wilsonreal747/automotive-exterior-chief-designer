import fs from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

// Vizcom MCP 0.2.0 board generation uses a horizontal pitch of displayWidth + 70.
export function planRightLane(board, spec) {
  const { nodeId, count, width, height, reserveHeight, sectionId, reservations = [] } = spec;
  const gap = spec.cardGap ?? 40;
  const padding = spec.padding ?? 20;
  if (!Number.isInteger(count) || count < 1 || count > 4 ||
      ![width, height, reserveHeight].every(v => Number.isFinite(v) && v > 0) ||
      reserveHeight < height || ![gap, padding].every(v => Number.isFinite(v) && v >= 0)) {
    throw new Error('Check batch count, planned display size, vertical allowance and margins');
  }
  const prompt = board.elements.find(n => n.id === nodeId && n.type === 'WorkbenchElementMagicPrompt');
  if (!prompt) throw new Error('Read the board and select its prompt node');
  const validBounds = n => [n.x,n.y,n.width,n.height].every(Number.isFinite) && n.width > 0 && n.height > 0;
  if (!board.elements.every(validBounds) || !reservations.every(validBounds)) {
    throw new Error('Cannot check space until all node and reservation bounds are known');
  }
  const right = prompt.x + prompt.width / 2;
  const totalWidth = count * width + (count - 1) * 70;
  const band = { x: right + gap + totalWidth / 2, y: prompt.y, width: totalWidth, height: reserveHeight };
  const overlaps = n => Math.abs(n.x - band.x) < (n.width + band.width) / 2 + padding &&
                       Math.abs(n.y - band.y) < (n.height + band.height) / 2 + padding;
  const section = sectionId && board.elements.find(n => n.id === sectionId && n.type === 'WorkbenchElementSection');
  if (sectionId && !section) throw new Error('Unknown destination section');
  const blockers = board.elements.filter(n => n.id !== sectionId && n.id !== nodeId && overlaps(n)).map(n => n.id);
  const reservedConflicts = reservations.filter(overlaps).map(n => n.id);
  const fitsSection = !section || (Math.abs(section.x - band.x) + band.width / 2 + padding <= section.width / 2 &&
                                   Math.abs(section.y - band.y) + band.height / 2 + padding <= section.height / 2);
  const slots = Array.from({length: count}, (_,i) => ({x: right + gap + width/2 + i*(width+70), y: prompt.y, width, height}));
  const ready = !blockers.length && !reservedConflicts.length && !!fitsSection;
  return { ready,
    band, slots, blockers, reservedConflicts, fitsSection: !!fitsSection,
    generateArgs: ready ? {workbenchId:board.id, nodeId, count, width, height, x:slots[0].x, y:slots[0].y} : null };
}
if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  const [boardFile, specFile] = process.argv.slice(2);
  const read = async path => JSON.parse(await fs.readFile(path,'utf8'));
  const plan = planRightLane(await read(boardFile), await read(specFile));
  console.log(JSON.stringify(plan, null, 2));
  if (!plan.ready) process.exitCode = 2;
}
