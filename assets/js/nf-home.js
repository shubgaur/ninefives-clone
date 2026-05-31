/**
 * Homepage video play/pause — defers autoplay until in-view; respects reduced motion.
 */
(function () {
  'use strict';

  var videos = document.querySelectorAll(
    '.nf-video-single video, .nf-video-row video'
  );
  if (!videos.length) return;

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion) {
    videos.forEach(function (video) {
      video.pause();
      video.removeAttribute('autoplay');
      video.autoplay = false;
    });
    return;
  }

  if (!('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var video = entry.target;
        if (entry.isIntersecting) {
          var playPromise = video.play();
          if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(function () {});
          }
        } else {
          video.pause();
        }
      });
    },
    { root: null, rootMargin: '80px 0px', threshold: 0.15 }
  );

  videos.forEach(function (video) {
    video.pause();
    observer.observe(video);
  });
})();
