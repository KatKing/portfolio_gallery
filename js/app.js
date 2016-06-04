$(document).ready(function(){
	$('nav a').on("click", function(){
		//current class assignment
		$('nav li.current').removeClass('current');
		$(this).parent().addClass('current');
		console.log(this);

		//Set the heading text
		$('h1#heading').text($(this).text());


		//Get and Filter Link Text
		var category = $(this).text().toLowerCase().replace(' ', '-');


		//remove hidden class if "all-projects" is selected
		if(category === 'all-projects'){
			$('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
		} else {
			$('ul#gallery li').each(function(){
				if(!$(this).hasClass(category)){
					$(this).hide().addClass('hidden');
				}else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
				
			});
				
		}
		//Stop link behavior
		return false;

	});

	$('ul#gallery li').on('mouseenter', function(){
		//Get Data attribute values
		var title = $(this).children().data('title');
		var description = $(this).children().data('description');

		//Validation
		if(description === null){
			description = 'Click to Enlarge';
		}
		if (title === null) {
			title = " ";
		}

		$(this).append('<div class="overlay"></div>');

		//Get the overlay div

		var overlay = $(this).children('.overlay');

		//Add html to overlay 
		overlay.html('<h2>'+title+'</h2><p>'+description+'</p>');

		overlay.fadeIn(800);
		console.log('bye');
	});
	//Mouseleave Overlay
	$('ul#gallery li').on('mouseleave', function(){
		$(this).append('<div class="overlay"></div>');
		var overlay = $(this).children('.overlay');
		overlay.fadeOut(800);
		console.log('hello');

	})


});