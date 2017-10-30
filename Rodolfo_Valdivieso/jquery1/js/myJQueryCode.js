console.log('test');

$(document).ready(function(){
		//all my jquery code goes here
		//inside the anonymous function

		//Testing Function CLick
		$('#buttonClick').click(function(){
			//console.log(document.getElementById("buttonClick").innerHTML);
			if (document.getElementById("buttonClick").innerHTML=='You CLick!')
			{
				$('#buttonClick').html('Try Me!');
			}
			else{

				$('#buttonClick').html('You CLick!');
			}
		})

		//testing function Hide
		$('#buttonHide').click(function(){
			
			$('#hide').hide();
			
		})

		//testing function show
		$('#buttonShow').click(function(){
			
			$('#hide').show();
			document.getElementById("hide").value="I'm BACK!!!!!";
			
		})

		//testing function toggle
		$('#buttonToggle').click(function(){
			
			$('#hide').toggle();
			
		})

		//testing function slideDown and up
		$('#buttonSlideD').click(function(){
			
			if ( $( "#logo" ).is( ":hidden" ) ) {
    				$( "#logo" ).slideDown( "slow" );
  				} else {
    				$( "#logo" ).slideUp( "slow" );
  				}
			
		})

		//testing function slideToggle
		$('#buttonSlideT').click(function(){
			
			
    		$( "#logo" ).slideToggle( "slow" );
  				
			
		})
		//testing function FadeIn
		$('#fadeIn').click(function(){
			
			$( "#logo" ).fadeIn( "slow" );
			
		})
		//testing function FdeOut
		$('#fadeOut').click(function(){
			
			$( "#logo" ).fadeOut( "slow" );
			
		})

		//testing function AddClass
		$('#addClass').click(function(){
			
			
			$( "#addClass" ).addClass( "test" );
			
		})

		//testing function before
		$('#before').click(function(){
			
			
			$( "#before" ).before( "<b class='test2'>Hello, this is before</b>" );
			$( "#before" ).after( "<b class='test2'>Hello, this is after</b>" );
			
		})

		//testing function Append
		$('#append').click(function(){
			$( "#appendTest" ).append( "<h1>Test</h1>" );
			
		})

			//testing function HTML
		$('#html').click(function(){
			//console.log($('#htmlTest').html());
			 var htmlString = $('#htmlTest').html();
  				$( '#htmlTest2' ).text( htmlString );
			
		})


		//testing function Attr
		$('#attr').click(function(){
			$( "#logo" ).attr( "alt", "Photo by Kelly Clark" );
			
		})

		//testing function Val
		$('#val').click(function(){

			console.log($( "#val" ).val());
			
		})

		//testing function Data
		$('#data').click(function(){
			$( "#dataSpan" ).data( "test", { first: 16, last: "pizza!" } );
			$( "#dataSpan" ).text( $( "#dataSpan" ).data( "test" ).first );
			$( "#dataSpan" ).text( $( "#dataSpan" ).data( "test" ).last );
			
		})

})