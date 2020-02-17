//sending the selected to the form

$('#Rostov').click(function(){
	$('input[name="region__name"][value="Rostov"]').prop('checked', true);
});

$('#Volgograd').click(function(){
	$('input[name="region__name"][value="Volgograd"]').prop('checked', true);
});

$('#Orel').click(function(){
	$('input[name="region__name"][value="Orel"]').prop('checked', true);
});

$('#Saratov').click(function(){
	$('input[name="region__name"][value="Saratov"]').prop('checked', true);
});

$('#Penza').click(function(){
	$('input[name="region__name"][value="Penza"]').prop('checked', true);
});

$('#Ryazan').click(function(){
	$('input[name="region__name"][value="Ryazan"]').prop('checked', true);
});

$('#Vladimir').click(function(){
	$('input[name="region__name"][value="Vladimir"]').prop('checked', true);
});

$('#Ivanovo').click(function(){
	$('input[name="region__name"][value="Ivanovo"]').prop('checked', true);
});

$('#Moscow').click(function(){
	$('input[name="region__name"][value="Moscow"]').prop('checked', true);
});

$('#Yaroslavl').click(function(){
	$('input[name="region__name"][value="Yaroslavl"]').prop('checked', true);
});

$('#Tver').click(function(){
	$('input[name="region__name"][value="Tver"]').prop('checked', true);
});

$('#Kursk').click(function(){
	$('input[name="region__name"][value="Kursk"]').prop('checked', true);
});

$('#Smolensk').click(function(){
	$('input[name="region__name"][value="Smolensk"]').prop('checked', true);
});

$('#Tula').click(function(){
	$('input[name="region__name"][value="Tula"]').prop('checked', true);
});

$('#Kaluga').click(function(){
	$('input[name="region__name"][value="Kaluga"]').prop('checked', true);
});

$('#Saransk').click(function(){
	$('input[name="region__name"][value="Saransk"]').prop('checked', true);
});

$('#Bryansk').click(function(){
	$('input[name="region__name"][value="Bryansk"]').prop('checked', true);
});

$('#Voronezh').click(function(){
	$('input[name="region__name"][value="Voronezh"]').prop('checked', true);
});

$('#Lipetsk').click(function(){
	$('input[name="region__name"][value="Lipetsk"]').prop('checked', true);
});

$('#Belgorod').click(function(){
	$('input[name="region__name"][value="Belgorod"]').prop('checked', true);
});

$('#Tambov').click(function(){
	$('input[name="region__name"][value="Tambov"]').prop('checked', true);
});

$('#agricultural').click(function(){
	$('input[name="type-of-building"][value="agricultural"]').prop('checked', true);
});

$('#industry').click(function(){
	$('input[name="type-of-building"][value="industry"]').prop('checked', true);
});

$('#office').click(function(){
	$('input[name="type-of-building"][value="office"]').prop('checked', true);
});

$('#office').click(function(){
	$('input[name="type-of-building"][value="office"]').prop('checked', true);
});

$('#granary').click(function(){
	$('input[name="type-of-building-2"][value="granary"]').prop('checked', true);
});

$('#cowshed').click(function(){
	$('input[name="type-of-building-2"][value="cowshed"]').prop('checked', true);
});

$('#henhouse').click(function(){
	$('input[name="type-of-building-2"][value="henhouse"]').prop('checked', true);
});

$('#storage').click(function(){
	$('input[name="type-of-building-2"][value="storage"]').prop('checked', true);
});

$('#hangar').click(function(){
	$('input[name="type-of-building-2"][value="hangar"]').prop('checked', true);
});

$('#factory').click(function(){
	$('input[name="type-of-building-2"][value="factory"]').prop('checked', true);
});

$('#other-industrial').click(function(){
	$('input[name="type-of-building-2"][value="other-industrial"]').prop('checked', true);
});

$('#office-building').click(function(){
	$('input[name="type-of-building-2"][value="office-building"]').prop('checked', true);
});

$('#shop').click(function(){
	$('input[name="type-of-building-2"][value="shop"]').prop('checked', true);
});

//modal window with form

$(document).ready(function($) {
	$('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});

//tabs
(function ($) {
	$(function () {
		$('nav.tabs__caption').on('click', '.caption-elem:not(.active)', function () {
			$(this).addClass('active').siblings().removeClass('active')
				.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
		})
	})
})(jQuery)

//add active class on form buttons

$('.step-form__radio-button').click(function () {
	if (!$(this).hasClass('step-form__radio-button--active')) {
		$(this).siblings().removeClass('step-form__radio-button--active');
		$(this).addClass('step-form__radio-button--active');
	}
});

//close or open windows inside forms

$('#agricultural').click(function() {
	$('#agricultural-form').addClass("open");
	$('#industry-form').removeClass("open");
	$('#office-form').removeClass("open");
});

$('#industry').click(function() {
	$('#agricultural-form').removeClass("open");
	$('#industry-form').addClass("open");
	$('#office-form').removeClass("open");
});

$('#office').click(function() {
	$('#agricultural-form').removeClass("open");
	$('#industry-form').removeClass("open");
	$('#office-form').addClass("open");
});


// range slider

$('.input-block div ').hover(function(){
	var idPer=$(this).children('.input-block__item').attr('Id')

	var $rangeslider =$('#'+ idPer)
	var $amount = $('#'+$(this).children('.input-block__item').siblings('input').attr('Id'))

	$rangeslider.on('input', function() {
		$amount.val(this.value).change() 
	});

	$amount.on('input', function() {
		$rangeslider.val(this.value).change(); 
	});
});

$('.input-block div input[type="range"]').rangeslider({
	polyfill: false
})


/* $('.map g').click(function () {
	var clickId = this.id;
	alert(clickId);
	var rad = document.getElementsByName('region__name');
	console.log(rad);
	var propID = $('input[name="region__name"]').val();
	alert(propID);
}); */


$('.v--non-active').click(function () {
	if (!$(this).hasClass('v--non-active--hover')) {
		$(this).siblings().removeClass('v--non-active--hover');
		$(this).addClass('v--non-active--hover');
	}
});


$('#activeImageOne').click(function() {
	$('#imageOne').addClass("v--non-active__image--active");
	$('#imageTwo').removeClass("v--non-active__image--active");
	$('#imageThree').removeClass("v--non-active__image--active");
	$('#imageFour').removeClass("v--non-active__image--active");
});

$('#activeImageTwo').click(function() {
	$('#imageOne').removeClass("v--non-active__image--active");
	$('#imageTwo').addClass("v--non-active__image--active");
	$('#imageThree').removeClass("v--non-active__image--active");
	$('#imageFour').removeClass("v--non-active__image--active");
});

$('#activeImageThree').click(function() {
	$('#imageOne').removeClass("v--non-active__image--active");
	$('#imageTwo').removeClass("v--non-active__image--active");
	$('#imageThree').addClass("v--non-active__image--active");
	$('#imageFour').removeClass("v--non-active__image--active");
});

$('#activeImageFour').click(function() {
	$('#imageOne').removeClass("v--non-active__image--active");
	$('#imageTwo').removeClass("v--non-active__image--active");
	$('#imageThree').removeClass("v--non-active__image--active");
	$('#imageFour').addClass("v--non-active__image--active");
});




