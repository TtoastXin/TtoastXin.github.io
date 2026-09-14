# xin-zhao-site

Xin Zhao 的个人研究 / 职业网站：长期维护的公开 proof of work 索引。Astro 7 + TypeScript，纯静态输出。

## 内容边界

- 本仓库会公开。只写入已经公开、或已确定可以公开的内容。
- 不写入：未公开研究的任何细节（包括方法名、摘要、结果数字）、职业规划、目标公司或机构、行政与合同信息、对他人或机构的评价。`draft: true` 不能替代这条规则：提交过的内容会一直留在 Git 历史里。
- 不虚构项目、论文状态或数字。没有真实结果时，project 的 `result` 字段留空。
- 定位措辞保守：身份只写有公开证据支撑的部分；更长期的方向写成兴趣或问题，不写成已有 expertise。
- 背景资料来自 Personal-Workbench（Google Drive），只读，不修改。

## 结构

- `src/site.config.ts`：姓名、定位句、机构、联系方式、CV 路径。
- `src/content/{projects,publications,notes}/`：每条内容一个 Markdown 文件；各目录的 `_template` 文件说明字段，schema 在 `src/content.config.ts`。
- `draft: true` 的条目只在 `astro dev` 中显示（带 draft 标记），不进入生产构建。
- 没有内容的栏目自动从导航中隐藏，对应页面带 `noindex`。

## 命令

- 后台启动开发服务器：`npx astro dev --background`；管理：`npx astro dev stop | status | logs`。
- 提交前运行 `npm run verify`（Prettier 检查、`astro check`、生产构建）。

## 约定

- 除非有明确需要，不引入 CMS、数据库、后端、CSS 框架或动画库。
- 与本站业务无关的通用确定性转换（文本、文件格式等），先用 `artdessei list --json` 查已有工具；值得复用的新轮子放进 ArtDessei 仓库，而不是写在本仓库里。
- 不自动 push。创建远程仓库、修改公开状态、绑定域名或部署前，先问 Xin。
