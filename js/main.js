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

		// Wicked credit to
		// http://www.zachstronaut.com/posts/2009/01/18/jquery-smooth-scroll-bugs.html
		var scrollElement = 'html, body';
		$('html, body').each(function () {
			var initScrollTop = $(this).attr('scrollTop');
			$(this).attr('scrollTop', initScrollTop + 1);
			if ($(this).attr('scrollTop') == initScrollTop + 1) {
				scrollElement = this.nodeName.toLowerCase();
				$(this).attr('scrollTop', initScrollTop);
				return false;
			}    
		});
		
		// Smooth scrolling for internal links
		$("a[href^='#']").click(function(event) {
			event.preventDefault();
			
			var $this = $(this),
			target = this.hash,
			$target = $(target);
			
			$(scrollElement).stop().animate({
				'scrollTop': $target.offset().top
			}, 500, 'swing', function() {
				window.location.hash = target;
			});
			
		});	    

		// no spam please
		var email_addr = [106, 111, 104, 110, 115, 111, 110, 106, 101, 102, 102, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109].map(function(v) { return String.fromCharCode(v) }).join('')
		$('#email_link').attr('title', email_addr).attr('href', 'mailto:'+email_addr)
	});
})();