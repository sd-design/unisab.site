var glide = new Glide('#advantageSlider', {
    type: 'carousel',
    perView: 4,
    breakpoints: {
      1160: {
        perView: 3
      },
      1024: {
        perView: 2
      },
      800: {
        perView: 2
      },
      576: {
        perView: 1
      }
    }
  })

  var glideNews = new Glide('#newsSlider', {
    type: 'carousel',
    perView: 3,
    breakpoints: {
      1160: {
        perView: 3
      },
      1024: {
        perView: 2
      },
      800: {
        perView: 2
      },
      576: {
        perView: 1
      }
    }
  })
  glideNews.mount()
  glide.mount()