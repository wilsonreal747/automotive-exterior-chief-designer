# 汽车外饰主设技能集

18 项可独立安装的技能，覆盖汽车外饰预研、设计推敲、评审和交接。每项技能有自己的触发描述、工作步骤、交付和验收方式。读者可以直接打开对应的技能，Agent 可以按任务调用。

## 从任务进入

| 任务 | 从哪份 SOP 开始 | 在哪一步调用其他能力 |
| --- | --- | --- |
| 从产品机会推到整车方向 | [预研阶段推进](skills/automotive-concept-workflow/SKILL.md) | 按已确认输入进入 Gate 1–4；需要意向图时调用参考库，需要形成比较稿时调用草图或改图技能。各阶段取回工作图与待决项。 |
| 做一轮可对比的造型试验 | [草图 remix](skills/automotive-sketch-remix/SKILL.md) 或 [局部改图](skills/automotive-image-edit/SKILL.md) | 用户选用 Vizcom 时进入[图版 SOP](skills/automotive-vizcom-workbench/SKILL.md)。操作卡与输入就绪后，调用独立库的工作台技能，按任务编号取回结果。 |
| 汽车影片、外饰视频与对标拉片 | [汽车视频导演](skills/automotive-video-director/SKILL.md) | 先找对标并核原片，再将镜头关系迁移为本车方案；按需调用剪辑、素材和动效引擎，导演与主设分别验收。 |
| 把评审判断讲清楚 | [外饰评审 PPT](skills/automotive-review-deck/SKILL.md) | 缺行为证据回 Gate 1，缺动作分镜回 Gate 2。素材和大纲齐备后，可调用第三方 PPT Master 制作，再由评审技能核对演讲和画面。 |

### 跨仓库调用索引

| 调用方 | 实现和维护位置 | 交接内容 |
| --- | --- | --- |
| 本库的 Vizcom 图版 SOP | 作者独立维护的 [Vizcom 工作台技能](https://github.com/wilsonreal747/vizcom-mcp/blob/a21d099781778590f3478b782a737ecad417f565/skills/vizcom-workbench/SKILL.md) 与 [MCP 工具库](https://github.com/wilsonreal747/vizcom-mcp) | 输入为目标画板、授权动作、按顺序排列的底图与参考；回传实际节点、任务或结果编号。整理操作按内容和引用回读验收。 |
| 本库的汽车视频导演 | [能力调度表](skills/automotive-video-director/references/skill-orchestration.md)，通用工具由上游独立维护 | 对标证据、设计基准、素材和时段进入；取回镜头方案、可编辑工程与验收。外部能力均按需发现，不随包复制。 |
| 本库的评审 PPT SOP | 可选第三方 [PPT Master 技能](https://github.com/hugohe3/ppt-master/blob/3af3e8ef774c4d67ee57e1306d9256d08c9ee1bf/skills/ppt-master/SKILL.md)，由上游维护 | 输入为页面大纲、可用原图、画幅与样板；取回可编辑 PPT 和预览，检查图像与论点是否对应。 |

上表的技能链接指向本次核对的源码快照。具体工具的安装与升级由各自仓库说明。[子技能迁移和依赖维护](MAINTAINING.md#跨仓库维护)

## 安装与试用

从 [skills](skills) 选取所需的子目录，将整个子目录（连同随附资源）复制到宿主的技能目录，保留目录名。整套安装时复制这 18 个子目录，刷新宿主并检查技能列表。旧的单入口安装可先备份，再用同名主设子目录替换，按需添加专项。付费生图工具由使用者自行配置。

例如，输入“保持轮位，用铅笔草图比较三种后肩体量”，应调用 `automotive-sketch-remix`。输入“把已经选定的方案整理成六分钟评审材料”，应调用 `automotive-review-deck`，可直接使用[可编辑样板](skills/automotive-review-deck/assets/review-starter.pptx)。

## 技能目录

| 技能 | 何时使用 |
| --- | --- |
| [外饰主设](skills/automotive-exterior-chief-designer/SKILL.md) | 负责整车外饰方向把控、评审准备和跨专业取舍。用于需要判断先推进哪个设计问题、哪些输入已确认的任务。 |
| [预研阶段推进](skills/automotive-concept-workflow/SKILL.md) | 用于从用户与市场证据推进到体验、设计方向和正式五视图的跨阶段任务，协调阶段依赖和返工。 |
| [Gate 1 · 人群洞察](skills/automotive-gate1-insight/SKILL.md) | 研究汽车细分市场、人群和生活方式，把趋势假设落到真实行为及可验证的外饰机会。 |
| [Gate 2 · 外饰体验](skills/automotive-gate2-experience/SKILL.md) | 把已接受的人群洞察转为外饰体验提案，制作关键动作分镜、状态与机构证明。 |
| [Gate 3 · 方案书](skills/automotive-gate3-direction/SKILL.md) | 发展外饰概念方向、形式语法和整车体块，制作从意向到侧视及前后四分之三的方案书。 |
| [Gate 4 · 五视图与独立评审](skills/automotive-gate4-five-view/SKILL.md) | 在方向和关键视角确认后制作一致的外饰五视图，复核车型身份、几何和成套表现。 |
| [设计参考库](skills/automotive-reference-library/SKILL.md) | 用于选取、归档或检索汽车设计意向图、画风图和完整概念案例，并指定可迁移的视觉关系。 |
| [设计前沿采集](skills/automotive-design-news/SKILL.md) | 采集更新的设计项目、材料工艺和概念动向，形成可检索的资讯条目。 |
| [设计端技术研究](skills/automotive-technology-insight/SKILL.md) | 研究灯具、材料、轮毂或活动机构的技术路线，解释机制对外饰可见特征及集成的影响。 |
| [灯具设计诊断](skills/automotive-lighting-design/SKILL.md) | 针对灯具情绪、识别特征、明灭两态和与车身的整合提出造型诊断及验证方法。 |
| [草图与多参考 remix](skills/automotive-sketch-remix/SKILL.md) | 用于铅笔、圆珠笔或数字草图的画风迁移与体量发散，控制画风、体态和设计供体。 |
| [效果图与局部改图](skills/automotive-image-edit/SKILL.md) | 用于汽车效果图换环境、局部移植、蒙版精修或保持车身几何的影像校正。 |
| [Vizcom 图版推敲](skills/automotive-vizcom-workbench/SKILL.md) | 用于整理 Vizcom 画板、复用底图资产、设置可比较的分支及预留右侧生成区域。 |
| [汽车视频导演](skills/automotive-video-director/SKILL.md) | 查找汽车影片对标、逐镜与视听拆解，制作分镜、调度剪辑和动效技能，验收设计保真与音画。 |
| [外饰评审 PPT](skills/automotive-review-deck/SKILL.md) | 用于汽车设计评审 PPT 的逐页叙事、配图、排版、讲稿、局部修订与导出验收。 |
| [项目总览与决策](skills/automotive-project-status/SKILL.md) | 用于更新外饰项目全貌、节点依赖、变更责任或跨专业决策。 |
| [设计资产与版本整理](skills/automotive-asset-organization/SKILL.md) | 用于整理汽车项目文件、识别设计图用途、成套命名、去重与路径索引。 |
| [跨端接续与公开交付](skills/automotive-design-handoff/SKILL.md) | 用于换设备或换人接续设计、核对最新基准，以及准备对外展示的可发布副本。 |

## 维护

实例与调整方法见[维护说明](MAINTAINING.md)。历史阅读链接仍可从 [references](references) 进入，各技能安装所需的文件都在它们自己的目录内。
