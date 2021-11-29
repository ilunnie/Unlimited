const btn = document.querySelectorAll('.col-md-3 img');

btn.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
    smoothScrollTo(0, 0);
  }