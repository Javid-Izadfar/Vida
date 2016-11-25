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
          $('.vida-controls .vida-play-icon .gb').removeClass('gb_play_arrow gb_repeat').addClass('gb_pause');
          interval = setInterval(function(){ updateProgress() }, 500);
       } else {
          video.pause();
          $('.vida-controls .vida-play-icon .gb').removeClass('gb_pause').addClass('gb_play_arrow');
          clearInterval(interval)
       }
   }

   video.onended = function(){
      $('.vida-controls .vida-play-icon .gb').removeClass('gb_pause gb_play_arrow').addClass('gb_repeat');
   };

   $('.vida-poster').on('click', function() {
      $('.vida-poster').fadeOut()
      playPause()
   })

   $('.vida-video, .vida-controls .vida-play-icon').on('click', function() {
      playPause()
   })

   $('.vida-play-progressbar').on('click', function(event){
      video.currentTime = ((event.pageX - $(this).offset().left) / $(this).outerWidth()) * duration;
      updateProgress()
   })

}

vida('#video1');
