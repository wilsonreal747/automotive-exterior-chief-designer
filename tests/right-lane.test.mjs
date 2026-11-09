import test from 'node:test';
import assert from 'node:assert/strict';
import { planRightLane } from '../skills/automotive-vizcom-workbench/scripts/plan-right-lane.mjs';

const card = { id: 'prompt', type: 'WorkbenchElementMagicPrompt', x: 0, y: 0, width: 200, height: 160 };
const section = { id: 'space', type: 'WorkbenchElementSection', x: 400, y: 0, width: 1100, height: 400 };
const board = { id: 'demo', elements: [card, section] };
const batch = { nodeId: 'prompt', sectionId: 'space', count: 3, width: 200, height: 120, reserveHeight: 150 };

test('three results fit and leave the actual adapter pitch between centres', () => {
  const plan = planRightLane(board, batch);
  assert.equal(plan.ready, true);
  assert.equal(plan.band.width, 740);
  assert.deepEqual(plan.slots.map(s => s.x), [240,510,780]);
});

test('a note in the lane blocks the batch', () => {
  const note = { id: 'note', x: 500, y: 40, width: 50, height: 40 };
  const plan = planRightLane({ ...board, elements: [...board.elements, note] }, batch);
  assert.deepEqual(plan.blockers, ['note']);
  assert.equal(plan.generateArgs, null);
});

test('insufficient section height and reservations block the batch', () => {
  const plan = planRightLane(board, { ...batch, reserveHeight: 410,
    reservations: [{id: 'next', x: 200, y: 0, width: 100, height: 50}] });
  assert.equal(plan.fitsSection, false);
  assert.deepEqual(plan.reservedConflicts, ['next']);
  assert.equal(plan.ready, false);
});
