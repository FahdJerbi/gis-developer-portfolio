// Fahd Jerbi - GIS Developer Portfolio JS

document.addEventListener("DOMContentLoaded", () => {
  // 1. Navbar Scroll Effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const isOpen = navLinks.classList.contains("open");
      mobileToggle.setAttribute("aria-expanded", isOpen);
    });

    // Close mobile nav when clicking a link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  // 3. Smooth active link indicator on scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute("id");
      const navItem = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add("active");
        } else {
          navItem.classList.remove("active");
        }
      }
    });
  });

  // 4. Project GIF Preview Modal
  const modalOverlay = document.getElementById("gifModal");
  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalClose = document.getElementById("modalClose");

  const gifTriggers = document.querySelectorAll("[data-preview-src]");
  gifTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const src = trigger.getAttribute("data-preview-src");
      const title =
        trigger.getAttribute("data-preview-title") || "Project Preview";

      if (modalOverlay && modalImg && modalTitle) {
        modalImg.src = src;
        modalTitle.textContent = title;
        modalOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  const closeModal = () => {
    if (modalOverlay) {
      modalOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  };

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      modalOverlay &&
      modalOverlay.classList.contains("active")
    ) {
      closeModal();
    }
  });

  // 5. Copy Email to Clipboard
  const copyBtn = document.getElementById("copyEmailBtn");
  const copyToast = document.getElementById("copyToast");

  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const email = "fahd.jerbi@fshst.u-tunis.tn";
      try {
        await navigator.clipboard.writeText(email);
        if (copyToast) {
          copyToast.classList.add("show");
          setTimeout(() => {
            copyToast.classList.remove("show");
          }, 3000);
        }
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        if (copyToast) {
          copyToast.classList.add("show");
          setTimeout(() => copyToast.classList.remove("show"), 3000);
        }
      }
    });
  }
});
