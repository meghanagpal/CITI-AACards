$(document).ready(function(){

	citiCarousel();
	readParam(name);
	reSet();
	//viewport zoom fix
	if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
		    var viewportmeta = document.querySelector('meta[name="viewport"]');
		    if (viewportmeta) {
		        viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
		        document.body.addEventListener('gesturestart', function () {
		            viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
		        }, false);
		    }
		}

});


function reSet()
{
	$(window).resize(function () { 
		//$( "body" ).css( "margin-left", "0" );
        $( "body" ).addClass('resetbody');
	});

}


function readParam(name)
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return null;
  else
    return results[1];
}

function citiCarousel()
	{
	      // Initialize the carousel 
	      $('#myCarousel').carousel({interval: false});
	      var slide_param = readParam( 'slide' );
	      if(!(slide_param == 1 || slide_param == 2 || slide_param == 3)) {
		        var slide_param = 1; // defaul active landing if wrong param
		    } else {
		        var slide_param = readParam( 'slide' ); // url param active landing
		    }
		  $('body').removeClass('bg1 bg2 bg3');
		  $('body').addClass('bg'+ slide_param); 
	      $('#slide'+ slide_param).addClass('active');// active carousel item 
	      $('#sl'+ slide_param).addClass('active arrow');// active carousel item 

	      
	      $(".navbar-toggle").click(function(){
	      $('.carousel-inner,.navbar-toggle').addClass('helperhide');
	      $('#titlemnav').css( "display", "block" );
	      
	      if(!(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i))) {
		        slidehight = window.innerHeight;
	      		$('#pageslide').css( "height", slidehight );
		    } else {
		         // do nothing

		         $('#pageslide').css( "height", "370px" );
		         $(window).bind('orientationchange', function(e) {

				  switch ( window.orientation ) {

				    case 0:
				        $('#pageslide').css( "height", "370px" );
				    break;

				    case 90:
				        $('#pageslide').css( "height", "200px" );
				    break;

				    case -90:
				        $('#pageslide').css( "height", "200px" );
				    break;

				  }

				});
		    }
	      });

		  function getParameterByName(name) {
				var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
				return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
			}
		  
		  var szMcode = getParameterByName("m");
		  //alert(szMcode);
		  
	      //content includes
		  $( "#content1" ).load( "includes/content1.html?m=" + szMcode );
	      $( "#content2" ).load( "includes/content2.html?m=" + szMcode );
	      $( "#content3" ).load( "includes/content3.html?m=" + szMcode );	      
	      $( "#disclosure1" ).load( "includes/disclosure1.html" );
	      $( "#disclosure2" ).load( "includes/disclosure2.html" );
	      $( "#disclosure3" ).load( "includes/disclosure3.html" );      


	      // Cycles the carousel to a particular frame on click 
	      $(".slide-one").click(function(){
	      	 $('#sl1,#sl2,#sl3,.carousel-inner,.navbar-toggle').removeClass('active arrow helperhide');
	         $("#myCarousel").carousel(0);
	         $('#sl1').addClass('active arrow first');
	         $('#titlemnav').css( "display", "none" );
	         $('body').removeClass('bg1 bg2 bg3');
	         $('body').addClass('bg1');
	      });
	      $(".slide-two").click(function(){
	      	$('#sl1,#sl2,#sl3,.carousel-inner,.navbar-toggle').removeClass('active arrow helperhide');
	         $("#myCarousel").carousel(1);
	         $('#sl2').addClass('active arrow');
	         $('#titlemnav').css( "display", "none" );
	         $('body').removeClass('bg1 bg2 bg3');
	         $('body').addClass('bg2');
	      });
	      $(".slide-three").click(function(){
	      	$('#sl1,#sl2,#sl3,.carousel-inner,.navbar-toggle').removeClass('active arrow helperhide');
	         $("#myCarousel").carousel(2);
	         $('#sl3').addClass('active arrow');
	         $('#titlemnav').css( "display", "none" );
	         $('body').removeClass('bg1 bg2 bg3');
	      	$('body').addClass('bg3');

	      });

	      // Other  options unused

	      // Starts the carousel
	      $(".start-slide").click(function(){
	         $("#myCarousel").carousel('cycle');
	      });
	      // Stops the carousel
	      $(".pause-slide").click(function(){
	         $("#myCarousel").carousel('pause');
	      });
	      // Cycles to the previous item
	      $(".prev-slide").click(function(){
	         $("#myCarousel").carousel('prev');
	      });
	      // Cycles to the next item
	      $(".next-slide").click(function(){
	         $("#myCarousel").carousel('next');
	      });
	 
	}
