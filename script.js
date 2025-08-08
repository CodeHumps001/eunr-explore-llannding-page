document.addEventListener('DOMContentLoaded', function() {
  // Loader logic
  document.body.classList.add('loading');
  setTimeout(function() {
    var loader = document.getElementById('loader-bg');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(function() {
        loader.style.display = 'none';
        document.body.classList.remove('loading');
      }, 500);
    } else {
      document.body.classList.remove('loading');
    }
  }, 4000);

  // Fast fade-in animation for all elements with .fast-fade-in
  document.querySelectorAll('.fast-fade-in').forEach(function(el, i) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    setTimeout(function() {
      el.style.transition = 'opacity 0.5s, transform 0.5s';
      el.style.opacity = '1';
      el.style.transform = 'none';
    }, 150 + i * 80); // stagger for nicer effect
  });

  // Image pop-up modal logic
  document.querySelectorAll('.card img, .gallery img').forEach(function(img) {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
      var modalImg = document.getElementById('modalImage');
      modalImg.src = img.src;
      var modal = new bootstrap.Modal(document.getElementById('imageModal'));
      modal.show();
    });
  });
});