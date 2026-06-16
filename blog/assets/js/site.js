(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const body = document.body;

  const markReady = () => {
    body.classList.add("page-ready");
    body.classList.remove("page-exit");
  };

  const setupThemeToggle = () => {
    const toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", () => {
      const isDark = document.documentElement.classList.toggle("dark");
      localStorage.setItem("pref-theme", isDark ? "dark" : "light");
    });
  };

  const setupHeaderScroll = () => {
    const header = document.querySelector(".header");
    if (!header) return;

    let previousY = Math.max(window.scrollY, 0);
    let ticking = false;

    const setHidden = (hidden) => {
      body.classList.toggle("site-header-hidden", hidden);
    };

    const update = () => {
      const currentY = Math.max(window.scrollY, 0);
      const goingDown = currentY > previousY + 4;
      const goingUp = currentY < previousY - 4;

      if (currentY <= 8 || goingUp) {
        setHidden(false);
      } else if (goingDown && currentY > 72) {
        setHidden(true);
      }

      previousY = currentY;
      ticking = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );

    header.addEventListener("focusin", () => setHidden(false));
    update();
  };

  const shouldAnimateNavigation = (link) => {
    if (prefersReducedMotion.matches) return false;
    if (link.target || link.hasAttribute("download")) return false;
    if (link.dataset.noTransition === "true") return false;

    const url = new URL(link.href, window.location.href);
    const sameOrigin = url.origin === window.location.origin;
    const samePath = url.pathname === window.location.pathname && url.search === window.location.search;

    return sameOrigin && !(samePath && url.hash);
  };

  const setupPageTransitions = () => {
    window.addEventListener("pageshow", markReady);

    document.addEventListener("click", (event) => {
      const link = event.target.closest("a[href]");
      if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      if (!shouldAnimateNavigation(link)) return;

      event.preventDefault();
      body.classList.add("page-exit");
      window.setTimeout(() => {
        window.location.href = link.href;
      }, 150);
    });
  };

  const setupImageLightbox = () => {
    const images = [...document.querySelectorAll(".prose img")];
    if (images.length === 0) return;

    const dialog = document.createElement("dialog");
    dialog.className = "lightbox-dialog";
    dialog.innerHTML = `
      <button class="lightbox-close" type="button" aria-label="이미지 닫기">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 6l12 12M18 6 6 18"></path>
        </svg>
      </button>
      <figure class="lightbox-frame">
        <img alt="">
        <figcaption></figcaption>
      </figure>
    `;
    document.body.appendChild(dialog);

    const lightboxImage = dialog.querySelector("img");
    const caption = dialog.querySelector("figcaption");
    const closeButton = dialog.querySelector(".lightbox-close");

    const close = () => {
      if (dialog.open && typeof dialog.close === "function") {
        dialog.close();
      } else {
        dialog.removeAttribute("open");
        dialog.classList.remove("is-open");
        body.classList.remove("lightbox-open");
      }
    };

    const open = (image) => {
      const label = image.alt || "";
      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = label;
      caption.textContent = label;
      caption.hidden = label.length === 0;
      body.classList.add("lightbox-open");

      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        dialog.setAttribute("open", "");
        dialog.classList.add("is-open");
      }

      closeButton.focus({ preventScroll: true });
    };

    images.forEach((image) => {
      image.classList.add("zoomable-image");
      image.tabIndex = 0;
      image.setAttribute("role", "button");
      image.setAttribute("aria-label", image.alt ? `${image.alt} 크게 보기` : "이미지 크게 보기");

      image.addEventListener("click", () => open(image));
      image.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          open(image);
        }
      });
    });

    closeButton.addEventListener("click", close);
    dialog.addEventListener("close", () => body.classList.remove("lightbox-open"));
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) close();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && dialog.open) close();
    });
  };

  markReady();
  setupThemeToggle();
  setupHeaderScroll();
  setupPageTransitions();
  setupImageLightbox();
})();
