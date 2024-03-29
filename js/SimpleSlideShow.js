
$(document).ready(function() {		
	
	//Execute the slideShow
	var intervalInstance = slideShow();
	
	$('.nav-thumb').click(function() {
		var $this = $(this);
		//alert($this.parent().attr('href').slice(1) - 1);
		clearInterval(intervalInstance);
		var content = $this.parent().attr('href').slice(1) ;
		var curr = $("#content" + content );
		clickThumb(curr) 
		intervalInstance =  startGallery();

		//alert("#content" + content );
		//theInterval($this.parent().attr('href').slice(1) - 1);
		return false;
	});
	
	function clickThumb(next) {
	
		//clearInterval(intervalInstance);
		
		//if no IMGs have the show class, grab the first image
		var current = ($('#gallery a.show')?  $('#gallery a.show') : $('#gallery a:first'));

		//Get next image, if it reached the end of the slideshow, rotate it back to the first image
		//var next = ((current.next().length) ? ((current.next().hasClass('caption'))? $('#gallery a:first') :current.next()) : $('#gallery a:first'));	
		
		//Get next image caption
		var caption = next.find('img').attr('rel');	
		
		//Set the fade in effect for the next image, show class has higher z-index
		next.css({opacity: 0.0})
		.addClass('show')
		.animate({opacity: 1.0}, 1000);

		//Hide the current image
		current.animate({opacity: 0.0}, 1000)
		.removeClass('show');
		
		//Set the opacity to 0 and height to 1px
		$('#gallery .caption').animate({opacity: 0.0}, { queue:false, duration:0 }).animate({height: '1px'}, { queue:true, duration:300 });	
		
		//Animate the caption, opacity to 0.7 and heigth to 100px, a slide up effect
		$('#gallery .caption').animate({opacity: 0.8},80 ).animate({height: '70px'},450 );
		//$('#gallery .caption').animate({opacity: 0.8}, 400);
		//Display the content
		$('#gallery .content').html(caption);
		
		//intervalInstance = slideShow();
	
	}

		
	

});

function startGallery()
{
	return setInterval('gallery()',7000);
}



function slideShow() {

	//Set the opacity of all images to 0
	$('#gallery a').css({opacity: 0.0});
	
	//Get the first image and display it (set it to full opacity)
	$('#gallery a:first').css({opacity: 1.0});
	
	//Set the caption background to semi-transparent
	$('#gallery .caption').css({opacity: 0.8});

	//Resize the width of the caption according to the image width
	$('#gallery .caption').css({width: $('#gallery a').find('img').css('width')});
	
	//Get the caption of the first image from REL attribute and display it
	$('#gallery .content').html($('#gallery a:first').find('img').attr('rel'))
	.animate({opacity: 0.8}, 400);
	
	return startGallery();
	//Call the gallery function to run the slideshow, 6000 = change to next image after 6 seconds

	
}




function gallery() {
	//if no IMGs have the show class, grab the first image
	var current = ($('#gallery a.show')?  $('#gallery a.show') : $('#gallery a:first'));
	var next = ((current.next().length) ? ((current.next().hasClass('caption'))? $('#gallery a:first') :current.next()) : $('#gallery a:first'));	
	/*
	var next;
	
	if (typeof nextImage === "undefined") 
	{
		//Get next image, if it reached the end of the slideshow, rotate it back to the first image
		next = ((current.next().length) ? ((current.next().hasClass('caption'))? $('#gallery a:first') :current.next()) : $('#gallery a:first'));	
	}
	else
	{
		next = nextImage;
	}
	*/
	
	//Get next image caption
	var caption = next.find('img').attr('rel');	
	
	//Set the fade in effect for the next image, show class has higher z-index
	next.css({opacity: 0.0})
	.addClass('show')
	.animate({opacity: 1.0}, 1000);

	//Hide the current image
	current.animate({opacity: 0.0}, 1000)
	.removeClass('show');
	
	//Set the opacity to 0 and height to 1px
	$('#gallery .caption').animate({opacity: 0.0}, { queue:false, duration:0 }).animate({height: '1px'}, { queue:true, duration:300 });	
	
	//Animate the caption, opacity to 0.7 and heigth to 100px, a slide up effect
	$('#gallery .caption').animate({opacity: 0.8},80 ).animate({height: '70px'},450 );
	
	//Display the content
	$('#gallery .content').html(caption);
	
	
}
