 (function() { 
	 $(function() {
		// no spam please
		var email_addr = [106, 111, 104, 110, 115, 111, 110, 106, 101, 102, 102, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109].map(function(v) { return String.fromCharCode(v) }).join('')
		$('#email_link').attr('title', email_addr).attr('href', 'mailto:'+email_addr)
	});
})();