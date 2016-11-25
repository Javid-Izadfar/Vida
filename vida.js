function vida(element) {
   var video = $(element)[0];
   var interval;
   var duration = video.duration;

   function  updateProgress() {
      $('.vida-play-progressbar .vida-play-passed').css('width', (video.currentTime / duration) * 100 + '%')
   }

   function playPause() {
       if (video.paused){
          video.play();
          $('.vida-controls .vida-play-icon .gb').toggleClass('gb_play_arrow gb_pause');
          interval = setInterval(function(){ updateProgress() }, 500);
       } else {
          video.pause();
          $('.vida-controls .vida-play-icon .gb').toggleClass('gb_play_arrow gb_pause');
          clearInterval(interval)
       }
   }

   $('.vida-poster').on('click', function() {
      $('.vida-poster').fadeOut()
      playPause()
   })

   $('.vida-video, .vida-controls .vida-play-icon').on('click', function() {
      playPause()
   })

}

vida('#video1');
