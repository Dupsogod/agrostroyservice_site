$('.region').click(function() {
	$('#step-map').hide();
	$('#form-calculator').show();
});

$('.backMap').click(function() {
	$('#step-map').show();
	$('#form-calculator').hide();
});

$('.inputChecked').on('click', function(){
 var inputChecked = $(this).attr('data-check'); 
 $('#' + inputChecked).prop('checked', true);
})


$('.inputChecked').on('click', function(){
	
})

if($('.step-form--result').hasClass('active')) {
	$('.step__footnote').hide();
};

$('.buttonSwitch').on('click', function(){
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

$('.nextBackButton').on('click', function() {
	var activeTab = $(this).attr('data-active-tab'); 
	if (!$('#' + activeTab).hasClass('active')) {
		$('#' + activeTab).siblings().removeClass('active');
		$('#' + activeTab).addClass('active');}
})


$('.infographics g').click(function () {
	if (!$(this).hasClass('active')) {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	}
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


// slider switch

$('.tabs .button-tab').on('click', function(){
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

