// JavaScript Document

$(document).ready(function() {

alert('You now have jQuery available to use in this page');

});

window.onload = function(){ 	alert("welcome"); 
}

$(document).ready(function () {
	
	  $('.newButton').click (function () {
		  
		   $("#theStage").append('<div id ="selectable" class="selector"><button value="nhuyhb" class="myButton1" id="theButton">BUTTON</button></div>');
		   
		   $('.myButton1').click(function()
		   {
			   javascript:replaceButtonText('.myButton1', document.getElementById("#inputOne").value);
		   });
               
		   $('#display').append (                        
                    '<button type="button" value="Remove Button" class="removemyButton" value="Remove Button">Remove</button><br>'                    
                ); // end append          
				                  
                $('.removemyButton').on('click', function () { 
                  
                    $("#box").next ().remove (); // remove the <br>
                    $(this).remove (); // remove the button
                });
            }); // end click 
			
			
			$(function() {
    $( "theButton" )
      .button()
      .click(function( event ) {
        event.preventDefault();
      });
  });
			$(function(){
				$("theButton").selectable();
			});
			
	$(function() {
    $( "theButton" ).draggable();
  });		                                  

    $("#formStyles").change(function() {
    $('.myButton1,#myButton1').css("font-family", $(this).val());	
});

$("#styles").change(function() {
    $('.myButton1, #myButton1').css("font-style", $(this).val());
});

$("#weight").change(function() {
    $('.myButton1, #myButton1').css("font-weight", $(this).val());
});

	$("#textcolor").change(function() {
    $('.myButton1 , #myButton1').css("color", $(this).val());
});


$("#bordercolor").change(function() {
    $('.myButton1, #myButton1').css("border-color", $(this).val());
});

    $("#fontsize").slider({
        range: "max",
        min: 2,
        max: 20,
        value: 1,
        slide: function (event, ui) {
            $("#fontsizeslider").val(ui.value + ' px');
            $('.myButton1').css('fontSize', ui.value);
        }
    });
	
    $("#textpadding").slider({
        range: "max",
        min: 2,
        max: 20,
        value: 1,
        slide: function (event, ui) {
            $("#paddingslider").val(ui.value + ' %');
			 $('.myButton1').css("padding", ui.value + 'px');
        }
    });

    $("#cornerroundness").slider({
        range: "max",
        min: 2,
        max: 20,
        value: 1,
        slide: function (event, ui) {
            $("#cornerroundnesslider").val(ui.value + ' px');
			$('.myButton1').css("borderRadius", ui.value);
        }
    });
	
	$("#borderthickness").slider({
        range: "max",
        min: 2,
        max: 100,
        value: 1,
        slide: function (event, ui) {
            $("#borderthicknessslider").val(ui.value + ' px');
			$('.myButton1').css("borderWidth", ui.value);
        }
    });	
});

	function replaceButtonText(textButton, text)
	{
			if (document.getElementById)
			{
				var button=document.getElementById(textButton);
				if(button)
				{
					if(button.childNodes[0])
					{
						button.childNodes[0].nodeValue
=text;
					}
					else if (button.value)
					{
						button.value=text;	
					}
					else
					{
						button.innerHtml=text;	
					}
			}
	}
}

  $(function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 0 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // run the effect
      $( "#selectable" ).hide( selectedEffect, options, 1000, callback );
    };
 
    // callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };
 
    // set effect from select menu value
    $( "#button" ).click(function() {
      runEffect();
    });
  });



