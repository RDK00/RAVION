/**
 * RAVION - Minecraft Modpacks Landing Page
 * Clean Monochrome Controller
 */

// ============================================================================
// CONFIGURATION
// ============================================================================
const RAVION_CONFIG = {
  teamName: "RAVION",
  links: {
    boosty: "https://boosty.to/ravion",       // Ссылка на Boosty
    telegram: "https://t.me/ravion_team",     // Ссылка на Telegram
    discord: "https://discord.gg/ravion",     // Ссылка на Discord
  },
  launcher: {
    downloadUrl: "", // Укажите прямую ссылку на .exe файл лаунчера, когда он будет готов
    version: "1.0.0"
  },
  // Реальные сборки будут загружены сюда
  packs: [],
  // Ссылки на трейлеры (видео/gif) будут добавлены сюда
  trailers: []
};

// ============================================================================
// Launcher Download Handler
// ============================================================================
function initLauncherDownload() {
  const downloadBtn = document.getElementById('download-launcher-btn');
  if (!downloadBtn) return;

  downloadBtn.addEventListener('click', (e) => {
    if (!RAVION_CONFIG.launcher.downloadUrl) {
      e.preventDefault();
      alert("Установочный файл лаунчера RAVION находится на этапе финальной компиляции. Ссылка на загрузку появится здесь в ближайшее время!");
    } else {
      downloadBtn.href = RAVION_CONFIG.launcher.downloadUrl;
    }
  });
}

// ============================================================================
// FAQ Accordion
// ============================================================================
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!question || !answer) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          const otherAns = other.querySelector('.faq-answer');
          if (otherAns) otherAns.style.maxHeight = null;
        }
      });

      if (isActive) {
        item.classList.remove('active');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

// ============================================================================
// Navbar Scroll Effect & Mobile Drawer
// ============================================================================
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      if (navbar) navbar.classList.add('scrolled');
    } else {
      if (navbar) navbar.classList.remove('scrolled');
    }
  });

  if (mobileBtn && drawer) {
    mobileBtn.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
      });
    });
  }
}

// ============================================================================
// DOM Ready Entrypoint
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initLauncherDownload();
  initFaqAccordion();
  initNavigation();
});
