document.addEventListener("DOMContentLoaded", async () => {
  /**
   * 🔌 Fungsi untuk load file HTML ke elemen target
   */
  const loadPartial = async (id, file) => {
    try {
      const res = await fetch(file);
      const html = await res.text();
      document.getElementById(id).innerHTML = html;
    } catch (err) {
      console.error(`Gagal memuat ${file}:`, err);
    }
  };

  // ⏳ Muat semua partials
  await loadPartial("header", "partials/header.html");
  await loadPartial("nav", "partials/nav.html");
  await loadPartial("footer", "partials/footer.html");

  /**
   * 🧭 Toggle menu saat tombol hamburger diklik
   */
  const toggle = document.getElementById("menu-toggle");
  const links = document.getElementById("nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("collapsed");
    });
  }
});
