"""Validate a checkout and verify each skill's resources are portable."""
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
SKILLS = ROOT / "skills"
LINK = re.compile(r"\[[^\]]*\]\(([^)]+)\)")

def check_links(document, boundary):
    for target in LINK.findall(document.read_text(encoding="utf-8")):
        if target.startswith(("https://", "#")):
            continue
        path = (document.parent / target.split("#", 1)[0]).resolve()
        if not path.is_relative_to(boundary) or not path.exists():
            raise ValueError(f"{document.name}: unavailable local link {target}")

def check():
    readme = (ROOT / "README.md").read_text(encoding="utf-8")
    packages = sorted(SKILLS.iterdir())
    if not packages:
        raise ValueError("No skill folders found")
    for package in packages:
        entry = package / "SKILL.md"
        body = entry.read_text(encoding="utf-8")
        match = re.match(r"\A---\nname: ([a-z0-9-]+)\ndescription: ([^\n]+)\n---\n", body)
        if not match or match[1] != package.name or not match[2].strip():
            raise ValueError(f"Check skill declaration in {entry}")
        if entry.relative_to(ROOT).as_posix() not in readme:
            raise ValueError(f"No catalogue entry for {package.name}")
        for document in package.rglob("*.md"):
            check_links(document, package)
    for document in [ROOT / "README.md", ROOT / "MAINTAINING.md", *(ROOT / "references").glob("*.md")]:
        check_links(document, ROOT)
    for name, owner in [("review-starter.pptx", "automotive-review-deck"),
                        ("work-sheet.md", "automotive-exterior-chief-designer")]:
        if (ROOT / "assets" / name).read_bytes() != (SKILLS / owner / "assets" / name).read_bytes():
            raise ValueError(f"Outdated compatibility download: {name}")
    print(f"{len(packages)} independently packaged skills validated")

if __name__ == "__main__":
    try:
        check()
    except (OSError, ValueError) as error:
        sys.exit(str(error))
