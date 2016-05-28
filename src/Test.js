

	slideDownCallback = function() 
	{
		alert( "Slided down" ); 
	}

	//being invoked when the document is ready loaded
	$ ( document ).ready
	(
		/*************************************************
		*	This method specifies all events for the page. 
		*************************************************/
        function()
		{
        	//specify action on click for paragraph
			$( "p.hideExample" ).click
			(
				function()
				{
					//hide this paragraph-element
	    			$( this ).hide();
	  			}
			);
			
        	//specify action on doubleclick for paragraph
			$( "p.hideExample2" ).dblclick
			(
				function()
				{
					//hide this paragraph-element
	    			$( this ).hide();
	  			}
			);

			//mouse enter
			$( "p.enterExample1" ).mouseenter
			(
				function()
				{
	    			$( this ).text( "MOUSE ENTERED" );
	  			}
			);
			
			//mouse leave
			$( "p.enterExample1" ).mouseleave
			(
				function()
				{
	    			$( this ).text( "MOUSE LEFT" );
	  			}
			);

			//mouse down
			$( "p.enterExample1" ).mousedown
			(
				function()
				{
	    			$( this ).text( "MOUSE DOWN" );
	  			}
			);
			
			//mouse up
			$( "p.enterExample1" ).mouseup
			(
				function()
				{
	    			$( this ).text( "MOUSE UP" );
	  			}
			);
			
			//mouse enter
			$( "p.fadeOut1" ).mouseenter
			(
				function()
				{
	    			$( this ).text( "FADING OUT 1 ....." );
	    			$( this ).hide( 1000 );
	  			}
			);
			
			//mouse enter
			$( "p.fadeOut2" ).mouseenter
			(
				function()
				{
	    			$( this ).text( "FADING OUT 2 ....." );
	    			$( this ).fadeOut( 1000 );
	  			}
			);
			
			//mouse enter
			$( "p.fadeOut3" ).mouseenter
			(
				function()
				{
	    			$( this ).text( "FADING OUT 3 ....." );
	    			$( this ).fadeTo( 3000, 0.5 );
	  			}
			);
			
			//mouse click
			$( "p.slideDown1" ).click
			(
				function()
				{
	    			$( this ).text( "SLIDING DOWN 1 ....." );
	    			$( "p.slideDown2" ).slideDown( 2000, slideDownCallback );
	  			}
			);
			
			//mouse click
			$( "p.slideUp1" ).click
			(
				function()
				{
	    			$( this ).text( "SLIDING UP 1 ....." );
	    			$( "p.slideDown2" ).slideUp( 2000 );
	  			}
			);
			
			//mouse click
			$( "p.animate1" ).click
			(
				function()
				{
	    			$( this ).animate
	    			( 
	    				{
	    					marginLeft:	'250px',
	    					opacity: 	'0.5',
	    					marginTop:	'+=100px'
						},
						1500
	    			);
	    			
	    			$( this ).animate
	    			( 
	    				{
	    					marginLeft:	'0px',
	    					opacity: 	'1.0',
	    					marginTop:	'-=0px'
						},
						3000
	    			);
	    			
	    			$( this ).animate
	    			( 
	    				{
	    					marginLeft:	'250px',
	    					opacity: 	'0.5',
	    					marginTop:	'+=100px'
						},
						1500
	    			);
	    			
	    			$( this ).animate
	    			( 
	    				{
	    					marginLeft:	'0px',
	    					opacity: 	'1.0',
	    					marginTop:	'-=0px'
						},
						3000
	    			);
	  			}
			);
			
			//mouse click
			$( "p.stopAnimate1" ).click
			(
				function()
				{
					//stops one animation of the queue
	    			//$( "p.animate1" ).stop();
	    			
					//stops all animations of the queue
	    			//$( "p.animate1" ).stop( true );
	    			
					//stops all animations of the queue and finishes the current one immediately
	    			$( "p.animate1" ).stop( true, true );
				}
			);
			
			//mouse click
			$( "p.cssExample1" ).click
			(
				function()
				{
					//chaining jquery statements
	    			$( "p.cssExample2" )
	    				.css( "color", "#ff0000" )
	    				.css( "font-weight", "bold" )
	    				;
	    			
	    			$( "p.cssExample2" )	    			
	    				.slideUp(   1000 )
						.slideDown( 1000 )
						;
				}
			);
			
			//mouse click
			$( "p.domGet1" ).click
			(
				function()
				{
					alert
					(
								   "Text:  " + $( this ).text()
						+	"\n" + "Html:  " + $( this ).html() 
						+	"\n" + "Value: " + $( "input.domGet2" ).val()
						+	"\n" + "href:  " + $( "a.domGet3" ).attr( "href" )
					);
				}
			);
			
			
			//http://www.w3schools.com/Jquery/jquery_dom_set.asp
		}
	);
	
	//http://www.w3schools.com/Jquery/jquery_dom_get.asp
