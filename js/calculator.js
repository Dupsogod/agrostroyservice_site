//sending the selected region to the form

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
		$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
			$(this).addClass('active').siblings().removeClass('active')
				.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
		})
	})
})(jQuery)

