$(document).ready(function(){

	var _winW = $(window).width();

	if (_winW <= 1280 && _winW > 960) {
		$('.main_vis_motto p').animate({
			'opacity':'1',
			'top':'-8px'
		}, 700, function(){
			$('.main_vis_motto strong').animate({
				'opacity':'1',
				'top':'48px'
			}, 700);
			$('.main_vis_motto b').animate({
				'opacity':'1',
				'top':'158px'
			}, 700, function(){
				$('.evt_main_logo').animate({
					'opacity':'1',
					'top':'244px'
				}, 700, 'easeOutBounce');
			});
		});
	} else if (_winW <= 960) {
		$('.main_vis_motto p').animate({
			'opacity':'1',
			'top':'0'
		}, 700, function(){
			$('.main_vis_motto strong').animate({
				'opacity':'1',
				'top':'9.6vw'
			}, 700);
			$('.main_vis_motto b').animate({
				'opacity':'1',
				'top':'25.06vw'
			}, 700, function(){
				$('.evt_main_logo').animate({
					'opacity':'1',
					'top':'97.73vw'
				}, 700, 'easeOutBounce');
			});
		});
	} else {
		$('.main_vis_motto p').animate({
			'opacity':'1',
			'top':'-4px'
		}, 700, function(){
			$('.main_vis_motto strong').animate({
				'opacity':'1',
				'top':'58px'
			}, 700);
			$('.main_vis_motto b').animate({
				'opacity':'1',
				'top':'188px'
			}, 700, function(){
				$('.evt_main_logo').animate({
					'opacity':'1',
					'top':'294px'
				}, 700, 'easeOutBounce');
			});
		});
	}

	$(window).on('resize', function(){
		var _winW = $(window).width();
		if (_winW <= 1280 && _winW > 960) {
			$('.main_vis_motto p').css({
				'top':'-8px'
			});
			$('.main_vis_motto strong').css({
				'top':'48px'
			});
			$('.main_vis_motto b').css({
				'top':'158px'
			});
			$('.evt_main_logo').css({
				'top':'244px'
			});
		} else if (_winW <= 960) {
			$('.main_vis_motto p').css({
				'top':'0'
			});
			$('.main_vis_motto strong').css({
				'top':'9.6vw'
			});
			$('.main_vis_motto b').css({
				'top':'25.06vw'
			});
			$('.evt_main_logo').css({
				'top':'97.73vw'
			});
		} else {
			$('.main_vis_motto p').css({
				'top':'-4px'
			});
			$('.main_vis_motto strong').css({
				'top':'58px'
			});
			$('.main_vis_motto b').css({
				'top':'188px'
			});
			$('.evt_main_logo').css({
				'top':'294px'
			});
		}
	});

	//밑반찬 증감
	var dishPrice = 0; //밑반찬 가격
	var dishNum = 3;
	
	function checkdishPriceCheck() {
		/* 밑반찬 선택 개수 검증 */
		if(dishNum == 0) {
			alert('밑반찬이 선택되지 않았습니다.');
			return false;
		} else if(dishNum > 0){
		}
	}

	//밑반찬 개수, 가격 변경
	function priceChange(){
		dishPrice = (dishNum * 10000).toLocaleString();

		$('#dishResult').text(dishNum);
		$('.dish_price').text(dishPrice);

	}

	//input value 값 변경 감지
	function inputChange() {
		$('#dishResult').on('propertychange change keyup paste input', function() {
			dishNum = Number($(this).val());

			//공백일때 0
			if( dishNum == ''){
				$(this).val(0);
				dishNum = 0;
			}
			//100 이상일때 100
			else if( dishNum > 100){
				$(this).val(100);
				dishNum = 100;
			}

			$(this).val(Number($(this).val()));

			priceChange();
		});

	}
	
	// 밑반찬수
	$('.dish_pakage_ctrl').each(function() {
		var spinner = $(this),
			input = spinner.find('input[type="number"]'),
			btnUp = spinner.find('.btn_plus'),
			btnDown = spinner.find('.btn_minus'),
			min = input.attr('min'),
			max = input.attr('max');

		btnUp.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find('input').val(newVal);
			spinner.find('input').trigger('change');
		});

		btnDown.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find('input').val(newVal);
			spinner.find('input').trigger('change');
		});

	});

	inputChange();
	priceChange();

});