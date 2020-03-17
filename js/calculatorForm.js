$('.region').click(function () {
	$('#step-map').hide();
	$('#form-calculator').show();
	$('.section--form-calculator').addClass('active');
});

$('.backMap').click(function () {
	$('#step-map').show();
	$('#form-calculator').hide();
	$('.section--form-calculator').removeClass('active');
});

$('.inputChecked').on('click', function () {
	var inputChecked = $(this).attr('data-check');
	$('#' + inputChecked).prop('checked', true);
})

/* $('.inputChecked').on('click', function(){
	
}) */

if ($('.step-form--result').hasClass('active')) {
	$('.step__footnote').hide();
};

$('.buttonSwitch').on('click', function () {
	var local_id = $(this).attr('data-tab');
	if (!$(this).hasClass('active')) {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	};

	if (!$('#' + local_id).hasClass('active')) {
		$('#' + local_id).siblings().removeClass('active');
		$('#' + local_id).addClass('active');
	}
});

$('.nextBackButton').on('click', function () {
	var activeTab = $(this).attr('data-active-tab');
	if (!$('#' + activeTab).hasClass('active')) {
		$('#' + activeTab).siblings().removeClass('active');
		$('#' + activeTab).addClass('active');
	}
})


$('.infographics g').hover(function () {
	if (!$(this).hasClass('active')) {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	}
});


// range slider

$('.input-block div ').hover(function () {
	var idPer = $(this).children('.input-block__item').attr('Id')

	var $rangeslider = $('#' + idPer)
	var $amount = $('#' + $(this).children('.input-block__item').siblings('input').attr('Id'))

	$rangeslider.on('input', function () {
		$amount.val(this.value).change()
	});

	$amount.on('input', function () {
		$rangeslider.val(this.value).change();
	});
});

$('.input-block div input[type="range"]').rangeslider({
	polyfill: false
})


// slider switch

$('.tabs .button-tab').on('click', function () {
	var local_id = $(this).attr('data-tab');
	if (!$(this).hasClass('active')) {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	};

	if (!$('#' + local_id).hasClass('active')) {
		$('#' + local_id).siblings().removeClass('active');
		$('#' + local_id).addClass('active');
	}
});

// burger {
$('.burger').click(function () {
	$('.burger, .header').toggleClass('active');
})


$('.select-mobil__header').click(function () {
	$('.select-mobil__content').toggleClass('active');
	$('.select-mobil__option').click(function () {
		var textOption = $(this).text();
		$('.select-mobil__header').text(textOption);
		$('.select-mobil__content').removeClass('active');
	})
})




/* $(document).ready(function($) {
	$('.popup-open').click(function() {
		$('.popup-fade').fadeIn("slow");
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut("slow");
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut("slow");
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut("slow");					
		}
	});
}); */

// popup window 

$('.slide-img').on('click', function () {
	$(this).addClass('active');
	var img_obj = document.getElementsByClassName("slide-img");
	//   console.log(img_obj);
	$('body').append('<div class="popup_bg"><div class="popup_new"></div><div class="slide-navigation"><div class="prev-button"></div><div class="next-button"></div></div></div>');
	$(img_obj).clone().appendTo(".popup_new")
	$(".popup_new").addClass("popup_new_active");
	$('.next-button').click(function (e) {
		var $current = $('.slide-img.active');
		$current.removeClass('active');
		$current.next('.slide-img').addClass('active');
		if ($current.next().length == 0) {
			var x = $('.popup_new').children()[0];
			$(x).addClass('active');
		}
	});
	$('.prev-button').click(function (e) {
		var $current = $('.slide-img.active');
		$current.removeClass('active');
		$current.prev('.slide-img').addClass('active');

		if ($current.prev().length == 0) {
			var x = $('.popup_new').children().length - 1;
			x = $('.popup_new').children()[x];
			$(x).addClass('active');
		}
	});
	$('.popup_new').on('click', function () {
		$('.slide-img').removeClass('active');
		$('.popup_bg').remove();
	})
})


