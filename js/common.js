$(document).ready(function() {

 $(".burger_mnu").click(function() {
 	$(this).next().slideToggle();
 });


	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $("#slide");
	owl.owlCarousel({
		items : 1,	//Количество слайдов при разрешении экрана более 1000px
		itemsDesktop : [1000,1], //При разрешении экрана от 901px до 1000px
		itemsDesktopSmall : [900,1], // При разрешении экрана от 601px до 900px
		itemsTablet: [600,1], //При разрешении экрана от 0 до 600px 
		autoPlay : 2000,
		paginationSpeed : 1000,
		touchDrag : false,
		mouseDrag : true,
    });
	/*owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});*/
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});



	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});


/* карусельки */

var owl = $("#slide_clients");
	owl.owlCarousel({
		items : 1,	//Количество слайдов при разрешении экрана более 1000px
		itemsDesktop : [1000,1], //При разрешении экрана от 901px до 1000px
		itemsDesktopSmall : [900,1], // При разрешении экрана от 601px до 900px
		itemsTablet: [600,1], //При разрешении экрана от 0 до 600px 
		autoPlay : 2000,
		paginationSpeed : 1000
		
    });
	/*owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});*/
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});


var owl = $("#other_domain");
	owl.owlCarousel({
		items : 1,	//Количество слайдов при разрешении экрана более 1000px
		itemsDesktop : [1000,1], //При разрешении экрана от 901px до 1000px
		itemsDesktopSmall : [900,1], // При разрешении экрана от 601px до 900px
		itemsTablet: [600,1], //При разрешении экрана от 0 до 600px 
		autoPlay : 2000,
		paginationSpeed : 1000
		
    });
	/*owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});*/
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});


