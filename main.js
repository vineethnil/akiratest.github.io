window.onload=function () {
	$(function(){
		$.ajax({
			type:'GET',
			url:'https://app.akira.md/api/system_status',
			success:function(data){
				var openTime=moment(data.open_hours_today.open_at).format('LT');
				var closeTime=moment(data.open_hours_today.close_at).format('LT');
				$('.openTime').text(openTime);
				$('.closeTime').text(closeTime);
				if(data.is_open_for_business===false){
					$('.isOpen').text('closed');
				}else{
					$('.isOpen').text('Open');
				}
				console.log('success',data);
			}
		});
	});
	
	function clock() { 
	  var t = moment(),
	      a = t.minutes() * 6,
	      o = t.hours() % 12 / 12 * 360 + (a / 12);
	  $(".hourHand").css("transform", "rotate(" + o + "deg)");
	  $(".mintHand").css("transform", "rotate(" + a + "deg)");
	}
	function refreshClock() {
	  clock(), setTimeout(refreshClock, 1000)
	}
	refreshClock();
}