$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$(window).scroll(function() {

var st = $(this).scrollTop();

$(".navbar-brand, .navbar-navbar-light-bg-faded").css({
"transform" : "translate(0%," + st +"%"
});

$(".sect_2").css({
"transform" : "translate(0%,-" + st/20 +"%"
});

});
$(function() {
	$('.scroll-down').on('click', function(e) {
		e.preventDefault();
		$('header, section').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	});
});