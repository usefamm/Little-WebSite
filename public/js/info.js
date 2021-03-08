const productColors = document.querySelectorAll('.product-colors span')

productColors.forEach(p => {
  p.addEventListener('click', function(e) {
    // remove class active in all elements
    productColors.forEach(p => p.classList.remove('active'))
    e.target.classList.add('active')

    // change styles
    document.body.style.backgroundColor = e.target.dataset.color
    document.querySelector('.product-price').style.color = e.target.dataset.color;
    document.querySelector('.product-button').style.color = e.target.dataset.color;
    document.querySelector('.product-image').style.backgroundImage = e.target.dataset.image;
  })
})