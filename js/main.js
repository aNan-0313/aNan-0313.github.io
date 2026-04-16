/* ========================================
   aNan_Design Portfolio - Main JavaScript
   交互逻辑与动效控制
   ======================================== */

// ========================================
// 作品数据
// ========================================
const worksData = {
  video: [
    {
      id: 1,
      title: "燧发枪品宣",
      category: "Commercial",
      year: "2024",
      thumbnail: "https://www.coze.cn/s/xwix75zvZOI/",
      videoUrl: "https://www.coze.cn/s/xwix75zvZOI/",
      description: "为复古火器品牌打造的3D产品宣传片，融合工业金属质感与古典美学，展现燧发枪的精密机械结构与历史韵味。"
    },
    {
      id: 2,
      title: "520老虎机",
      category: "Interactive",
      year: "2024",
      thumbnail: "https://www.coze.cn/s/yNGeWUzywBs/",
      videoUrl: "https://www.coze.cn/s/yNGeWUzywBs/",
      description: "520情人节限定老虎机视觉设计，将浪漫元素与赌博机制结合，创造独特的情感消费体验。"
    },
    {
      id: 3,
      title: "西部世界",
      category: "3D Animation",
      year: "2024",
      thumbnail: "https://www.coze.cn/s/zvmfHal4Rhc/",
      videoUrl: "https://www.coze.cn/s/zvmfHal4Rhc/",
      description: "致敬经典科幻美剧《西部世界》的3D场景重建，探索人工智能与人类意识的边界。"
    },
    {
      id: 4,
      title: "Keep Myself",
      category: "Motion Design",
      year: "2023",
      thumbnail: "https://www.coze.cn/s/20Eu4JtOTy4/",
      videoUrl: "https://www.coze.cn/s/20Eu4JtOTy4/",
      description: "个人品牌视觉动画，探讨自我认同与坚持的主题，运用蒸汽朋克美学打造独特的视觉语言。"
    },
    {
      id: 5,
      title: "圣诞主视觉",
      category: "Holiday Campaign",
      year: "2023",
      thumbnail: "https://www.coze.cn/s/2atgwCxqWQM/",
      videoUrl: "https://www.coze.cn/s/2atgwCxqWQM/",
      description: "暗黑风格圣诞主题视觉设计，颠覆传统温馨氛围，以工业金属与暗红配色打造哥特式圣诞美学。"
    },
    {
      id: 6,
      title: "圣诞机车雪橇",
      category: "3D Animation",
      year: "2023",
      thumbnail: "https://www.coze.cn/s/CJdkfQ9qAFg/",
      videoUrl: "https://www.coze.cn/s/CJdkfQ9qAFg/",
      description: "将圣诞老人的传统雪橇重新诠释为暗黑工业风机车，结合蒸汽朋克元素创造全新的节日想象。"
    },
    {
      id: 7,
      title: "金属字母动画",
      category: "Typography",
      year: "2023",
      thumbnail: "https://www.coze.cn/s/CvvCsJhuq4s/",
      videoUrl: "https://www.coze.cn/s/CvvCsJhuq4s/",
      description: "金属质感3D字体动画展示，探索材质渲染与动态设计的结合，每一笔都充满工业力量感。"
    },
    {
      id: 8,
      title: "玻璃雕塑",
      category: "3D Art",
      year: "2023",
      thumbnail: "thumbnails/glass_sculpture_thumbnail.jpg",
      videoUrl: "用户上传/403faf702c1da2741c7b36e4fb0c4084_raw_1775636109661_3_62yz.mp4",
      description: "玻璃材质与工业造型的融合实验，通过光线的折射与反射创造独特的视觉艺术作品。"
    },
    {
      id: 14,
      title: "Garage广告牌",
      category: "3D Visualization",
      year: "2024",
      thumbnail: "thumbnails/garage_thumbnail.jpg",
      videoUrl: "用户上传/60e44640f0d374be377f0a623dfefce4_raw_1775636109661_1_p7ft.mp4",
      description: "暗黑工业风格的户外广告牌设计，融合车库摇滚与机车文化的硬核调性，展现复古金属质感。"
    },
    {
      id: 15,
      title: "吐司黄油创意",
      category: "Product 3D",
      year: "2024",
      thumbnail: "thumbnails/toast_butter_thumbnail.jpg",
      videoUrl: "用户上传/94be6434fb4ad7c29331689bac7328bd_raw_1775636109661_2_kh9z.mp4",
      description: "超写实食品渲染作品，将日常吐司与黄油赋予ROCK&RIDE品牌视觉，传递自由不羁的生活态度。"
    },
    {
      id: 16,
      title: "ROCK CAFE海报",
      category: "Brand Visual",
      year: "2024",
      thumbnail: "thumbnails/rock_cafe_thumbnail.jpg",
      videoUrl: "用户上传/d6c7f4dabfdbb8bbec3f44f32e85ec5f_raw_1775636109661_5_0yz8.mp4",
      description: "美式复古街头风格海报设计，将咖啡元素与摇滚精神结合，打造自由灵魂的品牌形象。"
    }
  ],
  image: [
    {
      id: 9,
      title: "姜饼人砸击火山",
      category: "3D Illustration",
      year: "2024",
      thumbnail: "https://www.coze.cn/s/gcsa_bb0VdM/",
      imageUrl: "https://www.coze.cn/s/gcsa_bb0VdM/",
      description: "将童话角色置于末日场景，姜饼人的甜蜜与火山的毁灭性形成强烈对比，营造荒诞又壮观的视觉效果。"
    },
    {
      id: 10,
      title: "甜甜圈",
      category: "Product Visualization",
      year: "2024",
      thumbnail: "https://www.coze.cn/s/dfPV4kQZNGI/",
      imageUrl: "https://www.coze.cn/s/dfPV4kQZNGI/",
      description: "高写实食品渲染，将日常甜品赋予暗黑美学的诠释，糖霜与金属质感的意外融合。"
    },
    {
      id: 11,
      title: "捕兽夹",
      category: "Prop Design",
      year: "2023",
      thumbnail: "https://www.coze.cn/s/gPDSmknzkfQ/",
      imageUrl: "https://www.coze.cn/s/gPDSmknzkfQ/",
      description: "工业时代捕兽装置的3D再现，细致的金属做旧处理与机械结构展示，体现工匠精神。"
    },
    {
      id: 12,
      title: "匕首人像",
      category: "Character Design",
      year: "2023",
      thumbnail: "https://www.coze.cn/s/gSCN-lmGt9A/",
      imageUrl: "https://www.coze.cn/s/gSCN-lmGt9A/",
      description: "将武器与人脸结合的创意概念设计，探索危险与美学的边界，匕首既是装饰也是身份象征。"
    },
    {
      id: 13,
      title: "燃烧旗帜",
      category: "3D Art",
      year: "2023",
      thumbnail: "https://www.coze.cn/s/dtWtOaax4J0/",
      imageUrl: "https://www.coze.cn/s/dtWtOaax4J0/",
      description: "燃烧中的旗帜动态静帧，火焰与布料的物理模拟，展现毁灭与重生的永恒主题。"
    }
  ]
};

// ========================================
// DOM 加载完成后初始化
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initMobileMenu();
  initScrollEffects();
  
  // 如果在首页，加载作品网格
  if (document.getElementById('works-container')) {
    loadWorksGrid();
  }
});

// ========================================
// 导航功能
// ========================================
function initNavigation() {
  // 获取当前页面路径，高亮对应导航项
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (currentPath.includes(href) && href !== 'index.html') {
      link.classList.add('active');
    } else if (currentPath === '/' || currentPath.includes('index.html')) {
      if (href === 'index.html') {
        link.classList.add('active');
      }
    }
  });
}

// ========================================
// 移动端菜单
// ========================================
function initMobileMenu() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      this.classList.toggle('active');
    });
    
    // 点击链接后关闭菜单
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });
  }
}

// ========================================
// 滚动效果
// ========================================
function initScrollEffects() {
  // 导航栏滚动效果
  const nav = document.querySelector('.nav');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // 添加/移除滚动阴影
    if (currentScroll > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
  
  // 滚动显示动画
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // 观察需要动画的元素
  document.querySelectorAll('.work-card, .skill-category, .software-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}

// ========================================
// 加载作品网格
// ========================================
function loadWorksGrid() {
  const container = document.getElementById('works-container');
  if (!container) return;
  
  // 合并视频和图片作品
  const allWorks = [
    ...worksData.video.map(w => ({...w, type: 'video'})),
    ...worksData.image.map(w => ({...w, type: 'image'}))
  ];
  
  // 按ID排序
  allWorks.sort((a, b) => a.id - b.id);
  
  // 生成HTML
  container.innerHTML = allWorks.map(work => `
    <article class="work-card ${work.type}" data-id="${work.id}" data-type="${work.type}">
      ${work.type === 'video' ? '<span class="video-badge">VIDEO</span>' : '<span class="video-badge" style="background: var(--color-accent-silver);">IMAGE</span>'}
      <div class="work-thumbnail">
        ${work.thumbnail 
          ? `<img src="${work.thumbnail}" alt="${work.title}" loading="lazy">`
          : `<div class="placeholder">${work.type === 'video' ? '▶' : '◼'}</div>`
        }
        <div class="play-icon"></div>
      </div>
      <div class="work-info">
        <h3>${work.title}</h3>
        <p>${work.category} / ${work.year}</p>
      </div>
    </article>
  `).join('');
  
  // 添加点击事件
  container.querySelectorAll('.work-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      const type = card.dataset.type;
      window.location.href = `work.html?id=${id}&type=${type}`;
    });
  });
}

// ========================================
// 获取URL参数
// ========================================
function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    id: params.get('id'),
    type: params.get('type')
  };
}

// ========================================
// 加载作品详情
// ========================================
function loadWorkDetail() {
  const { id, type } = getUrlParams();
  if (!id) {
    window.location.href = 'index.html';
    return;
  }
  
  // 找到对应作品
  const works = type === 'video' ? worksData.video : worksData.image;
  const work = works.find(w => w.id == id);
  
  if (!work) {
    window.location.href = 'index.html';
    return;
  }
  
  // 填充页面内容
  document.getElementById('work-title').textContent = work.title;
  document.getElementById('work-category').textContent = work.category;
  document.getElementById('work-year').textContent = work.year;
  document.getElementById('work-description').textContent = work.description;
  
  // 设置媒体展示
  const mediaContainer = document.getElementById('media-container');
  if (type === 'video') {
    // 判断是否为Vimeo链接
    if (work.videoUrl && work.videoUrl.includes('vimeo.com')) {
      mediaContainer.innerHTML = `
        <div class="video-player" style="padding: 56.25% 0 0 0; position: relative;">
          <iframe src="${work.videoUrl}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      `;
    } else {
      mediaContainer.innerHTML = `
        <div class="video-player">
          <video controls autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover; background: #000;">
            <source src="${work.videoUrl || work.thumbnail}" type="video/mp4">
            您的浏览器不支持视频播放
          </video>
        </div>
      `;
    }
  } else {
    mediaContainer.innerHTML = `
      <div class="image-gallery">
        <img src="${work.imageUrl || work.thumbnail}" alt="${work.title}" style="width: 100%; height: auto; object-fit: contain; background: #000;">
      </div>
    `;
  }
  
  // 更新页面标题
  document.title = `${work.title} - aNan_Design`;
}

// ========================================
// 平滑滚动到锚点
// ========================================
function smoothScrollTo(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// ========================================
// 键盘导航
// ========================================
document.addEventListener('keydown', function(e) {
  // ESC 返回上一页
  if (e.key === 'Escape') {
    const backBtn = document.querySelector('.back-button');
    if (backBtn) {
      backBtn.click();
    }
  }
});

// ========================================
// 作品详情页初始化
// ========================================
if (window.location.pathname.includes('work.html')) {
  document.addEventListener('DOMContentLoaded', loadWorkDetail);
}

// ========================================
// 导出数据供外部使用
// ========================================
window.aNanPortfolio = {
  worksData: worksData,
  getWorkById: function(id, type) {
    const works = type === 'video' ? worksData.video : worksData.image;
    return works.find(w => w.id == id);
  }
};
