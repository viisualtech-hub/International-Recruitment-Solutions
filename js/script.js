document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  if (header) {
    header.style.background = 'rgba(255, 255, 255, .68)';
    header.style.borderColor = 'rgba(255, 255, 255, .72)';
    header.style.boxShadow = '0 12px 32px rgba(3, 18, 31, .16)';
    header.style.backdropFilter = 'blur(18px)';
    header.style.webkitBackdropFilter = 'blur(18px)';
  }
  document.querySelectorAll('.menu-toggle span').forEach(line => {
    line.style.background = 'var(--navy)';
  });
  document.querySelectorAll('.brand-copy').forEach(copy => {
    copy.remove();
  });
  document.querySelectorAll('.site-footer .brand').forEach(brand => {
    const summary = document.createElement('p');
    summary.className = 'footer-note';
    summary.textContent = 'International Recruitment Solutions connects people with opportunities and helps businesses build capable teams through recruitment, staffing and professional training.';
    brand.replaceWith(summary);
  });
  document.querySelectorAll('.site-nav>a:not(.button)').forEach(link => {
    link.style.color = 'var(--navy)';
  });
  document.querySelectorAll('.site-nav>a.active').forEach(link => {
    link.style.background = 'rgba(255,255,255,.58)';
    link.style.color = 'var(--navy)';
  });
  const resizeBrand = () => {
    const compact = window.matchMedia('(max-width: 720px)').matches;
    document.querySelectorAll('.brand').forEach(brand => {
      brand.style.minWidth = '0';
      brand.style.flex = '0 1 auto';
      brand.style.alignItems = 'center';
      brand.style.overflow = 'visible';
    });
    document.querySelectorAll('.brand-mark').forEach(mark => {
      const width = '160px';
      mark.style.width = width;
      mark.style.height = '50px';
      mark.style.flex = `0 0 ${width}`;
      mark.style.minWidth = '0';
      mark.style.display = 'flex';
      mark.style.alignItems = 'center';
      mark.style.justifyContent = 'center';
    });
  };
  resizeBrand();
  window.addEventListener('resize', resizeBrand);
  document.querySelectorAll('.slider-dots').forEach(dots => {
    dots.style.position = 'absolute';
    dots.style.width = '1px';
    dots.style.height = '1px';
    dots.style.overflow = 'hidden';
    dots.style.clip = 'rect(0 0 0 0)';
    dots.style.clipPath = 'inset(50%)';
    dots.style.whiteSpace = 'nowrap';
  });
  document.querySelectorAll('.whatsapp').forEach(button => {
    button.innerHTML = '<svg aria-hidden="true" viewBox="0 0 24 24" width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 2.5a9.45 9.45 0 0 0-8.1 14.3L2.5 21.5l4.85-1.35A9.5 9.5 0 1 0 12 2.5Zm0 17.1a7.6 7.6 0 0 1-3.87-1.06l-.28-.17-2.88.8.82-2.8-.18-.29A7.6 7.6 0 1 1 12 19.6Zm4.17-5.65c-.23-.12-1.35-.67-1.56-.75-.21-.08-.36-.12-.52.12-.15.23-.59.75-.72.9-.13.16-.27.18-.5.06-.23-.11-.96-.35-1.83-1.12-.68-.6-1.13-1.34-1.26-1.57-.13-.23-.01-.36.1-.48.11-.11.23-.27.35-.4.12-.14.16-.23.24-.39.08-.16.04-.29-.02-.41-.06-.12-.52-1.25-.71-1.7-.19-.45-.38-.39-.52-.4h-.44c-.16 0-.41.06-.62.29-.21.23-.81.79-.81 1.93 0 1.14.83 2.24.94 2.39.12.15 1.63 2.49 3.95 3.49.55.24.98.38 1.31.49.55.17 1.05.15 1.45.09.44-.07 1.35-.55 1.54-1.08.19-.53.19-.98.13-1.08-.05-.1-.2-.16-.43-.27Z"/></svg>';
    button.setAttribute('aria-label', 'Chat with us on WhatsApp');
    button.style.width = '56px';
    button.style.height = '56px';
    button.style.padding = '0';
    button.style.borderRadius = '50%';
    button.style.fontSize = '25px';
  });

  document.querySelectorAll('.brand-mark').forEach(mark => {
    mark.textContent = '';
    mark.style.background = 'transparent';
    mark.style.borderRadius = '0';
    mark.style.width = '160px';
    mark.style.height = '50px';
    mark.style.overflow = 'visible';
    mark.style.alignSelf = 'center';
    mark.style.flex = `0 1 ${mark.style.width}`;
    const logo = new Image();
    logo.alt = 'International Recruitment Solutions logo';
    logo.addEventListener('load', () => {
      const canvas = document.createElement('canvas');
      const scale = Math.min(1, 600 / logo.naturalWidth);
      canvas.width = Math.max(1, Math.round(logo.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(logo.naturalHeight * scale));
      canvas.setAttribute('role', 'img');
      canvas.setAttribute('aria-label', logo.alt);
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.objectFit = 'contain';
      const context = canvas.getContext('2d');
      context.drawImage(logo, 0, 0, canvas.width, canvas.height);
      const pixels = context.getImageData(0, 0, canvas.width, canvas.height);
      for (let y = 0; y < canvas.height; y += 1) {
        for (let x = 0; x < canvas.width; x += 1) {
          const pixel = (y * canvas.width + x) * 4;
          if (pixels.data[pixel] >= 238 && pixels.data[pixel + 1] >= 238 && pixels.data[pixel + 2] >= 238) {
            pixels.data[pixel + 3] = 0;
          }
        }
      }
      context.putImageData(pixels, 0, 0);
      let left = canvas.width;
      let top = canvas.height;
      let right = 0;
      let bottom = 0;
      for (let y = 0; y < canvas.height; y += 1) {
        for (let x = 0; x < canvas.width; x += 1) {
          if (pixels.data[(y * canvas.width + x) * 4 + 3] > 8) {
            left = Math.min(left, x);
            top = Math.min(top, y);
            right = Math.max(right, x);
            bottom = Math.max(bottom, y);
          }
        }
      }
      if (right >= left && bottom >= top) {
        const padding = 4;
        const cropped = document.createElement('canvas');
        cropped.width = right - left + 1 + padding * 2;
        cropped.height = bottom - top + 1 + padding * 2;
        cropped.setAttribute('role', 'img');
        cropped.setAttribute('aria-label', logo.alt);
        cropped.style.width = 'auto';
        cropped.style.height = '100%';
        cropped.style.objectFit = 'contain';
        cropped.style.maxWidth = '100%';
        cropped.style.maxHeight = '100%';
        cropped.style.display = 'block';
        cropped.getContext('2d').drawImage(canvas, left, top, right - left + 1, bottom - top + 1, padding, padding, right - left + 1, bottom - top + 1);
        mark.replaceChildren(cropped);
      } else {
        mark.replaceChildren(canvas);
      }
    });
    logo.addEventListener('error', () => {
      mark.textContent = 'International Recruitment Solutions (Pty) Ltd';
      mark.style.width = '160px';
      mark.style.height = '50px';
      mark.style.border = '1px dashed currentColor';
      mark.style.borderRadius = '8px';
      mark.style.fontSize = '9px';
      mark.style.letterSpacing = '.04em';
    }, { once: true });
    logo.src = 'assets/logo/company-logo.png';
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (menuToggle && nav) {
    const closeMenu = () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
    };
    menuToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    document.addEventListener('click', event => {
      if (nav.classList.contains('open') && !nav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
    });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  }

  const slidesHost = document.querySelector('.hero-slides');
  const dotsHost = document.querySelector('.slider-dots');
  if (slidesHost && dotsHost) {
    SITE_IMAGES.hero.forEach((path, index) => {
      const slide = document.createElement('div'); slide.className = `hero-slide${index === 0 ? ' active' : ''}`;
      slide.dataset.image = path; slidesHost.appendChild(slide);
      const dot = document.createElement('button'); dot.className = `slider-dot${index === 0 ? ' active' : ''}`; dot.type = 'button'; dot.setAttribute('aria-label', `Show hero image ${index + 1}`); dot.dataset.slide = index; dotsHost.appendChild(dot);
      loadConfiguredImage(slide, path, `Hero image ${index + 1}`);
    });
    const slides = [...slidesHost.children]; const dots = [...dotsHost.children]; let current = 0; let timer;
    const show = index => { current = (index + slides.length) % slides.length; slides.forEach((slide, i) => slide.classList.toggle('active', i === current)); dots.forEach((dot, i) => dot.classList.toggle('active', i === current)); };
    const restart = () => { clearInterval(timer); timer = setInterval(() => show(current + 1), 6000); };
    document.querySelector('.slider-prev')?.addEventListener('click', () => { show(current - 1); restart(); }); document.querySelector('.slider-next')?.addEventListener('click', () => { show(current + 1); restart(); }); dots.forEach(dot => dot.addEventListener('click', () => { show(Number(dot.dataset.slide)); restart(); })); restart();
  }

  document.querySelectorAll('[data-services]').forEach(host => SERVICE_DATA.forEach(service => host.appendChild(createServiceCard(service))));
  document.querySelectorAll('[data-image-key]').forEach(element => {
    const key = element.dataset.imageKey;
    if (SITE_IMAGES[key]) loadConfiguredImage(element, SITE_IMAGES[key], element.dataset.imageAlt || key);
  });
  const trainingGrid = document.querySelector('.training-grid');
  if (trainingGrid && SITE_IMAGES.training) {
    const trainingImage = document.createElement('div');
    trainingImage.className = 'training-feature-image';
    trainingImage.style.minHeight = 'clamp(220px, 34vw, 420px)';
    trainingImage.style.marginBottom = '28px';
    trainingImage.style.borderRadius = '22px';
    trainingImage.style.backgroundSize = 'cover';
    trainingImage.style.backgroundPosition = 'center';
    trainingImage.style.overflow = 'hidden';
    trainingGrid.parentNode.insertBefore(trainingImage, trainingGrid);
    loadConfiguredImage(trainingImage, SITE_IMAGES.training, 'Hospitality training session with International Recruitment Solutions');
  }
  const modal = document.querySelector('.modal');
  document.querySelectorAll('[data-service-key]').forEach(button => button.addEventListener('click', () => openServiceModal(button.dataset.serviceKey)));
  document.querySelectorAll('[data-close-modal]').forEach(button => button.addEventListener('click', closeServiceModal));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeServiceModal(); });

  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold:.12 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

  function createServiceCard(service) {
    const article = document.createElement('article'); article.className = 'service-card reveal';
    article.innerHTML = `<div class="service-image" data-image-path="${SITE_IMAGES.services[service.key]}"></div><div class="service-body"><h3>${service.title}</h3><p>${service.description}</p><div class="service-footer"><button type="button" data-service-key="${service.key}">Learn more</button><a class="text-link" href="contact.html?type=employer">Request staff <span>↗</span></a></div></div>`;
    loadConfiguredImage(article.querySelector('[data-image-path]'), SITE_IMAGES.services[service.key], service.title); article.querySelector('[data-service-key]').addEventListener('click', () => openServiceModal(service.key)); return article;
  }
  function loadConfiguredImage(element, path, label) { const image = new Image(); image.onload = () => { element.style.backgroundImage = `url("${path}")`; element.setAttribute('role','img'); element.setAttribute('aria-label', label); }; image.onerror = () => { element.innerHTML = `<div class="image-placeholder">Upload image<br><small>${path}</small></div>`; }; image.src = path; }
  function openServiceModal(key) { const service = SERVICE_DATA.find(item => item.key === key); if (!service || !modal) return; modal.querySelector('[data-modal-title]').textContent = service.title; modal.querySelector('[data-modal-description]').textContent = service.description; modal.querySelector('[data-modal-benefits]').innerHTML = service.benefits.map(item => `<li>${item}</li>`).join(''); const image = modal.querySelector('[data-modal-image]'); image.innerHTML = ''; loadConfiguredImage(image, SITE_IMAGES.services[key], service.title); modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; modal.querySelector('.modal-close').focus(); }
  function closeServiceModal() { if (!modal) return; modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }
});
