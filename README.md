# 来哥AI — 个人品牌官网

> **让AI成为你的超级员工**

吴文来（来哥）个人品牌官网，一人公司全栈服务展示平台。专注 AI 智能体开发、企业管理系统、物联网、AI 自动化、电商运营与企业咨询。

---

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| **Next.js** | 16.x | 前端框架（App Router） |
| **React** | 19.x | UI 库 |
| **TypeScript** | 5.x | 类型安全 |
| **TailwindCSS** | v4 | 原子化 CSS 框架 |
| **shadcn/ui** | 4.x | UI 组件库 |
| **Framer Motion** | 12.x | 交互动画 |
| **next-themes** | 0.4.x | 明暗主题切换 |
| **Lucide React** | 1.x | 图标库 |

---

## 功能特性

- **8 个独立页面**：首页、关于、服务、案例、AI 方案、视频、博客、联系
- **10 个首页区块**：从 Hero 到联系方式，完整展示个人品牌
- **亮色/暗色模式**：一键切换，自动跟随系统偏好
- **滚动入场动画**：基于 Framer Motion 的视口检测动画
- **响应式布局**：PC / 平板 / 手机完美适配
- **完整 SEO/GEO 配置**：OG 标签、Twitter Card、JSON-LD、Meta 关键字
- **粒子背景**：Hero 区域动态粒子动画
- **毛玻璃特效**：导航栏、卡片等 Glassmorphism 风格
- **纯静态导出**：`output: 'export'`，可部署到任意静态托管平台

---

## 项目结构

```
laige-ai/
├── app/                          # Next.js App Router 页面
│   ├── layout.tsx                # 根布局 + SEO/GEO 元数据 + 字体
│   ├── page.tsx                  # 首页（组装所有 Section）
│   ├── globals.css               # 全局样式 + Tailwind v4 主题 + 品牌变量
│   ├── about/page.tsx            # 关于页
│   ├── services/page.tsx         # 服务页
│   ├── cases/page.tsx            # 案例页
│   ├── ai-solutions/page.tsx     # AI 方案页
│   ├── video/page.tsx            # 视频页
│   ├── blog/page.tsx             # 博客页
│   └── contact/page.tsx          # 联系页
│
├── components/                   # 组件
│   ├── navbar.tsx                # 响应式导航栏（8 链接 + 主题切换）
│   ├── footer.tsx                # 页脚（4 列布局）
│   ├── scroll-reveal.tsx         # 滚动入场动画组件
│   ├── theme-provider.tsx        # next-themes Provider
│   ├── sections/                 # 首页 Section 组件
│   │   ├── hero-section.tsx      # 首屏英雄区（粒子动画 + 圆形头像）
│   │   ├── about-section.tsx     # 关于我（时间线 + 技能标签）
│   │   ├── skills-section.tsx    # 核心能力（6 大服务卡片）
│   │   ├── cases-section.tsx     # 成功案例（6 个案例）
│   │   ├── ai-solutions-section.tsx  # AI 解决方案（7 种方案）
│   │   ├── video-section.tsx     # 视频展示
│   │   ├── social-section.tsx    # 自媒体矩阵
│   │   ├── process-section.tsx   # 服务流程（7 步）
│   │   ├── testimonials-section.tsx  # 客户评价
│   │   └── contact-section.tsx   # 联系方式（电话/邮箱/二维码）
│   └── ui/                       # shadcn/ui 组件（自动生成）
│
├── lib/
│   └── utils.ts                  # cn() 工具函数（clsx + tailwind-merge）
│
├── public/
│   └── images/                   # 静态图片资源
│       ├── 个人形象.jpg          # 个人形象照
│       ├── 微信.png              # 微信二维码
│       └── 抖音.png              # 抖音二维码
│
├── next.config.ts                # Next.js 配置（静态导出）
├── postcss.config.mjs            # PostCSS 配置（Tailwind v4 插件）
├── package.json                  # 依赖与脚本
└── tsconfig.json                 # TypeScript 配置
```

---

## 快速开始

### 环境要求

- Node.js >= 18
- npm >= 9

### 安装依赖

```bash
cd laige-ai
npm install
```

### 开发模式

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看效果，代码修改会自动热更新。

### 构建静态文件

```bash
npm run build
```

构建产物输出到 `out/` 目录，可直接部署到任意静态服务器或 CDN。

---

## 部署

项目配置为**纯静态导出**（`output: 'export'` + `images.unoptimized`），`out/` 目录即为可部署的静态文件。

### 本地预览

```bash
npx serve out -p 3000
```

### 平台部署

- **Vercel / Netlify**：直接连接 Git 仓库，设置构建命令 `npm run build`，输出目录 `out`
- **Nginx / Apache**：将 `out/` 目录内容复制到 Web 根目录
- **OSS + CDN**：将 `out/` 目录上传到对象存储，配置 CDN 加速

---

## 自定义指南

### 修改个人信息

- **联系方式**：编辑 `components/sections/contact-section.tsx`（电话、邮箱、地址）
- **个人简介**：编辑 `components/sections/hero-section.tsx` 中的介绍文字
- **时间线**：编辑 `components/sections/about-section.tsx` 中的里程碑数据
- **SEO/GEO 信息**：编辑 `app/layout.tsx` 中的 `metadata` 对象

### 更换图片

将新图片放入 `public/images/` 目录并修改对应组件中的引用路径：

- **个人形象照**：`hero-section.tsx` 第 155 行
- **微信二维码**：`social-section.tsx` 和 `contact-section.tsx`
- **抖音二维码**：`social-section.tsx`

### 修改主题颜色

编辑 `app/globals.css` 中的 CSS 变量，品牌色定义在 `@theme inline` 块中：

```css
--color-brand: #16A34A;       /* 主色 */
--color-brand-light: #22C55E; /* 亮色 */
...
```

### 新增内容

- **新增案例**：编辑 `cases-section.tsx` 中的 `cases` 数组
- **新增服务**：编辑 `skills-section.tsx` 中的 `skills` 数组
- **新增 AI 方案**：编辑 `ai-solutions-section.tsx` 中的 `solutions` 数组
- **新增博客**：编辑 `app/blog/page.tsx` 中的 `posts` 数组
- **新增视频**：编辑 `video-section.tsx` 中的 `videos` 数组

---

## 品牌色系

| 颜色 | HEX | 用途 |
|------|-----|------|
| 主绿 | `#16A34A` | 按钮、强调、导航激活态 |
| 亮绿 | `#22C55E` | 渐变、暗色模式主色 |
| 浅绿背景 | `#DCFCE7` | 标签背景、卡片强调 |
| 品牌背景 | `#F8FAF8` | 页面底色（亮色模式） |
| 暖色强调 | `#F59E0B` | 部分高亮元素 |
| 暗色背景 | `#0C0F0C` | 页面底色（暗色模式） |

---

## License

Private — 吴文来（来哥AI ）版权所有
