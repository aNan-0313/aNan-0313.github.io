// ========================================
// 作品集网站配置文件
// 修改这里的配置，网站会自动更新
// ========================================

const SITE_CONFIG = {
  // 网站基本信息
  site: {
    title: "aNan_Design | Motion Designer & 3D Artist",
    description: "aNan_Design - 三维动画设计师作品集 | 暗黑工业风 + 复古摇滚美学",
    author: "aNan_Design",
    email: "3335774630@qq.com"
  },

  // Hero区域
  hero: {
    title: "MOTION DESIGNER",
    name: "aNan_Design",
    subtitle: "3D Artist | 暗黑工业风 | 复古摇滚美学"
  },

  // 作品列表
  // thumbnail: 图片路径（放在 thumbnails/ 文件夹下）
  // type: "video" 或 "image"
  // featured: true 表示主视觉大卡片
  works: [
    {
      id: 4,
      title: "Keep Myself",
      category: "Motion Design",
      year: "2023",
      type: "video",
      thumbnail: "thumbnails/keep_myself_thumbnail.jpg",
      videoUrl: "https://www.coze.cn/s/20Eu4JtOTy4/",
      description: "蒸汽朋克美学自19世纪工业革命的废墟中诞生，它将维多利亚时代的优雅与机械时代的粗犷熔于一炉。",
      featured: true
    },
    {
      id: 1,
      title: "燧发枪品宣",
      category: "Commercial",
      year: "2024",
      type: "video",
      thumbnail: "thumbnails/suifa_thumbnail.jpg",
      videoUrl: "https://www.coze.cn/s/xwix75zvZOI/"
    },
    {
      id: 2,
      title: "520老虎机",
      category: "Interactive",
      year: "2024",
      type: "video",
      thumbnail: "thumbnails/520_thumbnail.jpg",
      videoUrl: "https://www.coze.cn/s/yNGeWUzywBs/"
    },
    {
      id: 3,
      title: "西部世界",
      category: "3D Animation",
      year: "2024",
      type: "video",
      thumbnail: "thumbnails/westworld_thumbnail.jpg",
      videoUrl: "https://www.coze.cn/s/zvmfHal4Rhc/"
    },
    {
      id: 5,
      title: "圣诞主视觉",
      category: "Holiday Campaign",
      year: "2023",
      type: "video",
      thumbnail: "thumbnails/christmas_thumbnail.jpg",
      videoUrl: "https://www.coze.cn/s/2atgwCxqWQM/"
    },
    {
      id: 6,
      title: "圣诞机车雪橇",
      category: "3D Animation",
      year: "2023",
      type: "video",
      thumbnail: "thumbnails/christmas_bike_thumbnail.jpg",
      videoUrl: "https://www.coze.cn/s/CJdkfQ9qAFg/"
    },
    {
      id: 7,
      title: "金属字母动画",
      category: "Typography",
      year: "2023",
      type: "video",
      thumbnail: "thumbnails/metal_letter_thumbnail.jpg",
      videoUrl: "https://www.coze.cn/s/CvvCsJhuq4s/"
    },
    {
      id: 8,
      title: "玻璃雕塑",
      category: "3D Art",
      year: "2023",
      type: "image",
      thumbnail: "thumbnails/glass_sculpture_thumbnail.jpg"
    },
    {
      id: 9,
      title: "姜饼人砸击火山",
      category: "3D Illustration",
      year: "2024",
      type: "image",
      thumbnail: "thumbnails/gingerbread_volcano.jpg"
    },
    {
      id: 10,
      title: "甜甜圈",
      category: "Product Visualization",
      year: "2024",
      type: "image",
      thumbnail: "thumbnails/donut.jpg"
    },
    {
      id: 11,
      title: "捕兽夹",
      category: "Prop Design",
      year: "2023",
      type: "image",
      thumbnail: "thumbnails/bear_trap.jpg"
    },
    {
      id: 12,
      title: "匕首人像",
      category: "Character Design",
      year: "2023",
      type: "image",
      thumbnail: "thumbnails/dagger_portrait.jpg"
    },
    {
      id: 13,
      title: "燃烧旗帜",
      category: "3D Art",
      year: "2023",
      type: "image",
      thumbnail: "thumbnails/burning_flag.jpg"
    }
  ],

  // About页面
  about: {
    name: "邓健楠",
    title: "三维动画设计师 / Motion Designer / 27岁",
    bio: "四年深耕3D视觉艺术，专注于将工业美学与创意叙事融合，创造具有强烈视觉冲击力的数字作品。暗黑工业风与复古摇滚美学的结合，造就了独树一帜的设计语言。",
    skills: {
      "3D Design": [
        "3D场景搭建与建模",
        "PBR材质制作与渲染",
        "光影氛围营造",
        "产品可视化"
      ],
      "Motion Design": [
        "动态图形设计",
        "3D动画制作",
        "视觉特效合成",
        "品牌动态视觉"
      ]
    },
    software: ["C4D", "Octane Render", "Photoshop", "After Effects", "DaVinci Resolve", "Substance Painter"]
  }
};

// 导出配置（网站会读取这个变量）
if (typeof window !== 'undefined') {
  window.SITE_CONFIG = SITE_CONFIG;
}
