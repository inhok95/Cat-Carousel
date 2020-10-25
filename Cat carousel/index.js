function handleThumbnailClicks() {
  $('.thumbnail').on('click', function(event){
    let tnSrc = $(event.currentTarget).find('img').attr('src')
    let tnAlt = $(event.currentTarget).find('img').attr('alt')
    //console.log("tnSrc = " +tnSrc)
    //console.log("tnAlt = " +tnAlt)
    
    $('.hero img').attr('src', tnSrc).attr('alt', tnAlt)
  })
}

$(handleThumbnailClicks);