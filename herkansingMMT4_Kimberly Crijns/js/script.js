
    var geklikt = false;
    var player = videojs('video1', {

    });

    // slideshow
    $("#slideshow > div:gt(0)").hide();

    setInterval(function() { 
      $('#slideshow > div:first')
        .fadeOut(8000)
        .next()
        .fadeIn(8000)
        .end()
        .appendTo('#slideshow');
        },  8000);


  //video
    $(".toggle2").click(function () {
        event.preventDefault();
        if ( $( this ).is( "#toggle1" ) ) {
          player = videojs('video1', {

          }); 
        }

      if (geklikt == false) {
            player.play();
            geklikt = true;
            $( this ).css({ "background-image": "url(img/pause@2x.png)" });

        } else {
            player.pause();
            geklikt = false;
            $( this ).css({ "background-image": "url(img/play@2x.png)" });
        }
        console.log(geklikt);
    });

    $(".rewind").click(function () {
        player.currentTime(player.currentTime() - 10);
    });


    $(".buttonfooter" ).click(function() {
      $( "#toggle" ).toggle( "slide" );
    });
  
    $(".togglebutton1" ).click(function() {
      $( "#toggle" ).toggle( "slide" );
    });

    
    $( function() {
        $( "#dialog" ).dialog({
          autoOpen: false,
          show: {
            effect: "bounce",
            duration: 1200
          },
          hide: {
            effect: "fade",
            duration: 200
          }
        });

      } );
      $( function() {
        $( "#slider1" ).slider();
      } );
      
      $( function() {
        $( "#slider2" ).slider();
      } );
      
      $( function() {
        $( "#slider3" ).slider();
      } );

      
    


