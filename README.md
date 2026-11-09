# 外饰主设技能包 · Automotive Exterior Chief Designer

给参与汽车外饰设计的 Agent 一套工作方法：从用户场景推到结构与造型，让多参考出图可比较，再把设计判断做成评审 PPT。适合设计师和 Agent 共用；不需要访问作者的项目或 Notion。

An agent skill for automotive exterior concept development, controlled image iteration, five-view consistency and design review decks. Includes an editable PowerPoint starter. No proprietary vehicle assets or account credentials are required to read or install it.

**安装：** 下载仓库，保留根目录的 `SKILL.md`、`references` 和 `assets`，将整个文件夹命名为 `automotive-exterior-chief-designer` 并复制到 Agent 支持的 Skill 目录，重新加载后确认名称已出现。已有同名定制版本先比较，不要覆盖。只想用 PPT 可直接下载 [评审样板](assets/review-starter.pptx)。出图需另配可用工具；[Vizcom MCP](https://github.com/wilsonreal747/vizcom-mcp) 是可选实现。

**试用指令：** “用外饰主设技能处理一个雨天装载概念。先列四格动作和需要验证的开口尺寸，再给四页评审框架。没有实车数据的地方标假设，先不出图。”

[技能入口](SKILL.md) · [工作单](assets/work-sheet.md) · [评审方法](references/decks.md) · [生图方法](references/images.md) · [四阶段交付](references/design-gates.md)

## 按当前工作进入

| 现在卡在哪里 | 打开后可以做什么 |
| --- | --- |
| 趋势讲得通，却找不到对应的用户动作 | 用行为卡记录观察和反例，用技术卡说明机制与集成条件。[研究方法](references/research.md) |
| 几轮草图长得一样，或画风和体态相互干扰 | 指定每张参考能控制的内容，在同一底图上试不同断面，并为下一轮留足图位。[草图与效果图](references/studio.md) |
| 材料有很多图，仍然很难讲给评审听 | 从真实切片走到分镜、结构证明、方案对照和待决事项。[演讲与图像叙事](references/presentation-sequence.md) |
| 换人接手或准备对外演示 | 核对母版、五视图版本和设计决议的适用范围，检查公开副本。[交接方法](references/handoff.md) |

**维护与反馈：** 请提供任务类型、预期、实际结果、可复现的虚构输入。不要附内部画板、母稿或同事信息。改方法时同步更新对应引用、示例和检查项；工具参数回到工具仓库维护。
