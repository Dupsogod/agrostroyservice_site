$('.inputChecked').on('click', function(){
 var inputChecked = $(this).attr('data-check'); 
 $('#' + inputChecked).prop('checked', true);
})

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