function vida(element) {
   var video = $(element)[0];

   function playPause() {
       if (video.paused)
           video.play();
       else
           video.pause();
   }

   $('.vida-poster').on('click', function() {
      $('.vida-poster').fadeOut()
      video.play()
   })

   $('.vida-status').on('click', function() {
      playPause()
   })

}
