 (function() { 
	 $(function() {
	    $('[data-hover-buddy]').hover(function() { 
	       buddy_name = $(this).data('hover-buddy')
	       $buddy = $(document).find('[data-hover-buddy='+buddy_name+']:not(:hover)')
	       $buddy.addClass('hover')
	    },
	    function() {
	       buddy_name = $(this).data('hover-buddy')
	       $buddy = $(document).find('[data-hover-buddy='+buddy_name+']:not(:hover)')
	       $buddy.removeClass('hover')
	    });

	    $.waypoints.settings.scrollThrottle = 100;
	    $('#nav-group').waypoint(function(event, direction) {
	        var sticky = direction === "down" && $(window).height() < ($('#sections').height() + 100)
	        $(this).parent().toggleClass('sticky', sticky)
	    });

	    $(document).on('hover', '[data-img-hover]', function() { 
	        $('img#hover-target').attr('src', $(this).data('img-hover'))
	    });
	});

	 $('[data-img-hover]').each(function() { (new Image()).src = $(this).data('img-hover')} );
})();