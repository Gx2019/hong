$(function () {
		$('.left-box ul li a').on('click', function (ev) {
			ev.preventDefault();
			var top = $('#' + $(this).attr('title')).offset().top;
			$(this).addClass('active').siblings().removeClass('active');
			// $(this).addClass("active")
			// $(".active").removeAttr("background");
			// .find("span").removeClass("active");
			// $("active").removeClass("span");
			$('body,html').animate({
				scrollTop: top,
			}, 1000);

		});
		$(window).scroll(function () {//滚动浏览器就会执行
			var _top = $(window).scrollTop();
			if (_top > 480 && _top<3800) {
				$('.link').show();
			} else {
				$('.link').hide();
			};
		});
	});