---
name: automotive-vizcom-workbench
description: 用于整理 Vizcom 画板、复用底图资产、设置可比较的分支及预留右侧生成区域。
---

# Vizcom 图版推敲

先读实时画板并核对输入顺序、结果关联、坐标和版本。按[工作区与布局](references/board.md)划分整车、局部和变量矩阵。将历史结果移出操作卡右侧的预计结果区。

MCP 0.2.0 的显式布局可运行随包的[留位工具](scripts/plan-right-lane.mjs)：用 Node.js 执行 `node scripts/plan-right-lane.mjs board.json plan.json`。计划包含 nodeId、sectionId、count、width、height、reserveHeight，单位为画板显示尺寸。工具只计算；退出码 2 表示空间冲突。客户端自动布局按实测校准。修改图版后回读图片、提示词、有序引用和位置。连接或调用能力以当前工具为准。[Vizcom MCP](https://github.com/wilsonreal747/vizcom-mcp)
