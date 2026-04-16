# aNan_Design Portfolio Website

暗黑工业风 + 复古摇滚美学 三维动画设计师作品集网站

---

## 📁 文件结构

```
作品集网站/
├── index.html          # 首页 - 作品展示
├── about.html          # 关于页 - 个人介绍
├── work.html           # 作品详情页模板
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── main.js         # JavaScript 交互逻辑
└── assets/
    ├── images/         # 静帧作品图片
    └── videos/         # 视频作品文件
```

---

## 🚀 快速开始

1. 直接用浏览器打开 `index.html` 即可预览
2. 支持本地打开，无需服务器

---

## 📝 作品替换指南

### 视频作品 (8个)

将视频文件放入 `assets/videos/` 目录，命名为：

| ID | 文件名 |
|----|--------|
| 1 | `1.mp4` |
| 2 | `2.mp4` |
| 3 | `3.mp4` |
| 4 | `4.mp4` |
| 5 | `5.mp4` |
| 6 | `6.mp4` |
| 7 | `7.mp4` |
| 8 | `8.mp4` |

### 静帧作品 (5张)

将图片文件放入 `assets/images/` 目录，命名为：

| ID | 文件名 |
|----|--------|
| 9 | `9.jpg` |
| 10 | `10.jpg` |
| 11 | `11.jpg` |
| 12 | `12.jpg` |
| 13 | `13.jpg` |

### 作品数据编辑

在 `js/main.js` 中可以修改作品信息：

```javascript
const worksData = {
  video: [
    {
      id: 1,
      title: "燧发枪品宣",      // 作品名称
      category: "Commercial",   // 分类
      year: "2024",             // 年份
      thumbnail: "",            // 缩略图（可指定路径）
      description: "..."        // 作品描述
    },
    // ...
  ],
  image: [
    // 静帧作品...
  ]
};
```

---

## 🎨 自定义修改

### 颜色配置

在 `css/style.css` 中修改 CSS 变量：

```css
:root {
  --color-bg: #000000;           /* 背景色 */
  --color-text: #FFFFFF;         /* 文字色 */
  --color-accent-red: #B22222;   /* 强调色-暗红 */
  --color-accent-silver: #C0C0C0;/* 强调色-银灰 */
}
```

### 联系方式

1. **邮箱**: 在 `index.html` 和 `about.html` 中搜索 `3335774630@qq.com` 并替换
2. **社交媒体**: 取消注释对应的链接代码块

### 添加社交媒体链接

在 `index.html` 和 `about.html` 中找到以下代码块，取消注释并修改：

```html
<!-- 
<a href="#" class="contact-link">
  <span class="icon">◉</span>
  <span>Behance</span>
</a>
-->
```

---

## 📱 响应式支持

网站已针对以下设备优化：
- 桌面端 (1200px+)
- 平板端 (768px - 1199px)
- 手机端 (320px - 767px)

---

## 🔧 技术栈

- **HTML5** - 语义化结构
- **CSS3** - 响应式布局 + CSS 动画
- **Vanilla JavaScript** - 无框架依赖
- **Google Fonts** - Oswald + Rajdhani 字体

---

## 📄 许可证

Copyright © 2024 aNan_Design. All Rights Reserved.

---

## 💡 提示

- 视频建议使用 MP4 (H.264) 格式，确保浏览器兼容
- 图片建议尺寸：宽度 1200px 以上
- 缩略图和详情图可以使用同一张图片
