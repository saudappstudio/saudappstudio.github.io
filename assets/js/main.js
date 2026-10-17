/**
 * SAUD APP STUDIO - Official JavaScript Utilities
 * Interactivity, category filtering, FAQ accordions, sharing, and configuration.
 */

// Global Studio Configuration (User can update these links anytime)
const STUDIO_CONFIG = {
  developerName: "Saud App Studio",
  supportEmail: "contact@saudappstudio.com",
  playStoreDeveloperUrl: "https://play.google.com/store/apps/dev?id=saudappstudio",
  dictionaryAppUrl: "https://play.google.com/store/apps/details?id=com.saudappstudio.advancedenglishdictionary",
  githubUrl: "https://github.com/saudappstudio"
};

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initCategoryTabs();
  initFaqAccordion();
  initNavbarScroll();
  initCurrentYear();
  initShareButtons();
});

/**
 * Mobile Navigation Drawer
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    toggleBtn.innerHTML = isOpen ? '✕' : '☰';
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggleBtn.innerHTML = '☰';
    });
  });
}

/**
 * Navbar background effect on scroll
 */
function initNavbarScroll() {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.style.background = 'rgba(7, 9, 14, 0.92)';
      nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    } else {
      nav.style.background = 'rgba(7, 9, 14, 0.78)';
      nav.style.boxShadow = 'none';
    }
  });
}

/**
 * Portfolio Category Filter Tabs
 */
function initCategoryTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const appCards = document.querySelectorAll('.app-card');

  if (!tabBtns.length || !appCards.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      appCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease';
            card.style.opacity = '1';
          }, 10);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Interactive FAQ Accordions
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other accordions
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const icon = otherItem.querySelector('.faq-icon');
        if (icon) icon.textContent = '+';
      });

      if (!isActive) {
        item.classList.add('active');
        const icon = item.querySelector('.faq-icon');
        if (icon) icon.textContent = '✕';
      }
    });
  });
}

/**
 * Dynamic Current Year in Footer
 */
function initCurrentYear() {
  const yearElements = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = currentYear;
  });
}

/**
 * Share App & Copy Link Handler
 */
function initShareButtons() {
  const shareBtns = document.querySelectorAll('[data-share-url]');
  shareBtns.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const url = btn.getAttribute('data-share-url') || window.location.href;
      const title = btn.getAttribute('data-share-title') || document.title;

      if (navigator.share) {
        try {
          await navigator.share({
            title: title,
            text: 'Check out this awesome app by Saud App Studio!',
            url: url
          });
          return;
        } catch (err) {
          // User cancelled or share failed, fallback to copy
        }
      }

      // Clipboard fallback
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
          showToast('🔗 Link copied to clipboard!');
        }).catch(() => {
          showToast('Failed to copy link.');
        });
      }
    });
  });
}

/**
 * Floating Toast Notification
 */
function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
