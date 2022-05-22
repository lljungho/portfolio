$(document).ready(function(){
    /////////////////////////////////////////////////////
    /* intro */
    $('#history-intro-wrap').delay(800).fadeOut(800);
    $('.history-center-text').animate({'color':'rgba(0,0,0,0.1)'},3000);
    $('.history-num>li:nth-child(1)>.number').delay(500).animate({'top':'-350px'},3000,'easeInOutCirc');
    $('.history-num>li:nth-child(2)>.number').delay(500).animate({'top':'-2800px'},3000,'easeInOutCirc');
    $('.history-num>li:nth-child(3)>.number').delay(500).animate({'top':'-1400px'},3000,'easeInOutCirc');
    $('.history-num>li:nth-child(4)>.number').delay(500).animate({'top':'-2800px'},3000,'easeInOutCirc');
    $('.history_page_bg').delay(700).fadeIn(700,function(){
        $('header').fadeIn(1000);
        $('footer').animate({'height':'200px'},1000,function(){
            $('.footer-bt').fadeIn(500);
            ft_img_loop();
            $('.page1-img').animate({'opacity':'1'},800);
            $('.page1-text').animate({'opacity':'1','right':'200px'},800);
        });
        $('.year-step-wrap').animate({'opacity':'1'},1000);
    });
    /* intro end */
    /////////////////////////////////////////////////////
    /* wrap */
    scroll_num = 0;
    page_move = 1;
    posX = 0; //변수 선언
    /////////////////// 가로스크롤 동작 플러그인  ///////////////////////////	
        $("#wrap").each(function () {
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
              
                if (delta < 0) {      // 마우스휠을 위에서 아래로                       
                    posX = posX + 50; //변수 값 증가
                    if( posX >= 13440 ){ posX = 13440 }
                } 
                else {   // 마우스휠을 아래에서 위로
                    posX = posX - 50; //변수 값 감소
                    if( posX <= 0 ){ posX = 0 }
                }        
                $('#sc').text(posX);
                $("body,html").stop().animate({'scrollLeft':posX},300); //animate로 부드러운 움직임
                scroll_num = posX/135;
                $('.year-color-line').css({'width':scroll_num+'%'}); // 변수 값만큼 width 값 변경

                // 해당 위치 도달시 변경
                if( scroll_num > 14 ){
                    $('.year-step-dot>li:nth-child(2)').css({'background-color':'#c40d2e','border-color':'#c40d2e'});
                }
                else{
                    $('.year-step-dot>li:nth-child(2)').css({'background-color':'#fff','border-color':'#f1f1f1'});
                }
                if( scroll_num > 28.25 ){
                    $('.year-step-dot>li:nth-child(3)').css({'background-color':'#c40d2e','border-color':'#c40d2e'});
                }
                else{
                    $('.year-step-dot>li:nth-child(3)').css({'background-color':'#fff','border-color':'#f1f1f1'});
                }
                if( scroll_num > 42.5 ){
                    $('.year-step-dot>li:nth-child(4)').css({'background-color':'#c40d2e','border-color':'#c40d2e'});
                }
                else{
                    $('.year-step-dot>li:nth-child(4)').css({'background-color':'#fff','border-color':'#f1f1f1'});
                }
                if( scroll_num > 56.75 ){
                    $('.year-step-dot>li:nth-child(5)').css({'background-color':'#c40d2e','border-color':'#c40d2e'});
                }
                else{
                    $('.year-step-dot>li:nth-child(5)').css({'background-color':'#fff','border-color':'#f1f1f1'});
                }
                if( scroll_num > 71 ){
                    $('.year-step-dot>li:nth-child(6)').css({'background-color':'#c40d2e','border-color':'#c40d2e'});
                }
                else{
                    $('.year-step-dot>li:nth-child(6)').css({'background-color':'#fff','border-color':'#f1f1f1'});
                }
                if( scroll_num > 85.25 ){
                    $('.year-step-dot>li:nth-child(7)').css({'background-color':'#c40d2e','border-color':'#c40d2e'});
                }
                else{
                    $('.year-step-dot>li:nth-child(7)').css({'background-color':'#fff','border-color':'#f1f1f1'});
                }
                if( scroll_num > 99.5 ){
                    $('.year-step-dot>li:nth-child(8)').css({'background-color':'#c40d2e','border-color':'#c40d2e'});
                }
                else{
                    $('.year-step-dot>li:nth-child(8)').css({'background-color':'#fff','border-color':'#f1f1f1'});
                }

                // 해당 위치도달시 숫자 변경
                if( posX > 800 && page_move == 1 ){ // page2로 이동
                    page_move = 2;
                    $('.history-num>li:nth-child(3)>.number').stop().animate({'top':'-2450px'},1500,'easeInOutCirc');
                    $('.history-num>li:nth-child(4)>.number').stop().animate({'top':'-3150px'},1500,'easeInOutCirc');
                }  
                else if( posX < 800 && page_move == 2 ){ // page1로 이동
                    page_move = 1;
                    $('.history-num>li:nth-child(3)>.number').stop().animate({'top':'-1400px'},1500,'easeInOutCirc');
                    $('.history-num>li:nth-child(4)>.number').stop().animate({'top':'-2800px'},1500,'easeInOutCirc');
                }
                if( posX > 2500 && page_move == 2 ){ // page3로 이동
                    page_move = 3;
                    $('.history-num>li:nth-child(3)>.number').stop().animate({'top':'-2800px'},1500,'easeInOutCirc');
                    $('.history-num>li:nth-child(4)>.number').stop().animate({'top':'0px'},1500,'easeInOutCirc');
                }  
                else if( posX < 2500 && page_move == 3 ){ // page2로 이동
                    page_move = 2;
                    $('.history-num>li:nth-child(3)>.number').stop().animate({'top':'-2450px'},1500,'easeInOutCirc');
                    $('.history-num>li:nth-child(4)>.number').stop().animate({'top':'-3150px'},1500,'easeInOutCirc');
                }
                if( posX > 4700 && page_move == 3 ){ // page4로 이동
                    page_move = 4;
                    $('.history-num>li:nth-child(4)>.number').stop().animate({'top':'-1750px'},1500,'easeInOutCirc');
                }  
                else if( posX < 4700 && page_move == 4 ){ // page3로 이동
                    page_move = 3;
                    $('.history-num>li:nth-child(4)>.number').stop().animate({'top':'0px'},1500,'easeInOutCirc');
                }
                if( posX > 6600 && page_move == 4 ){ // page5로 이동
                    page_move = 5;
                    $('.history-num>li:nth-child(3)>.number').stop().animate({'top':'-3150px'},1500,'easeInOutCirc');
                    $('.history-num>li:nth-child(4)>.number').stop().animate({'top':'-700px'},1500,'easeInOutCirc');
                }  
                else if( posX < 6600 && page_move == 5 ){ // page4로 이동
                    page_move = 4;
                    $('.history-num>li:nth-child(3)>.number').stop().animate({'top':'-2800px'},1500,'easeInOutCirc');
                    $('.history-num>li:nth-child(4)>.number').stop().animate({'top':'-1750px'},1500,'easeInOutCirc');
                }
                if( posX > 8500 && page_move == 5 ){ // page6로 이동
                    page_move = 6;
                    $('.history-num>li:nth-child(4)>.number').stop().animate({'top':'-1400px'},1500,'easeInOutCirc');
                }  
                else if( posX < 8500 && page_move == 6 ){ // page5로 이동
                    page_move = 5;
                    $('.history-num>li:nth-child(4)>.number').stop().animate({'top':'-700px'},1500,'easeInOutCirc');
                }
                if( posX > 10300 && page_move == 6 ){ // page7로 이동
                    page_move = 7;
                    $('.history-num>li:nth-child(4)>.number').stop().animate({'top':'-1750px'},1500,'easeInOutCirc');
                }  
                else if( posX < 10300 && page_move == 7 ){ // page6로 이동 
                    page_move = 6;
                    $('.history-num>li:nth-child(4)>.number').stop().animate({'top':'-1400px'},1500,'easeInOutCirc');
                }
                if( posX > 12200 && page_move == 7 ){ // page8로 이동
                    page_move = 8;
                    $('.history-num>li:nth-child(2)>.number').stop().animate({'top':'-3150px'},1500,'easeInOutCirc');
                    $('.history-num>li:nth-child(3)>.number').stop().animate({'top':'0px'},1500,'easeInOutCirc');
                    $('.history-num>li:nth-child(4)>.number').stop().animate({'top':'0px'},1500,'easeInOutCirc');
                }  
                else if( posX < 12200 && page_move == 8 ){ // page7로 이동 
                    page_move = 7;
                    $('.history-num>li:nth-child(2)>.number').stop().animate({'top':'-2800px'},1500,'easeInOutCirc');
                    $('.history-num>li:nth-child(3)>.number').stop().animate({'top':'-3150px'},1500,'easeInOutCirc');
                    $('.history-num>li:nth-child(4)>.number').stop().animate({'top':'-1750px'},1500,'easeInOutCirc');
                }
                /////////////////////////////////////////////////////
                // page2 이동시 오브젝트 효과
                if( posX >= 1200 ){ // page2 
                    $('.page2-img1').animate({'top':'250px','opacity':'1'},1000);
                    $('.page2-img2').animate({'top':'450px','opacity':'1'},1000);
                    $('.page2-text').animate({'right':'200px','opacity':'1'},1000);
                }
                if( posX >= 3000 ){ // page3
                    $('.page3-img1').animate({'top':'250px','opacity':'1'},1000);
                    $('.page3-img2').animate({'top':'450px','opacity':'1'},1000);
                    $('.page3-text').animate({'right':'200px','opacity':'1'},1000);
                }
                if( posX >= 5000 ){ // page4
                    $('.page4-img1').animate({'top':'250px','opacity':'1'},1000);
                    $('.page4-text').animate({'right':'200px','opacity':'1'},1000);
                }
                if( posX >= 7000 ){ // page5
                    $('.page5-img1').animate({'top':'250px','opacity':'1'},1000);
                    $('.page5-text').animate({'right':'200px','opacity':'1'},1000);
                }
                if( posX >= 9000 ){ // page6
                    $('.page6-img1').animate({'top':'250px','opacity':'1'},1000);
                    $('.page6-img2').animate({'top':'480px','opacity':'1'},1000);
                    $('.page6-text').animate({'right':'200px','opacity':'1'},1000);
                }
                if( posX >= 10950 ){ // page7
                    $('.page7-img1').animate({'top':'250px','opacity':'1'},1000);
                    $('.page7-text').animate({'right':'200px','opacity':'1'},1000);
                }
                if( posX >= 12800 ){ // page8
                    $('.page8-img1').animate({'top':'250px','opacity':'1'},1000);
                    $('.page8-img2').animate({'top':'500px','opacity':'1'},1000);
                    $('.page8-img3').animate({'left':'1150px','opacity':'1'},1000);
                    $('.page8-text').animate({'right':'200px','opacity':'1'},1000);
                }
            });
        });
    /////////////////// 가로스크롤 동작 플러그인  ///////////////////////////
    /* year-step */
    /* page1 */
    year_stepbt = 0;
    $('.year-step-dot>li').click(function(){
        year_stepbt = $(this).index() * 1920;
        $('body,html').stop().animate({'scrollLeft': year_stepbt },500);
        $('.year-color-line').stop().animate({'width':year_stepbt/135+'%'},500,function(){
            scroll_page_num = year_stepbt/135;
            // 해당 위치 도달시 변경
            if( scroll_page_num > 14 ){
                $('.year-step-dot>li:nth-child(2)').css({'background-color':'#c40d2e','border-color':'#c40d2e'});

                // 해당페이지 효과
                page_move = 2;
                $('.history-num>li:nth-child(2)>.number').stop().animate({'top':'-2800px'},1500,'easeInOutCirc');
                $('.history-num>li:nth-child(3)>.number').stop().animate({'top':'-2450px'},1500,'easeInOutCirc');
                $('.history-num>li:nth-child(4)>.number').stop().animate({'top':'-3150px'},1500,'easeInOutCirc');
                $('.page2-img1').animate({'top':'250px','opacity':'1'},1000);
                $('.page2-img2').animate({'top':'450px','opacity':'1'},1000);
                $('.page2-text').animate({'right':'200px','opacity':'1'},1000);
            }
            else{
                $('.year-step-dot>li:nth-child(2)').css({'background-color':'#fff','border-color':'#f1f1f1'});

                // 해당페이지 효과
                page_move = 1;
                $('.history-num>li:nth-child(2)>.number').stop().animate({'top':'-2800px'},1500,'easeInOutCirc');
                $('.history-num>li:nth-child(3)>.number').stop().animate({'top':'-1400px'},1500,'easeInOutCirc');
                $('.history-num>li:nth-child(4)>.number').stop().animate({'top':'-2800px'},1500,'easeInOutCirc');
            }
            if( scroll_page_num > 28.25 ){
                $('.year-step-dot>li:nth-child(3)').css({'background-color':'#c40d2e','border-color':'#c40d2e'});

                // 해당페이지 효과
                page_move = 3;
                $('.history-num>li:nth-child(2)>.number').stop().animate({'top':'-2800px'},1500,'easeInOutCirc');
                $('.history-num>li:nth-child(3)>.number').stop().animate({'top':'-2800px'},1500,'easeInOutCirc');
                $('.history-num>li:nth-child(4)>.number').stop().animate({'top':'0px'},1500,'easeInOutCirc');
                $('.page3-img1').animate({'top':'250px','opacity':'1'},1000);
                $('.page3-img2').animate({'top':'450px','opacity':'1'},1000);
                $('.page3-text').animate({'right':'200px','opacity':'1'},1000);
            }
            else{
                $('.year-step-dot>li:nth-child(3)').css({'background-color':'#fff','border-color':'#f1f1f1'});
            }
            if( scroll_page_num > 42.5 ){
                $('.year-step-dot>li:nth-child(4)').css({'background-color':'#c40d2e','border-color':'#c40d2e'});

                // 해당페이지 효과
                page_move = 4;
                $('.history-num>li:nth-child(2)>.number').stop().animate({'top':'-2800px'},1500,'easeInOutCirc');
                $('.history-num>li:nth-child(3)>.number').stop().animate({'top':'-2800px'},1500,'easeInOutCirc');
                $('.history-num>li:nth-child(4)>.number').stop().animate({'top':'-1750px'},1500,'easeInOutCirc');
                $('.page4-img1').animate({'top':'250px','opacity':'1'},1000);
                $('.page4-text').animate({'right':'200px','opacity':'1'},1000);
            }
            else{
                $('.year-step-dot>li:nth-child(4)').css({'background-color':'#fff','border-color':'#f1f1f1'});
            }
            if( scroll_page_num > 56.75 ){
                $('.year-step-dot>li:nth-child(5)').css({'background-color':'#c40d2e','border-color':'#c40d2e'});

                // 해당페이지 효과
                page_move = 5;
                $('.history-num>li:nth-child(2)>.number').stop().animate({'top':'-2800px'},1500,'easeInOutCirc');
                $('.history-num>li:nth-child(3)>.number').stop().animate({'top':'-3150px'},1500,'easeInOutCirc');
                $('.history-num>li:nth-child(4)>.number').stop().animate({'top':'-700px'},1500,'easeInOutCirc');
                $('.page5-img1').animate({'top':'250px','opacity':'1'},1000);
                $('.page5-text').animate({'right':'200px','opacity':'1'},1000);
            }
            else{
                $('.year-step-dot>li:nth-child(5)').css({'background-color':'#fff','border-color':'#f1f1f1'});
            }
            if( scroll_page_num > 71 ){
                $('.year-step-dot>li:nth-child(6)').css({'background-color':'#c40d2e','border-color':'#c40d2e'});

                // 해당페이지 효과
                page_move = 6;
                $('.history-num>li:nth-child(2)>.number').stop().animate({'top':'-2800px'},1500,'easeInOutCirc');
                $('.history-num>li:nth-child(3)>.number').stop().animate({'top':'-3150px'},1500,'easeInOutCirc');
                $('.history-num>li:nth-child(4)>.number').stop().animate({'top':'-1400px'},1500,'easeInOutCirc');
                $('.page6-img1').animate({'top':'250px','opacity':'1'},1000);
                $('.page6-img2').animate({'top':'480px','opacity':'1'},1000);
                $('.page6-text').animate({'right':'200px','opacity':'1'},1000);
            }
            else{
                $('.year-step-dot>li:nth-child(6)').css({'background-color':'#fff','border-color':'#f1f1f1'});
            }
            if( scroll_page_num > 85.25 ){
                $('.year-step-dot>li:nth-child(7)').css({'background-color':'#c40d2e','border-color':'#c40d2e'});

                // 해당페이지 효과
                page_move = 7;
                $('.history-num>li:nth-child(2)>.number').stop().animate({'top':'-2800px'},1500,'easeInOutCirc');
                $('.history-num>li:nth-child(3)>.number').stop().animate({'top':'-3150px'},1500,'easeInOutCirc');
                $('.history-num>li:nth-child(4)>.number').stop().animate({'top':'-1750px'},1500,'easeInOutCirc');
                $('.page7-img1').animate({'top':'250px','opacity':'1'},1000);
                $('.page7-text').animate({'right':'200px','opacity':'1'},1000);
            }
            else{
                $('.year-step-dot>li:nth-child(7)').css({'background-color':'#fff','border-color':'#f1f1f1'});
            }
            if( scroll_page_num > 99.5 ){
                $('.year-step-dot>li:nth-child(8)').css({'background-color':'#c40d2e','border-color':'#c40d2e'});

                // 해당페이지 효과
                page_move = 8;
                $('.history-num>li:nth-child(2)>.number').stop().animate({'top':'-3150px'},1500,'easeInOutCirc');
                $('.history-num>li:nth-child(3)>.number').stop().animate({'top':'0px'},1500,'easeInOutCirc');
                $('.history-num>li:nth-child(4)>.number').stop().animate({'top':'0px'},1500,'easeInOutCirc');
                $('.page8-img1').animate({'top':'250px','opacity':'1'},1000);
                $('.page8-img2').animate({'top':'500px','opacity':'1'},1000);
                $('.page8-img3').animate({'left':'1150px','opacity':'1'},1000);
                $('.page8-text').animate({'right':'200px','opacity':'1'},1000);
            }
            else{
                $('.year-step-dot>li:nth-child(8)').css({'background-color':'#fff','border-color':'#f1f1f1'});
            }
        });
        posX = year_stepbt;
    });
    /* page1 end */
    /* page2 */
    
    /* page2 end */
    /* year-step end */
    /* wrap end */
    /////////////////////////////////////////////////////
    /* header */
    // 헤더 메뉴 버튼 효과
    hd_menu_click = 0;
    $('#hd-menubox').mouseenter(function(){ // 메뉴버튼 색상변경 효과
        $('#hd-menubox>div').css({'background-color':'#212121'});
        if( hd_menu_click == 1 ){
            $('#hd-menubox>div').css({'background-color':'#fff'});
        }
    });

    $('#hd-menubox').mouseleave(function(){
        if( hd_menu_click == 0 ){
            $(this).children().css({'background-color':'#a0a0a0'});
        }
        if( hd_menu_click == 1 ){
            $(this).children().css({'background-color':'#212121'});
        }
    });

    $('#hd-menubox').click(function(){
        if( hd_menu_click == 0 ){
            $('#main-logo').stop().fadeOut(600); // 메뉴 클릭시 로고 숨기기
            $('#hd-right-box').fadeOut(150);
            $('#hd-menu-t').stop().animate({'margin-top':'10.5px'},300);
            $('#hd-menu-b').stop().animate({'margin-bottom':'10.5px'},300,function(){
                $('#lang>li').stop().animate({'opacity':'0'},150);
                $('.hd-menu-textbox,.hd-information-box,#hd-cate-box').delay(300).stop().animate({'opacity':'1'},300);
                $('#hd-menubox').stop().animate({'opacity':'0'},150,function(){
                    $(this).children().css({'background-color':'#212121'});
                    $(this).stop().animate({'opacity':'1'},150);
                    $('#lang>li').css({'color':'#212121'}).stop().animate({'opacity':'1'},150);
                    $('#hd-menu-m').hide();
                    $('#hd-menu-t').stop().animate({rotate:'-45deg'},200);
                    $('#hd-menu-b').stop().animate({rotate:'45deg'},200);
                });
            });
            $('#hd-menu-bgbox').show();
            $('#hd-menu-bg-left').stop().animate({'width':'50%'},700);
            $('#hd-menu-bg-right').stop().animate({'width':'50%'},700);
            $('#category-wrap').stop().animate({'left':'-265px'},700,function(){
                $(this).hide();
            });
            hd_menu_click = 1;
        }

        else if( hd_menu_click == 1 ){
            $('#main-logo').stop().fadeIn(600);
            $('.hd-menu-textbox,.hd-information-box,#hd-cate-box').stop().animate({'opacity':'0'},150);
            $('#hd-menu-t').stop().animate({rotate:'0deg'},200);
            $('#hd-menu-b').stop().animate({rotate:'0deg'},200,function(){
                $('#lang>li').stop().animate({'opacity':'0'},150);
                $('#hd-menubox').stop().animate({'opacity':'0'},150,function(){
                    $(this).stop().animate({'opacity':'1'},150);
                    $(this).children().css({'background-color':'#a0a0a0'});
                    $('#hd-right-box').fadeIn(150);
                    $('#lang>li').css({'color':'#a0a0a0'}).stop().animate({'opacity':'1'},150);
                    $('#hd-menu-m').show();
                    $('#hd-menu-t').stop().animate({'margin-top':'0px'},300);
                    $('#hd-menu-b').stop().animate({'margin-bottom':'0px'},300);
                });
            });
            $('#category-wrap').show().stop().animate({'left':'-195px'},550);
            $('#hd-menu-bg-left').stop().animate({'width':'0%'},550);
            $('#hd-menu-bg-right').stop().animate({'width':'0%'},550,function(){
                $('#hd-menu-bgbox').hide();
            });
            hd_menu_click = 0;
        }

        $('#hd-menu-bg-right').click(function(){
            if( hd_menu_click == 1 ){
                $('#main-logo').stop().fadeIn(600);
                $('.hd-menu-textbox,.hd-information-box,#hd-cate-box').stop().animate({'opacity':'0'},150);
                $('#hd-menu-t').stop().animate({rotate:'0deg'},200);
                $('#hd-menu-b').stop().animate({rotate:'0deg'},200,function(){
                    $('#lang>li').stop().animate({'opacity':'0'},150);
                    $('#hd-menubox').stop().animate({'opacity':'0'},150,function(){
                        $(this).stop().animate({'opacity':'1'},150);
                        $(this).children().css({'background-color':'#a0a0a0'});
                        $('#hd-right-box').fadeIn(150);
                        $('#lang>li').css({'color':'#a0a0a0'}).stop().animate({'opacity':'1'},150);
                        $('#hd-menu-m').show();
                        $('#hd-menu-t').stop().animate({'margin-top':'0px'},300);
                        $('#hd-menu-b').stop().animate({'margin-bottom':'0px'},300);
                    });
                });
                $('#category-wrap').show().stop().animate({'left':'-195px'},550);
                $('#hd-menu-bg-left').stop().animate({'width':'0%'},550);
                $('#hd-menu-bg-right').stop().animate({'width':'0%'},550,function(){
                    $('#hd-menu-bgbox').hide();
                });
                hd_menu_click = 0;
            }
        });
    });
    
    // 헤더 메뉴 효과
    $('.hd-menu-textbox>li').mouseenter(function(){
        $(this).children('.hd-menu-text').css({'color':'#fff'});  
        $(this).children('.hd-menu-text').children('span').css({'transform':'rotate(0deg)','background':'url(icons/hd-menu-arrow.png) center no-repeat'}).siblings('.hd-menu-bar').css({'background':'linear-gradient(to right, #fff,transparent)'});
        $(this).siblings('.hd-menu-textbox>li').children('.hd-menu-text').css({'color':'#212121'}).children('.hd-menu-arrow').css({'transform':'rotate(-90deg)','background':'url(icons/hd-menu-arrow-b.png) center no-repeat'}).siblings('.hd-menu-bar').css({'background':'linear-gradient(to right, #212121,transparent)'});
        $(this).children('.hd-sub-textbox').stop().slideDown(300);
    });
    $('.hd-menu-textbox>li').mouseleave(function(){
        $(this).children('.hd-menu-text').css({'color':'#212121'}).children('span').css({'transform':'rotate(-90deg)','background':'url(icons/hd-menu-arrow-b.png) center no-repeat'}).siblings('.hd-menu-bar').css({'background':'linear-gradient(to right, #212121,transparent)'});
        $(this).children('.hd-sub-textbox').stop().slideUp(300);
    });

    // lang 효과 , 스크롤구간별 색상효과
    $('#lang-bt').mouseenter(function(){ // 마우스 오버,리브 열고 닫힘
        $('#lang-bt').stop().animate({'width':'70px'},400);
        $('#lang>li').css({'color':'#212121'});
        $('#lang-right-bg').css({'background-color':'rgba(0,0,0,0.2)'});
        if( hd_menu_click == 1 ){
            $('#lang>li').css({'color':'#fff'});
            $('#lang-right-bg').css({'background-color':'rgba(255,255,255,0.2)'});
        }
        
    });
    $('#lang-bt').mouseleave(function(){
        $('#lang-bt').stop().animate({'width':'35px'},400);
        if( hd_menu_click == 0 ){
            $('#lang>li').css({'color':'#a0a0a0'});
        }
        if( hd_menu_click == 1 ){
            $('#lang>li').css({'color':'#212121'});
        }
    });
    $('#lang-bt>#lang>li').click(function(){ // 해당 언어 선택시 크기 복구 위치 이동
        $('#lang-bt').stop().animate({'width':'35px'},400);
        $(this).stop().animate({'left':'0'},400).siblings().stop().animate({'left':'35px'},400);
    });

    // search 효과
    search_click = 0;
    $('#hd-search').click(function(){
        if( search_click == 0 ){
            $(this).stop().animate({'height':'0%','opacity':'0'},300,function(){
                $(this).attr({'src':'icons/close.png'}).animate({'height':'100%','opacity':'1'},300);
            });
            $('#hd-search-box').stop().animate({'height':'300px'},400,function(){
                $('.hd-search-block').stop().animate({'width':'430px'},400);
            });
            search_click = 1;
        }
        else if( search_click == 1 ){
            $(this).stop().animate({'height':'0%','opacity':'0'},300,function(){
                $(this).attr({'src':'icons/search.png'}).animate({'height':'100%','opacity':'1'},300);
            });
            $('.hd-search-block').stop().animate({'width':'0px'},200,function(){
                $('#hd-search-box').stop().animate({'height':'0px'},300);
            });
            search_click = 0;
        }
    });
    $('#wrap,footer').click(function(){
        if( search_click == 1 ){
            $('#hd-search').stop().animate({'height':'0%','opacity':'0'},300,function(){
                $(this).attr({'src':'icons/search.png'}).animate({'height':'100%','opacity':'1'},300);
            });
            $('.hd-search-block').stop().animate({'width':'0px'},200,function(){
                $('#hd-search-box').stop().animate({'height':'0px'},300);
            });
            search_click = 0;
        }
    });

    // 마우스 오버,리브 색상변경
    $('#hd-search').mouseenter(function(){ 
        if( search_click == 0 ){
            $(this).attr({'src':'icons/search-b.png'});
        }
    });
    $('#hd-search').mouseleave(function(){
        if( search_click == 0 ){
            $(this).attr({'src':'icons/search.png'});
        } 
    });

    // my-icon 효과
    myicon_click = 0;
    $('#hd-myicon').click(function(){
        if( myicon_click == 0 ){
            $(this).css({'z-index':'10003'}).stop().animate({'height':'0%','opacity':'0'},300,function(){ // 최상위로 이동 아이콘 노출
                $(this).attr({'src':'icons/close-b.png'}).animate({'height':'100%','opacity':'1'},300);
                $('#hd-myicon-inbox').delay(300).stop().animate({'opacity':'1'},300);
            });
            $('#hd-myicon-bgbox').show().css({'z-index':'10002'});
            $('#hd-myicon-bg-left').stop().animate({'width':'50%'},550);
            $('#hd-myicon-bg-right').stop().animate({'width':'50%'},550);
            $('#category-wrap').stop().animate({'left':'-265px'},550);
            $('#hd-menubox,#lang-bt,#hd-search').fadeOut(150);
            $('.main-text-wrap').stop().animate({'opacity':'0'},150);
            $('#main-logo').stop().fadeOut(600); // 메뉴 클릭시 로고 숨기기
            myicon_click = 1;
        }
        else if( myicon_click == 1 ){
            $(this).stop().animate({'height':'0%','opacity':'0'},300,function(){
                $(this).attr({'src':'icons/my-icon.png'}).animate({'height':'100%','opacity':'1'},300,function(){
                    $(this).css({'z-index':'999'}) // 인덱스 조절
                });
            });
            $('#hd-myicon-inbox').stop().animate({'opacity':'0'},150);
            $('#category-wrap').stop().animate({'left':'-195px'},450);
            $('#hd-myicon-bg-left').stop().animate({'width':'0%'},450);
            $('#hd-myicon-bg-right').stop().animate({'width':'0%'},450,function(){
                $('#hd-myicon-bgbox').hide().css({'z-index':'999'});
            });
            $('#hd-menubox,#lang-bt,#hd-search').delay(400).fadeIn(150);
            $('.main-text-wrap').delay(400).stop().animate({'opacity':'1'},150);
            $('#main-logo').stop().fadeIn(600);
            myicon_click = 0;
        }
    });
    $('#hd-myicon-bg-left').click(function(){
        if( myicon_click == 1 ){
            $('#hd-myicon').stop().animate({'height':'0%','opacity':'0'},300,function(){
                $(this).attr({'src':'icons/my-icon.png'}).animate({'height':'100%','opacity':'1'},300,function(){
                    $(this).css({'z-index':'999'}) // 인덱스 조절
                });
            });
            $('#hd-myicon-inbox').stop().animate({'opacity':'0'},150);
            $('#category-wrap').stop().animate({'left':'-195px'},550);
            $('#hd-myicon-bg-left').stop().animate({'width':'0%'},550);
            $('#hd-myicon-bg-right').stop().animate({'width':'0%'},550,function(){
                $('#hd-myicon-bgbox').hide().css({'z-index':'999'});
            });
            $('#hd-menubox,#lang-bt,#hd-search').delay(400).fadeIn(150);
            $('.main-text-wrap').delay(400).stop().animate({'opacity':'1'},150);
            $('#main-logo').stop().fadeIn(600);
            myicon_click = 0;
        }
    });
    
    // hd-myicon-sns 마우스오버효과
    $('#facebook').mouseenter(function(){
        $(this).attr({'src':'icons/facebook.png'});
    });
    $('#facebook').mouseleave(function(){
        $(this).attr({'src':'icons/facebook-b.png'});
    });

    $('#insta').mouseenter(function(){
        $(this).attr({'src':'icons/insta.png'});
    });
    $('#insta').mouseleave(function(){
        $(this).attr({'src':'icons/insta-b.png'});
    });

    $('#twitter').mouseenter(function(){
        $(this).attr({'src':'icons/twitter.png'});
    });
    $('#twitter').mouseleave(function(){
        $(this).attr({'src':'icons/twitter-b.png'});
    });

    $('#pinterest').mouseenter(function(){
        $(this).attr({'src':'icons/pinterest.png'});
    });
    $('#pinterest').mouseleave(function(){
        $(this).attr({'src':'icons/pinterest-b.png'});
    });

    $('#tiktok').mouseenter(function(){
        $(this).attr({'src':'icons/tiktok.png'});
    });
    $('#tiktok').mouseleave(function(){
        $(this).attr({'src':'icons/tiktok-b.png'});
    });

    $('#linkedin').mouseenter(function(){
        $(this).attr({'src':'icons/linkedin.png'});
    });
    $('#linkedin').mouseleave(function(){
        $(this).attr({'src':'icons/linkedin-b.png'});
    });

    // hd-myicon-menu 마우스오버효과
    $('#hd-myicon-menu>li>a').mouseenter(function(){ // 글씨 나타내기
        $(this).children('p').show();
    });
    $('#hd-myicon-menu>li>a').mouseleave(function(){
        $(this).children('p').hide();
    });
    // 아이콘 색상 변경
    $('#hd-myicon-menu>li:nth-child(1)>a').mouseenter(function(){
        $('#wishlist').attr({'src':'icons/wishlist.png'});
    });
    $('#hd-myicon-menu>li:nth-child(1)>a').mouseleave(function(){
        $('#wishlist').attr({'src':'icons/wishlist-b.png'});
    });

    $('#hd-myicon-menu>li:nth-child(2)>a').mouseenter(function(){
        $('#cart').attr({'src':'icons/cart.png'});
    });
    $('#hd-myicon-menu>li:nth-child(2)>a').mouseleave(function(){
        $('#cart').attr({'src':'icons/cart-b.png'});
    });

    $('#hd-myicon-menu>li:nth-child(3)>a').mouseenter(function(){
        $('#orderlist').attr({'src':'icons/orderlist.png'});
    });
    $('#hd-myicon-menu>li:nth-child(3)>a').mouseleave(function(){
        $('#orderlist').attr({'src':'icons/orderlist-b.png'});
    });

    $('#hd-myicon-menu>li:nth-child(4)>a').mouseenter(function(){
        $('#map').attr({'src':'icons/map.png'});
    });
    $('#hd-myicon-menu>li:nth-child(4)>a').mouseleave(function(){
        $('#map').attr({'src':'icons/map-b.png'});
    });

    // 마우스 오버 색상변경
    $('#hd-myicon').mouseenter(function(){ 
        if( myicon_click == 0 ){
            $(this).attr({'src':'icons/my-icon-b.png'});
        }
    });
    $('#hd-myicon').mouseleave(function(){
        if( myicon_click == 0 ){
            $(this).attr({'src':'icons/my-icon.png'});
        }
    });
    /* header end */
    /////////////////////////////////////////////////////
    /* footer */
    ft_img_num = 0;
    ft_img_loop = function(){
        ft_img_auto = setInterval(function(){
            ft_img_num = ft_img_num + 1;
            if( ft_img_num > 3 ){ ft_img_num = 0; }
            $('.ft-img>li').eq(ft_img_num).fadeIn(800).siblings().fadeOut(400);
        },2200);
    };

    // footer bt 효과
    ft_bt_click = 0;
    $('.footer-bt').click(function(){
        if( ft_bt_click == 0 ){
            ft_bt_click = 1;
            $(this).stop().animate({'bottom':'5px'},300);
            $('.footer-bt>img').css({'transform':'rotateX(180deg)'});
            $('footer').animate({'height':'5px'},300);
            clearInterval(ft_img_auto);
        }
        else if( ft_bt_click == 1 ){
            ft_bt_click = 0;
            $(this).stop().animate({'bottom':'200px'},300);
            $('.footer-bt>img').css({'transform':'rotateX(0deg)'});
            $('footer').animate({'height':'200px'},300);
            ft_img_loop();
        }
    });
    /* footer  end*/


}); //전체괄호