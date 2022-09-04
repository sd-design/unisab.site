var glide = new Glide('#advantageSlider', {
    type: 'carousel',
    perView: 4,
    breakpoints: {
      1024: {
        perView: 3
      },
      576: {
        perView: 1
      }
    }
  })
  
  glide.mount()