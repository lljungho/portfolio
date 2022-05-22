 window.onload = function () {			
            $(".page").each(function () {
                // 개별적으로 Wheel 이벤트 적용
                $(this).on("mousewheel DOMMouseScroll", function (e) {
                    e.preventDefault();
                    var delta = 0;
                    if (!event) event = window.event;
                    if (event.wheelDelta) {
                        delta = event.wheelDelta / 120;
                        if (window.opera) delta = -delta;
                    } else if (event.detail) delta = -event.detail / 3;
                    var moveTop = null;
                    // 마우스휠을 위에서 아래로
                    if (delta < 0) {
                        if ($(this).next() != undefined) {
                            moveTop = $(this).next().offset().top;		
							count = $(this).index()+1; // 1 2 3							
                        }
                    // 마우스휠을 아래에서 위로
                    } else {
                        if ($(this).prev() != undefined) {
                            moveTop = $(this).prev().offset().top;
							count = $(this).prev().index(); // 1 2 3		
                        }
                    }
                    // 화면 이동 0.8초(800)
					//$('#bt>li').eq(count).css({'background-color':'#fff'}).siblings().css({'background-color':'transparent'})
                    $("html,body").stop().animate({scrollTop:moveTop},800); // 속도 1000분의 1초, 1000=1초
                });
            });
        }