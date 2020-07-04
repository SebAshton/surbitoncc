function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

const bindScroll = function() {
  document.addEventListener('scroll', function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById('header').classList.add('stuck');
    } else {
      document.getElementById('header').classList.remove('stuck');
    }
  });
}

ready(bindScroll);
