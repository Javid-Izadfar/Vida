function vida(element) {
   var video = $(element)[0];

   function playPause() {
       if (video.paused){
          video.play();
          $('.vida-controls .vida-play-icon .gb').toggleClass('gb_play_arrow gb_pause')
       } else {
          video.pause();
          $('.vida-controls .vida-play-icon .gb').toggleClass('gb_play_arrow gb_pause')
       }
   }

   $('.vida-poster').on('click', function() {
      $('.vida-poster').fadeOut()
      playPause()
   })

   $('.vida-video').on('click', function() {
      playPause()
   })

   $('.vida-controls .vida-play-icon').on('click', function() {
      playPause()
   })

}