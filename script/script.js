$(document).ready(function(){
       
    /////////////////////////////////////////////////////
    /* intro */
    // intro start 
    $('#intro-start-bar').fadeIn(100).animate({'height':'15px','width':'1%'},200,function(){
        $(this).animate({'height':'1px','width':'100%'},200).fadeOut(100,function(){
            $('#intro-start-box1,#intro-start-box2').delay(200).animate({'height':'0%'},200,function(){
                $('#intro-start').hide();

                // 오버레이 이미지 가로이동 반복
                $('#intro-overlay-bg').fadeIn(500);
                $('#intro-overlay-bg').animate({'left':'-1920px'},6000,function(){
                    $(this).animate({'left':'0px'},6000);
                });
                setInterval(function(){
                    $('#intro-overlay-bg').animate({'left':'-1920px'},6000,function(){
                        $(this).animate({'left':'0px'},6000);
                    });
                },12310);

            });
        });
    }); 

    // 로고,텍스트 등장효과
    $('#intro-logo').delay(500).animate({'top':'0','opacity':'1'},1200); // 33% - 38%
    $('#intro-text1').delay(500).animate({'top':'67.8%','opacity':'1'},1200,function(){ // 75% - 67.8%
        $('#intro-name').animate({'width':'200px'},500 ,function(){ 
            $('#intro-text1').delay(500).animate({'margin-top':'-50px','opacity':'0'},500);
            $('#intro-name').delay(500).animate({'margin-top':'-50px','opacity':'0'},500,function(){
                $('#intro-name').hide();
                $('#intro-text1').hide();
                $('#intro-designby').delay(200).fadeIn(500);
            });
        });
    });

    // 배경 별 반짝이기
    $('#intro-star1').animate({'opacity':'1'},3300,function(){ // 별1
        $(this).animate({'opacity':'0.5'},500);
    });
    setInterval(function(){
        $('#intro-star1').animate({'opacity':'1'},4100,function(){
            $(this).animate({'opacity':'0.5'},500);
        });
    },4650);

    $('#intro-star2').animate({'opacity':'0.8'},5000,function(){ //별2
        $(this).animate({'opacity':'0.7'},500);
    });
    setInterval(function(){
        $('#intro-star2').animate({'opacity':'0.8'},5800,function(){
            $(this).animate({'opacity':'0.7'},500);
        });
    },6350);

    $('#intro-star3').animate({'opacity':'1'},4500,function(){ //별3
        $(this).animate({'opacity':'0.8'},500);
    });
    setInterval(function(){
        $('#intro-star3').animate({'opacity':'1'},5300,function(){
            $(this).animate({'opacity':'0.8'},500);
        });
    },5850);
    
    
    // 우주비행사 파츠별 움직임 반복
    astronaut_sp = 3500;
    astronaut_loop = 7010;

    $('#astronaut-box').animate({'opacity':'1'},800);

    $('#astronaut-leftarm').animate({rotate:'-12deg'},astronaut_sp,function(){ // 왼팔
        $(this).animate({rotate:'0deg'},astronaut_sp);
    });
    setInterval(function(){
        $('#astronaut-leftarm').animate({rotate:'-12deg'},astronaut_sp,function(){
            $(this).animate({rotate:'0deg'},astronaut_sp);
        });
    },astronaut_loop);

    $('#astronaut-rightarm').animate({rotate:'0deg'},astronaut_sp,function(){ // 오른팔
        $(this).animate({rotate:'-15deg'},astronaut_sp);
    });
    setInterval(function(){
        $('#astronaut-rightarm').animate({rotate:'0deg'},astronaut_sp,function(){
            $(this).animate({rotate:'-15deg'},astronaut_sp);
        });
    },astronaut_loop);

    $('#astronaut-leftfoot').animate({rotate:'0deg'},astronaut_sp,function(){ // 왼발
        $(this).animate({rotate:'20deg'},astronaut_sp);
    });
    setInterval(function(){
        $('#astronaut-leftfoot').animate({rotate:'0deg'},astronaut_sp,function(){
            $(this).animate({rotate:'20deg'},astronaut_sp);
        });
    },astronaut_loop);

    $('#astronaut-rightfoot').animate({rotate:'20deg'},astronaut_sp,function(){ // 오른발
        $(this).animate({rotate:'0deg'},astronaut_sp);
    });
    setInterval(function(){
        $('#astronaut-rightfoot').animate({rotate:'20deg'},astronaut_sp,function(){
            $(this).animate({rotate:'0deg'},astronaut_sp);
        });
    },astronaut_loop);
        
    // 우주비행사 전체 움직임 반복
    $('#astronaut-box').animate({'top':'46%'},4000,function(){ // 상하 반복
        $(this).animate({'top':'48%'},4000);
    });
    setInterval(function(){
        $('#astronaut-box').animate({'top':'46%'},4000,function(){
            $(this).animate({'top':'48%'},4000);
        });
    },8010);

    $('#astronaut-box2').animate({'left':'30px'},5000,function(){ // 좌우 반복
        $(this).animate({'left':'0'},5000);
    });
    setInterval(function(){
        $('#astronaut-box2').animate({'left':'30px'},5000,function(){
            $(this).animate({'left':'0'},5000);
        });
    },10010);
    
    // 우주선 파츠별 움직임 반복
    $('#spaceship-box').animate({'opacity':'1'},800);

    $('#spaceship-ring').animate({rotate:'-14deg'},6500,function(){ // 우주선 링
        $(this).animate({rotate:'0deg'},6500);
    });
    setInterval(function(){
        $('#spaceship-ring').animate({rotate:'-14deg'},6500,function(){ 
            $(this).animate({rotate:'0deg'},6500);
        });
    },13010);
        
    $('#fire1').delay(800).animate({'opacity':'1','left':'10px'},400); // 불 점화
    $('#fire1').animate({'opacity':'0.5'},200);
    $('#fire1').animate({'opacity':'1','left':'0px'},300);
    $('#fire1').animate({'left':'-5px'},1000,function(){
        $(this).animate({'left':'0'},500,function(){
            $(this).delay(2200).animate({'opacity':'0'},300,function(){ // #fire1 - dealy 800 animate 4900
                $('#fire1').css({'left':'20px'}); // #fire1 원위치
                $('#fire2').delay(800).animate({'opacity':'1','left':'330px'},400); 
                $('#fire2').animate({'opacity':'0.5'},200);
                $('#fire2').animate({'opacity':'1','left':'335px'},300);
                $('#fire2').animate({'left':'330px'},1000,function(){
                    $(this).delay(2200).animate({'opacity':'0'},300,function(){ // #fire2 - delay 800 animate 4400
                        $('#fire2').css({'left':'325px'}); // #fire2 원위치
                    });
                });
            });
        });
    });
    setInterval(function(){
        $('#fire1').delay(800).animate({'opacity':'1','left':'10px'},400); 
        $('#fire1').animate({'opacity':'0.5'},200);
        $('#fire1').animate({'opacity':'1','left':'0px'},300);
        $('#fire1').animate({'left':'-5px'},1000,function(){
            $(this).animate({'left':'0'},500,function(){
                $(this).delay(2200).animate({'opacity':'0'},300,function(){ // #fire1 - dealy 800 animate 4900
                    $('#fire1').css({'left':'20px'}); // #fire1 원위치
                    $('#fire2').delay(800).animate({'opacity':'1','left':'330px'},400); 
                    $('#fire2').animate({'opacity':'0.5'},200);
                    $('#fire2').animate({'opacity':'1','left':'335px'},300);
                    $('#fire2').animate({'left':'330px'},1000,function(){
                        $(this).delay(2200).animate({'opacity':'0'},300,function(){ // #fire2 - delay 800 animate 4400
                            $('#fire2').css({'left':'325px'}); // #fire2 원위치
                        });
                    });
                });
            });
        });
    },11000); // 총 시간 10900

    // 우주선 전체 움직임 반복
    $('#spaceship-box').delay(2000).animate({'opacity':'1'},500);

    $('#spaceship-box').delay(800).animate({'top':'5px'},4000,function(){ // 상하 반복
        $(this).animate({'top':'0'},4000);
    });
    setInterval(function(){
        $('#spaceship-box').animate({'top':'5px'},4000,function(){
            $(this).animate({'top':'0'},4000);
        });
    },8010);

    $('#spaceship-box2').delay(800).animate({'left':'50px'},4400,function(){ // 좌우 반복
        $(this).delay(1300).animate({'left':'0'},4900);
    });
    setInterval(function(){
        $('#spaceship-box2').delay(300).animate({'left':'50px'},4400,function(){
            $(this).delay(1300).animate({'left':'0'},4900);
        });
    },11000); // 총 시간 10900

    $('#spaceship-box3').animate({'top':'10px'},4500,function(){ // 본체 상하 반복
        $(this).animate({'top':'-15px'},4500);
    });
    setInterval(function(){
        $('#spaceship-box3').animate({'top':'10px'},4500,function(){
            $(this).animate({'top':'-15px'},4500);
        });
    },9010);

    $('#spaceship-cover2').delay(1500).animate({'left':'40px','top':'-107px'},2000,function(){ // 본체 커버 열림 닫힘 반복
        $(this).delay(1500).animate({'left':'20px','top':'0px'},2000);
    });
    setInterval(function(){
        $('#spaceship-cover2').delay(1500).animate({'left':'40px','top':'-107px'},2000,function(){
            $(this).delay(1500).animate({'left':'20px','top':'0px'},2000);
        });
    },7050);
    
    // 인트로라인,인트로클릭 움직임 반복
    setInterval(function(){
        $('#intro-line').animate({'bottom':'7%','height':'0%'},800,function(){ //인트로라인 떨어짐
            $(this).css({'bottom':'150%','height':'75%'});
            $('#intro-click-box').animate({'opacity':'1'},150); // 인트로클릭 반짝임
            $('#intro-click-box').animate({'opacity':'0'},2000);
        });
    },2850);
    
    // 클릭 후 메인화면 전환
    $('#intro-click-box').click(function(){
        $('#intro-start').show();
        $('#intro-start-box1').delay(200).animate({'height':'50%'},300);
        $('#intro-start-box2').delay(200).animate({'height':'50%'},300,function(){
            $('#intro-wrap').hide();
            $('#wrap').show();
            $('.moon-wrap,header').delay(300).fadeIn(300);
            $('#intro-start').fadeOut(500,function(){
                $('header').animate({'opacity':'1'},300);
                $('.top-bt-wrap').fadeIn(500);
                $('.scroll-wrap').stop().animate({'opacity':'1'},500);
                $('.page1-mainslide-wrap').stop().animate({'opacity':'1'},500);
                page1_autoslide(); // auto slide 실행
            });
        });
        $('#cate-box>li:nth-child(1)').delay(1200).animate({'width':'320px'},400,function(){
            $(this).animate({'width':'265px'},500);
        });
        $('#cate-box>li:nth-child(2)').delay(1500).animate({'width':'320px'},400,function(){
            $(this).animate({'width':'265px'},500);
        });
        $('#cate-box>li:nth-child(3)').delay(1800).animate({'width':'320px'},400,function(){
            $(this).animate({'width':'265px'},500);
        });
    });
    $('#intro-logo').click(function(){
        $('#intro-start').show();
        $('#intro-start-box1').delay(200).animate({'height':'50%'},300);
        $('#intro-start-box2').delay(200).animate({'height':'50%'},300,function(){
            $('#intro-wrap').hide();
            $('#wrap').show();
            $('.moon-wrap,header').delay(300).fadeIn(300);
            $('#intro-start').fadeOut(500,function(){
                $('header').animate({'opacity':'1'},300);
                $('.top-bt-wrap').fadeIn(500);
                $('.scroll-wrap').stop().animate({'opacity':'1'},500);
                $('.page1-mainslide-wrap').stop().animate({'opacity':'1'},500);
                page1_autoslide(); // auto slide 실행
            });
        });
        $('#cate-box>li:nth-child(1)').delay(1200).animate({'width':'320px'},400,function(){
            $(this).animate({'width':'265px'},500);
        });
        $('#cate-box>li:nth-child(2)').delay(1500).animate({'width':'320px'},400,function(){
            $(this).animate({'width':'265px'},500);
        });
        $('#cate-box>li:nth-child(3)').delay(1800).animate({'width':'320px'},400,function(){
            $(this).animate({'width':'265px'},500);
        });
    });
    /* intro end */
    /////////////////////////////////////////////////////
    /* category */
    // 카테고리 공간 설정
    $('#cate-box>li:nth-child(1)').mouseenter(function(){ // 1번 카테고리 css에서 :hover로 under bar,text icon 효과 설정 
        $(this).stop().animate({'width':'354px'},300);
    });
    $('#cate-box>li:nth-child(1)').mouseleave(function(){
        $(this).stop().animate({'width':'265px'},200);
    });
    $('#cate-box>li:nth-child(2)').mouseenter(function(){ // 2번 카테고리 
        $(this).stop().animate({'width':'397px'},300);
    });
    $('#cate-box>li:nth-child(2)').mouseleave(function(){
        $(this).stop().animate({'width':'265px'},200);
    });
    $('#cate-box>li:nth-child(3)').mouseenter(function(){ // 3번 카테고리 
        $(this).stop().animate({'width':'310px'},300);
    });
    $('#cate-box>li:nth-child(3)').mouseleave(function(){
        $(this).stop().animate({'width':'265px'},200);
    });

    $('#cate-box>li:nth-child(2)').click(function(){ // 해당 스크롤로 이동
        $('body,html').animate({'scrollTop':'7496'},1500);
        $('.sea-beach-wrap').css({'top':'-6000px','opacity':'0'});
        $('.customizing-wrap').css({'opacity':'1'});
        $('.scroll-bg1,.scroll-bg2').css({'background-color':'#212121'});
        $('.scroll-text').css({'color':'#212121'});
        $('.moon-box').show();
    });
    /* category end */
    /////////////////////////////////////////////////////
    /* header */
    // 헤더 메뉴 버튼 효과
    hd_menu_click = 0;
    $('#hd-menubox').mouseenter(function(){ // 메뉴버튼 색상변경 효과
        if( sc >= $('.page8').offset().top ){
            $('#hd-menubox>div').css({'background-color':'#212121'});
        }
        else if( sc < $('.page8').offset().top ){
            $('#hd-menubox>div').css({'background-color':'#fff'});
        }
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
    sc = 0;
    $('#lang-bt').mouseenter(function(){ // 마우스 오버,리브 열고 닫힘
        $('#lang-bt').stop().animate({'width':'70px'},400);
        if( sc >= $('.page8').offset().top ){
            $('#lang>li').css({'color':'#212121'});
            $('#lang-right-bg').css({'background-color':'rgba(0,0,0,0.1)'});
        }
        else if( sc < $('.page8').offset().top ){
            $('#lang>li').css({'color':'#fff'});
            $('#lang-right-bg').css({'background-color':'rgba(255,255,255,0.2)'});
        }
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
    $('section,footer').click(function(){
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
    
    // 마우스 오버,리브 스크롤구간별 색상변경
    $('#hd-search').mouseenter(function(){ 
        if( sc >= $('.page8').offset().top && search_click == 0 ){
            $(this).attr({'src':'icons/search-b.png'});
        }
        else if( sc < $('.page8').offset().top && search_click == 0 ){
            $(this).attr({'src':'icons/search-w.png'});
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
    
    // 마우스 오버 스크롤구간별 색상변경
    $('#hd-myicon').mouseenter(function(){ 
        if( sc >= $('.page8').offset().top && myicon_click == 0 ){
            $(this).attr({'src':'icons/my-icon-b.png'});
        }
        else if( sc <= $('.page8').offset().top && myicon_click == 0 ){
            $(this).attr({'src':'icons/my-icon-w.png'});
        }
    });
    $('#hd-myicon').mouseleave(function(){
        if( myicon_click == 0 ){
            $(this).attr({'src':'icons/my-icon.png'});
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
    /* header end */
    /////////////////////////////////////////////////////
    /* page1 */
    // page1 bg text 효과
    main_text = 0;
    $('.main-text-wrap>li:nth-child(1)>.main-text-box2').delay(1000).animate({'opacity':'1'},100,function(){ // 메인화면 시작시 텍스트 에니메이션 딜레이생성
        $('.main-text-wrap>li:nth-child(1)>.main-text-box2').css({'transform':'rotateX(90deg)'});
        $('.main-text-wrap>li:nth-child(1)').animate({'opacity':'0'},1300,function(){
            $('.main-text-wrap>li:nth-child(2)').animate({'opacity':'1'},200);
            $('.main-text-wrap>li:nth-child(2)').children('.main-text-box2').css({'transform':'rotateX(0deg)'}).parents('.main-text-wrap>li').siblings('.main-text-wrap>li').children('.main-text-box2').css({'transform':'rotateX(-90deg)'});
            main_text = 1; // 다음 텍스트 에니메이션 순번
        });
    });
    setInterval(function(){ // op는 li에 부여, rotate는 텍스트박스2에 부여
        if( main_text == 0 ){
            $('.main-text-wrap>li:nth-child(1)>.main-text-box2').css({'transform':'rotateX(90deg)'});
            $('.main-text-wrap>li:nth-child(1)').animate({'opacity':'0'},1400,function(){
                $('.main-text-wrap>li:nth-child(2)').animate({'opacity':'1'},200);
                $('.main-text-wrap>li:nth-child(2)').children('.main-text-box2').css({'transform':'rotateX(0deg)'}).parents('.main-text-wrap>li').siblings('.main-text-wrap>li').children('.main-text-box2').css({'transform':'rotateX(-90deg)'});
                main_text = 1;
            });
        }
        if( main_text == 1 ){
            $('.main-text-wrap>li:nth-child(2)>.main-text-box2').css({'transform':'rotateX(90deg)'});
            $('.main-text-wrap>li:nth-child(2)').animate({'opacity':'0'},1400,function(){
                $('.main-text-wrap>li:nth-child(3)').animate({'opacity':'1'},200);
                $('.main-text-wrap>li:nth-child(3)').children('.main-text-box2').css({'transform':'rotateX(0deg)'}).parents('.main-text-wrap>li').siblings('.main-text-wrap>li').children('.main-text-box2').css({'transform':'rotateX(-90deg)'});
                main_text = 2;
            });
        }
        if( main_text == 2 ){
            $('.main-text-wrap>li:nth-child(3)>.main-text-box2').css({'transform':'rotateX(90deg)'});
            $('.main-text-wrap>li:nth-child(3)').animate({'opacity':'0'},1400,function(){
                $('.main-text-wrap>li:nth-child(1)').animate({'opacity':'1'},200);
                $('.main-text-wrap>li:nth-child(1)').children('.main-text-box2').css({'transform':'rotateX(0deg)'}).parents('.main-text-wrap>li').siblings('.main-text-wrap>li').children('.main-text-box2').css({'transform':'rotateX(-90deg)'});
                main_text = 0;
            });
        }
    },6500);

    // page1 auto slide
    page1_auto_num = 0;
    page1_autoslide = function(){
        page1_auto = setInterval(function(){
            page1_auto_num = page1_auto_num + 1;
            if( page1_auto_num > 3 ){
                page1_auto_num = 0;
            }
            $('.page1-mainslide>li').eq(page1_auto_num).fadeIn(500).siblings('.page1-mainslide>li').animate({'left':'-50%','opacity':'0'},300,function(){
                $(this).hide().css({'opacity':'1','left':'0'});
            });
            $('.page1-mainslide-pagebt>li').eq(page1_auto_num).css({'background-color':'#c40d2e'}).siblings().css({'background-color':'rgba(255,255,255,0.2)'});
        },4500);
    }

    // page1 slide page bt
    page1_page_click = 0; // 중복 클릭 방지
    $('.page1-mainslide-pagebt>li').click(function(){
        page1_page_num = $(this).index(); // 클릭한 page num
        if( page1_page_click == 0 ){
            page1_page_click = 1;
            $(this).css({'background-color':'#c40d2e'}).siblings().css({'background-color':'rgba(255,255,255,0.2)'});
            $('.page1-mainslide>li').eq(page1_page_num).stop().fadeIn(500).siblings('.page1-mainslide>li').stop().animate({'left':'-50%','opacity':'0'},300,function(){
                $(this).hide().css({'opacity':'1','left':'0'});
                page1_page_click = 0;
                page1_auto_num = page1_page_num;
            });
        }
    });

    // page1 slide prev,next bt
    page1_page_click = 0;
    $('.page1-mainslide-prevbt').click(function(){
        if( page1_page_click == 0 ){
            page1_page_click = 1;
            page1_auto_num = page1_auto_num -1;
            if( page1_auto_num < 0 ){ page1_auto_num = 3 }
            $('.page1-mainslide>li').eq(page1_auto_num).fadeIn(500).siblings('.page1-mainslide>li').animate({'left':'-50%','opacity':'0'},300,function(){
                $(this).hide().css({'opacity':'1','left':'0'});
                page1_page_click = 0;
            });
            $('.page1-mainslide-pagebt>li').eq(page1_auto_num).css({'background-color':'#c40d2e'}).siblings().css({'background-color':'rgba(255,255,255,0.2)'});
        }
    });

    $('.page1-mainslide-nextbt').click(function(){
        if( page1_page_click == 0 ){
            page1_page_click = 1;
            page1_auto_num = page1_auto_num +1;
            if( page1_auto_num > 3 ){ page1_auto_num = 0 }
            $('.page1-mainslide>li').eq(page1_auto_num).fadeIn(500).siblings('.page1-mainslide>li').animate({'left':'-50%','opacity':'0'},300,function(){
                $(this).hide().css({'opacity':'1','left':'0'});
                page1_page_click = 0;
            });
            $('.page1-mainslide-pagebt>li').eq(page1_auto_num).css({'background-color':'#c40d2e'}).siblings().css({'background-color':'rgba(255,255,255,0.2)'});
        }
    });

    // page1 play, pause bt
    page1_playbt_click = 0;
    $('.page1-mainslide-playbt').click(function(){
        if( page1_playbt_click == 0 ){
            clearInterval(page1_auto);
            $('.page1-mainslide-pause').attr('src','icons/slide-playbt.png');
            page1_playbt_click = 1;
        }
        else if( page1_playbt_click == 1 ){
            page1_autoslide();
            $('.page1-mainslide-pause').attr('src','icons/slide-pausebt.png');
            page1_playbt_click = 0;
        }
    });

    // page1 slide more버튼 클릭시 해당 페이지로 이동되며 auto slide 멈춤
    $('#page1-more-bt1').click(function(){ // page1 더보기 버튼 1번째
        $('body,html').animate({'scrollTop': $('.page2').offset().top },1000);
        clearInterval(page1_auto);
        $('.page1-mainslide-pause').attr('src','icons/slide-playbt.png');
        page1_playbt_click = 1;
    });
    $('#page1-more-bt2').click(function(){ // page1 더보기 버튼 2번째
        $('body,html').animate({'scrollTop': $('.page3').offset().top },1300);
        clearInterval(page1_auto);
        $('.page1-mainslide-pause').attr('src','icons/slide-playbt.png');
        page1_playbt_click = 1;
    });
    $('#page1-more-bt3').click(function(){ // page1 더보기 버튼 3번째
        $('body,html').animate({'scrollTop': $('.page4').offset().top },1300);
        clearInterval(page1_auto);
        $('.page1-mainslide-pause').attr('src','icons/slide-playbt.png');
        page1_playbt_click = 1;
    });
    $('#page1-more-bt4').click(function(){ // page1 더보기 버튼 4번째
        $('body,html').animate({'scrollTop': $('.page5').offset().top },1300);
        clearInterval(page1_auto);
        $('.page1-mainslide-pause').attr('src','icons/slide-playbt.png');
        page1_playbt_click = 1;
    });
    /* page1 end */
    /////////////////////////////////////////////////////
    /* page2 */
    watch_set = function(){
        $('.moon-page-watch-img').css({'transform':'rotateY(0deg)'})
        $('.moon-page-watch-back').hide();
        $('.moon-page-watch').show();
        page2_imgpage_num1();
        page3_imgpage_num1();
        page4_imgpage_num1();
        page5_imgpage_num1();
        moonwatch_page_num = 0;
        moonwatch_page_num2 = 0;
        moonwatch_page_num3 = 0;
        moonwatch_page_num4 = 0;
        $('.moon-h-pagebt>ul>li:nth-child(1)>div').css({'background-color':'transparent','border':'1px solid #fff'}).parents('.moon-h-pagebt>ul>li').siblings('.moon-h-pagebt>ul>li').children('div').css({'background-color':'rgba(255,255,255,0.75)','border':'none'});
        $('.moon-page-watch-img>ul>li:nth-child(1)').show().siblings('li').hide();
    };

    // constellation hover 효과
    $('.constellation-infobox').mouseenter(function(){ 
        $('.basic-arrow').fadeOut(500);
        $('.constellation-hiddenbox').stop().animate({'height':'450px'},600,function(){
            $('.constellation-h-sidebox').stop().animate({'width':'200px','right':'270px'},500,function(){
                $('.constellation-h-bt-box').css({'z-index':'99'});
                $('.constellation-pagebt').css({'opacity':'1'});
            });
        });
    });
    $('.constellation-infobox').mouseleave(function(){
        $('.basic-arrow').fadeIn(500);
        $('.constellation-h-bt-box').css({'z-index':'0'});
        $('.constellation-h-sidebox').stop().animate({'width':'0px','right':'150px'},300);
        $('.constellation-hiddenbox').stop().animate({'height':'0px'},500,function(){
            watch_set();
            reverse_click = 0;
        });
        $('.constellation-pagebt').css({'opacity':'0'});
    });

    // moon page hidden box 안에 있는 이미지 뒤집기
    reverse_click = 0;
    $('.moon-page-watch-img').click(function(){
        if( reverse_click == 0 ){
            reverse_click = 1;
            $('.moon-page-watch-img').css({'transform':'rotateY(180deg)'});
            $('.moon-page-watch').stop().fadeOut(300);
            $('.moon-page-watch-back').stop().delay(300).stop().fadeIn(300);
        }
        else if( reverse_click == 1 ){
            reverse_click = 0;
            $('.moon-page-watch-img').css({'transform':'rotateY(0deg)'});
            $('.moon-page-watch-back').stop().fadeOut(300);
            $('.moon-page-watch').stop().delay(300).stop().fadeIn(300);
        }
    });

    // page2~page5 moon hidden box page 이미지 변경
    // page2 
    page2_imgpage_num1 = function(){ // page2 1번페이지 내용
        // 클릭시 해당 인덱스 내용 변경
        $('.constellation-h-sidebox>h3').html('CONSTELLATION<br>CO‑AXIAL MASTER<br>CHRONOMETER 39 MM');
        $('.constellation-h-sidebox>p').html('Steel<br>‑ Sedna™ Gold on Steel ‑<br>Sedna™ Gold <br>131.20.39.20.02.001');
    }
    page2_imgpage_num2 = function(){ // page2 2번페이지 내용
        // 클릭시 해당 인덱스 내용 변경
        $('.constellation-h-sidebox>h3').html('GLOBEMASTER<br>CO‑AXIAL MASTER<br>CHRONOMETER 39 MM');
        $('.constellation-h-sidebox>p').html('Steel<br>‑ yellow gold ‑<br>on leather strap<br>130.23.39.21.02.001');
    }
    page2_imgpage_num3 = function(){ // page2 3번페이지 내용
        // 클릭시 해당 인덱스 내용 변경
        $('.constellation-h-sidebox>h3').html('CONSTELLATION<br>CO‑AXIAL MASTER<br>CHRONOMETER 41 MM');
        $('.constellation-h-sidebox>p').html('Steel<br>‑ on ‑<br>leather strap<br>131.33.41.21.04.001');
    }
    
    // page3
    page3_imgpage_num1 = function(){ // page3 1번페이지 내용
        // 클릭시 해당 인덱스 내용 변경
        $('.deville-h-sidebox>h3').html('HOUR VISION<br>CO‑AXIAL MASTER<br>CHRONOMETER 41 MM');
        $('.deville-h-sidebox>p').html('Sedna™<br>‑ gold on Sedna™ ‑<br>gold<br>433.50.41.21.13.001');
    }
    page3_imgpage_num2 = function(){ // page3 2번페이지 내용
        // 클릭시 해당 인덱스 내용 변경
        $('.deville-h-sidebox>h3').html('TOURBILLON<br>CO‑AXIAL MASTER<br>CHRONOMETER 43 MM');
        $('.deville-h-sidebox>p').html('Sedna™ Gold<br>‑ Canopus Gold™ ‑<br>on leather strap<br>529.53.43.22.01.001');
    }
    page3_imgpage_num3 = function(){ // page3 3번페이지 내용
        // 클릭시 해당 인덱스 내용 변경
        $('.deville-h-sidebox>h3').html('TOURBILLON<br>CHRONOMETER<br>NUMBERED EDITION 38.7 MM');
        $('.deville-h-sidebox>p').html('Red gold<br>‑ on ‑<br>leather strap<br>513.53.39.21.99.001');
    }

    // page4
    page4_imgpage_num1 = function(){ // page4 1번페이지 내용
        // 클릭시 해당 인덱스 내용 변경
        $('.speedmaster-h-sidebox>h3').html('MOONWATCH<br>CO‑AXIAL PROFESSIONAL<br>CHRONOMETER 42 MM');
        $('.speedmaster-h-sidebox>p').html('Steel<br>‑ Sedna™ Gold on Steel ‑<br>Sedna™ Gold<br>327.20.43.50.01.001');
    }
    page4_imgpage_num2 = function(){ // page4 2번페이지 내용
        // 클릭시 해당 인덱스 내용 변경
        $('.speedmaster-h-sidebox>h3').html('CHRONOSCOPE<br>CO‑AXIAL MASTER<br>CHRONOMETER 43 MM');
        $('.speedmaster-h-sidebox>p').html('Bronze Gold<br>‑ on ‑<br>leather strap<br>329.92.43.51.10.001');
    }
    page4_imgpage_num3 = function(){ // page4 3번페이지 내용
        // 클릭시 해당 인덱스 내용 변경
        $('.speedmaster-h-sidebox>h3').html('SPEEDMASTER 38<br>CO‑AXIAL CHRONOMETER<br>CHRONOGRAPH 38 MM');
        $('.speedmaster-h-sidebox>p').html('Sedna™ gold<br>‑ on ‑<br>leather strap<br>324.68.38.50.02.003');
    }

    // page5
    page5_imgpage_num1 = function(){ // page5 1번페이지 내용
        // 클릭시 해당 인덱스 내용 변경
        $('.seamaster-h-sidebox>h3').html('SEAMASTER 300<br>CO‑AXIAL MASTER<br>CHRONOMETER 41 MM');
        $('.seamaster-h-sidebox>p').html('Titanium<br>‑ Sedna™ Gold ‑<br>on titanium<br>227.60.55.21.03.001');
    }
    page5_imgpage_num2 = function(){ // page5 2번페이지 내용
        // 클릭시 해당 인덱스 내용 변경
        $('.seamaster-h-sidebox>h3').html('SEAMASTER 300<br>CO‑AXIAL MASTER<br>CHRONOMETER 41 MM');
        $('.seamaster-h-sidebox>p').html('Bronze Gold<br>‑ on ‑<br>leather strap<br>234.92.41.21.10.001');
    }
    page5_imgpage_num3 = function(){ // page5 3번페이지 내용
        // 클릭시 해당 인덱스 내용 변경
        $('.seamaster-h-sidebox>h3').html('OLYMPIC OFFICIAL<br>TIMEKEEPER<br>CHRONOMETER 39.5 MM');
        $('.seamaster-h-sidebox>p').html('Steel <br>‑ on ‑<br>leather strap<br>522.32.40.20.01.001');
    }
    // page2~page5 시계이미지 변경
    $('.constellation-pagebt>ul>li').click(function(){  // page2 
        moonwatch_page_num = $(this).index();
        $(this).children().css({'background-color':'transparent','border':'1px solid #fff'}).parents('.constellation-pagebt>ul>li').siblings('.constellation-pagebt>ul>li').children().css({'background-color':'rgba(255,255,255,0.75)','border':'none'});

        $('.moon-page-watch-img').css({'transform':'rotateY(0deg)'});
        $('.moon-page-watch-back').stop().fadeOut(300);
        $('.moon-page-watch').stop().delay(300).stop().fadeIn(300);
        reverse_click = 0;

        $('.constellation-imglist>li').eq(moonwatch_page_num).stop().fadeIn(300).siblings('.constellation-imglist>li').stop().fadeOut(200);

        if( moonwatch_page_num == 0 ){ // 1번 버튼
            page2_imgpage_num1();
        }
        if( moonwatch_page_num == 1 ){ // 2번 버튼
            page2_imgpage_num2();
        }
        if( moonwatch_page_num == 2 ){ // 3번 버튼
            page2_imgpage_num3();
        }

    });

    $('.deville-pagebt>ul>li').click(function(){ // page3
        moonwatch_page_num2 = $(this).index();
        $(this).children().css({'background-color':'transparent','border':'1px solid #fff'}).parents('.deville-pagebt>ul>li').siblings('.deville-pagebt>ul>li').children().css({'background-color':'rgba(255,255,255,0.75)','border':'none'});

        $('.moon-page-watch-img').css({'transform':'rotateY(0deg)'});
        $('.moon-page-watch-back').stop().fadeOut(300);
        $('.moon-page-watch').stop().delay(300).stop().fadeIn(300);
        reverse_click = 0;

        $('.deville-imglist>li').eq(moonwatch_page_num2).stop().fadeIn(300).siblings('.deville-imglist>li').stop().fadeOut(200);

        if( moonwatch_page_num2 == 0 ){ // 1번 버튼
            page3_imgpage_num1();
        }
        if( moonwatch_page_num2 == 1 ){ // 2번 버튼
            page3_imgpage_num2();
        }
        if( moonwatch_page_num2 == 2 ){ // 3번 버튼
            page3_imgpage_num3();
        }

    });

    $('.speedmaster-pagebt>ul>li').click(function(){ // page4
        moonwatch_page_num3 = $(this).index();
        $(this).children().css({'background-color':'transparent','border':'1px solid #fff'}).parents('.speedmaster-pagebt>ul>li').siblings('.speedmaster-pagebt>ul>li').children().css({'background-color':'rgba(255,255,255,0.75)','border':'none'});
        
        $('.moon-page-watch-img').css({'transform':'rotateY(0deg)'});
        $('.moon-page-watch-back').stop().fadeOut(300);
        $('.moon-page-watch').stop().delay(300).stop().fadeIn(300);
        reverse_click = 0;

        $('.speedmaster-imglist>li').eq(moonwatch_page_num3).stop().fadeIn(300).siblings('.speedmaster-imglist>li').stop().fadeOut(200);

        if( moonwatch_page_num3 == 0 ){ // 1번 버튼
            page4_imgpage_num1();
        }
        if( moonwatch_page_num3 == 1 ){ // 2번 버튼
            page4_imgpage_num2();
        }
        if( moonwatch_page_num3 == 2 ){ // 3번 버튼
            page4_imgpage_num3();
        }

    });

    $('.seamaster-pagebt>ul>li').click(function(){ // page5
        moonwatch_page_num4 = $(this).index();
        $(this).children().css({'background-color':'transparent','border':'1px solid #fff'}).parents('.seamaster-pagebt>ul>li').siblings('.seamaster-pagebt>ul>li').children().css({'background-color':'rgba(255,255,255,0.75)','border':'none'});

        $('.moon-page-watch-img').css({'transform':'rotateY(0deg)'});
        $('.moon-page-watch-back').stop().fadeOut(300);
        $('.moon-page-watch').stop().delay(300).stop().fadeIn(300);
        reverse_click = 0;

        $('.seamaster-imglist>li').eq(moonwatch_page_num4).stop().fadeIn(300).siblings('.seamaster-imglist>li').stop().fadeOut(200);

        if( moonwatch_page_num4 == 0 ){ // 1번 버튼
            page5_imgpage_num1();
        }
        if( moonwatch_page_num4 == 1 ){ // 2번 버튼
            page5_imgpage_num2();
        }
        if( moonwatch_page_num4 == 2 ){ // 3번 버튼
            page5_imgpage_num3();
        }
    });
    /* page2 end */
    /////////////////////////////////////////////////////
    /* page3 */
    // deville hover 효과
    $('.deville-infobox').mouseenter(function(){ 
        $('.basic-arrow').fadeOut(500);
        $('.deville-hiddenbox').stop().animate({'height':'450px'},600,function(){
            $('.deville-h-sidebox').stop().animate({'width':'200px','left':'250px'},500,function(){
                $('.deville-h-bt-box').css({'z-index':'99'});
                $('.deville-pagebt').css({'opacity':'1'});
            });
        });
    });
    $('.deville-infobox').mouseleave(function(){
        $('.basic-arrow').fadeIn(500);
        $('.deville-h-bt-box').css({'z-index':'0'});
        $('.deville-h-sidebox').stop().animate({'width':'0px','left':'130px'},300);
        $('.deville-hiddenbox').stop().animate({'height':'0px'},500,function(){
            watch_set();
            reverse_click = 0;
        });
        $('.deville-pagebt').css({'opacity':'0'});
    });
    /* page3 end */
    /////////////////////////////////////////////////////
    /* page4 */
    // speedmaster click 효과
    speedmaster_close = function(){ // speedmaster hidden close 변수화
        speedmaster_click = 0;
        $('.page4-text-rightbox').css({'opacity':'1'});
        $('.speedmaster-h-bt-box').css({'z-index':'0'});
        $('.speedmaster-h-sidebox').stop().animate({'width':'0px','left':'130px'},300,function(){
            $(this).css({'left':'350px'});
        });
        $('.speedmaster-hiddenbox').stop().animate({'width':'0px'},500,function(){
            watch_set();
            reverse_click = 0;
        });
        $('.speedmaster-pagebt').css({'opacity':'0'});
    }

    speedmaster_click = 0;
    $('.speedmaster-infobox').click(function(){ // speedmaster hidden opne
        if( speedmaster_click == 0 ){
            speedmaster_click = 1;
            $('.page4-text-rightbox').css({'opacity':'0'});
            $('.basic-arrow').fadeOut(500);
            $('.speedmaster-hiddenbox').stop().animate({'width':'480px'},600,function(){
                $('.speedmaster-h-sidebox').stop().animate({'width':'200px','left':'40px'},500,function(){
                    $('.speedmaster-h-bt-box').css({'z-index':'99'});
                    $('.speedmaster-pagebt').css({'opacity':'1'});
                });
            });
        }
        else if( speedmaster_click == 1 ){
            $('.page4-text-rightbox').css({'opacity':'1'});
            $('.basic-arrow').fadeIn(500);
            speedmaster_close();
            $('.speedmaster-pagebt').css({'opacity':'0'});
        }
    });

    $('.moon-page-hiddenbox').mouseenter(function(){
        $('.moon-page-hiddenbox-closebt').css({'opacity':'1'});
    });
    $('.moon-page-hiddenbox').mouseleave(function(){
        $('.moon-page-hiddenbox-closebt').css({'opacity':'0'});
    });
    $('.moon-page-hiddenbox-closebt,.page-empty-bg').click(function(){ // moon-page hidden close btn
        $('.basic-arrow').fadeIn(500);
        $('.page4-text-rightbox').css({'opacity':'1'});
        speedmaster_close();
        seamaster_close();
        $('.moon-h-pagebt').css({'opacity':'0'});
    });
    
    /* page4 end */
    /////////////////////////////////////////////////////
     /* page5 */
     // seamaster click 효과
     seamaster_close = function(){ // seamaster hidden close 변수화
        seamaster_click = 0;
        $('.seamaster-h-bt-box').css({'z-index':'0'});
        $('.seamaster-h-sidebox').stop().animate({'width':'0px','right':'120px'},300,function(){
            $(this).css({'right':'300px'});
        });
        $('.seamaster-hiddenbox').stop().animate({'width':'0px'},500,function(){
            watch_set();
            reverse_click = 0;
        });
        $('.seamaster-pagebt').css({'opacity':'0'});
    }

    seamaster_click = 0;
    $('.seamaster-infobox').click(function(){ // seamaster hidden opne
        if( seamaster_click == 0 ){
            seamaster_click = 1;
            $('.basic-arrow').fadeOut(500);
            $('.seamaster-hiddenbox').stop().animate({'width':'480px'},600,function(){
                $('.seamaster-h-sidebox').stop().animate({'width':'200px','right':'35px'},500,function(){
                    $('.seamaster-h-bt-box').css({'z-index':'99'});
                    $('.seamaster-pagebt').css({'opacity':'1'});
                });
            });
        }
        else if( seamaster_click == 1 ){
            $('.basic-arrow').fadeIn(500);
            seamaster_close();
            $('.seamaster-pagebt').css({'opacity':'0'});
        }
    });

    //wetsuit 효과 
    wetsuit_show = function(){ // 돌며 나타나기
        $('.wetsuit-box').stop().animate({rotate:'720deg'},2000);
        $('#wetsuit').stop().animate({'width':'100%','height':'100%'},2000);
        $('.wetsuit-wrap').stop().fadeIn(1000); // 잠수복 나타나기
        // seamaster-text 이징효과
        $('.seamaster-text-wrap').stop().fadeIn(300)
        $('.seamaster-text-box').stop().animate({'top':'0px'},800,'easeOutElastic');
    }
    wetsuit_hide = function(){ // 돌며 사라지기
        $('.seamaster-text-wrap').stop().fadeOut(500,function(){
            $('.seamaster-text-box').css({'top':'-469px'});
        });
        $('#wetsuit').stop().animate({'width':'0%','height':'0%'},800);
        $('.wetsuit-box').stop().animate({rotate:'0deg'},800,function(){
            $('.wetsuit-wrap').stop().fadeOut(800);
        });
    }
    //seamaster text hover 효과
    $('.seamaster-infobox').mouseenter(function(){
        $('#seamaster-text').css({'animation':'seamaster-text-ani 0.8s infinite linear alternate','animation-play-state':'running'});
    });
    $('.seamaster-infobox').mouseleave(function(){
        $('#seamaster-text').css({'animation-play-state':'paused'});
    });
    /* page5 end */
    /////////////////////////////////////////////////////
    /* page6 */
    $('.bubble-box').snowfall({
        flakeCount:'20',
        minSize:'1',
        maxSize:'50',
        maxSpeed:'10',
        round:true,
        image:'images/bubble.png'
    });	

    // turtle 효과
    turtle_ani = function(){
        $('.turtle-wrap').stop().animate({'right':'1950px','top':'150px'},5000);
        $('#turtle').animate({'width':'40%'},5000,function(){
            $('.turtle-wrap').css({'right':'-250px','top':'400px'});
            $('#turtle').css({'width':'100%'});
        });
        turtle_set = setInterval(function(){
            $('.turtle-wrap').stop().animate({'right':'1950px','top':'150px'},5000);
            $('#turtle').animate({'width':'40%'},5000,function(){
                $('.turtle-wrap').css({'right':'-250px','top':'400px'});
                $('#turtle').css({'width':'100%'});
            });
        },11000)
    }

    // whale 효과
    whale_ani = function(){ 
        $('.whale-wrap').animate({rotate:'-125deg'},7000,function(){
            $('#whale').css({'transform':'rotateY(180deg)'});
            $(this).delay(500).animate({rotate:'0deg'},7000,function(){
                $('#whale').css({'transform':'rotateY(0deg)'});
            });
        });
        whale_set = setInterval(function(){
            $('.whale-wrap').animate({rotate:'-125deg'},7000,function(){
                $('#whale').css({'transform':'rotateY(180deg)'});
                $(this).delay(500).animate({rotate:'0deg'},7000,function(){
                    $('#whale').css({'transform':'rotateY(0deg)'});
                });
            });
        },21000);
    }
    /* page6 end */
    /////////////////////////////////////////////////////
    /* page7 */
    sailing_video = $('.sailing-videowrap>video').get(0);
    $('.sailing-play-btbox').click(function(){ // sailing video play
        $('.omegasailing-text-wrap').css({'z-index':'0'});
        $('.sailing-text-box').stop().fadeOut(500);
        $('.sailing-play-btbox').stop().animate({'opacity':'0'},600,function(){
            $(this).hide();
        });
        $('.page7').css({'background-color':'rgba(0,0,0,0.7)'});
        $('.scroll-wrap').stop().animate({'opacity':'0'},500);
        sailing_video.play();
        sailing_video.volume = 0.2;
    });

    $('.sailing_video_close>img').click(function(){
        sailing_video.pause();
        sailing_video.currentTime=0;
        $('.omegasailing-text-wrap').css({'z-index':'99'});
        $('.sailing-text-box').stop().fadeIn(500);
        $('.page7').css({'background-color':'transparent'});
        $('.sailing-play-btbox').show().stop().animate({'opacity':'1'},500);
        $('.scroll-wrap').stop().animate({'opacity':'1'},500);
    });
    /* page7 end */
    /////////////////////////////////////////////////////
    /* page8 */
    // page8 main img set함수
    page8_main_imgset = function(){
        $('.page8-watch-imgbox>li:nth-child(1)').stop().fadeIn(300).siblings('.page8-watch-imgbox>li').stop().fadeOut(200); // page8 main 첫 이미지로 set
        $('.page8-watchimg-listbt>li:nth-child(1)').css({'border':'1px solid #c40d2e'}).siblings('.page8-watchimg-listbt>li').css({'border':'1px solid #ddd'}); // page8 main img list 테두리 set

        $('.page8-watch-imgbox-page>li').eq(page8_page_num).stop().fadeIn(300).siblings('.page8-watch-imgbox-page>li').stop().fadeOut(200); // page8 main 이미지 해당 페이지 보이기

        $('.page8-watchimg-listbox-page>li').eq(page8_page_num).stop().fadeIn(300).siblings('.page8-watchimg-listbox-page>li').stop().fadeOut(200); // page8 list 이미지 해당 페이지 보이기

        $('.page8-text-page>li').eq(page8_page_num).stop().fadeIn(300).siblings('.page8-text-page>li').stop().fadeOut(200); // page8 text 해당 페이지 보이기

        $('.page8-subtitle-box-page>li').eq(page8_page_num).stop().fadeIn(300).siblings('.page8-subtitle-box-page>li').stop().fadeOut(200); // page8 subtext 해당 페이지 보이기

        $('.page8-img-box-page>li').eq(page8_page_num).stop().fadeIn(300).siblings('.page8-img-box-page>li').stop().fadeOut(200); // page8 img box 해당 페이지 보이기
    };

    // page8 page bt click 이미지 변경
    page8_page_num = 0;
    $('.container-page-btbox>li').click(function(){
        page8_page_num = $(this).index();
        $(this).children().css({'border':'1px solid #212121','background-color':'transparent'});
        $(this).siblings().children().css({'border':'none','background-color':'#212121'}); // 버튼모양 바꾸기

        page8_main_imgset(); // page8 main img set
    });

    // main img list 버튼 효과
    $('.page8-watchimg-listbt>li').click(function(){
        page8_list_img = $(this).index();
        $(this).css({'border':'1px solid #c40d2e'}).siblings('.page8-watchimg-listbt>li').css({'border':'1px solid #ddd'});

        if( page8_page_num == 0 ){
            $('.page8-watch-imgbox1>li').eq(page8_list_img).stop().fadeIn(300).siblings('.page8-watch-imgbox1>li').stop().fadeOut(200); // page8 main 이미지 해당 이미지 보이기
        }
        if( page8_page_num == 1 ){
            $('.page8-watch-imgbox2>li').eq(page8_list_img).stop().fadeIn(300).siblings('.page8-watch-imgbox2>li').stop().fadeOut(200); // page8 main 이미지 해당 이미지 보이기
        }
        if( page8_page_num == 2 ){
            $('.page8-watch-imgbox3>li').eq(page8_list_img).stop().fadeIn(300).siblings('.page8-watch-imgbox3>li').stop().fadeOut(200); // page8 main 이미지 해당 이미지 보이기
        }
        if( page8_page_num == 3 ){
            $('.page8-watch-imgbox4>li').eq(page8_list_img).stop().fadeIn(300).siblings('.page8-watch-imgbox4>li').stop().fadeOut(200); // page8 main 이미지 해당 이미지 보이기
        }
    });

    // page8 page 좌우 버튼
    $('.container-page-prevbt').click(function(){ // prev bt
        page8_page_num = page8_page_num - 1;
        if( page8_page_num < 0 ){
            page8_page_num = 3;
        }

        $('.container-page-btbox>li').eq(page8_page_num).children().css({'border':'1px solid #212121','background-color':'transparent'}).parents('.container-page-btbox>li').siblings().children().css({'border':'none','background-color':'#212121'});

        page8_main_imgset(); // page8 main img set
    });

    $('.container-page-nextbt').click(function(){ // next bt
        page8_page_num = page8_page_num + 1;
        if( page8_page_num > 3 ){
            page8_page_num = 0;
        }

        $('.container-page-btbox>li').eq(page8_page_num).children().css({'border':'1px solid #212121','background-color':'transparent'}).parents('.container-page-btbox>li').siblings().children().css({'border':'none','background-color':'#212121'});

        page8_main_imgset(); // page8 main img set
    });

    // page8 autoslide , 좌우버튼
    page8_autoslide = function(){ // page8 오토슬라이드 실행 함수
        page8_img_slide = 0;
        page8_img_auto = setInterval(function(){
            page8_img_slide = page8_img_slide - 100;
            if( page8_img_slide < -400 ){
                page8_img_slide = 0
                $('.page8-img-box').css({'left':page8_img_slide+'%'});
                page8_img_slide = page8_img_slide - 100;
            }
            $('.page8-img-box').animate({'left':page8_img_slide+'%'},600);
        },3500); 
    }

    page8_bt_click = 0; // 클릭 중복 방지
    $('.page8-img-prevbt').click(function(){
        if( page8_bt_click == 0 ){
            page8_bt_click = 1;
            page8_img_slide = page8_img_slide + 100;
            if( page8_img_slide >= 0  ){ page8_img_slide = 0; }
            $('.page8-img-box').animate({'left':page8_img_slide+'%'},600,function(){
                page8_bt_click = 0;
            });
        }
    });
    $('.page8-img-nextbt').click(function(){
        if( page8_bt_click == 0 ){
            page8_bt_click = 1;
            page8_img_slide = page8_img_slide - 100;
            if( page8_img_slide <= -400  ){ page8_img_slide = -400; }
            $('.page8-img-box').animate({'left':page8_img_slide+'%'},600,function(){
                page8_bt_click = 0;
            });
        }
    });

    /* page8 end */
    /////////////////////////////////////////////////////
    /* page9 */
    // 커스터마이징 메뉴이미지 클릭시 색상변경
    $('#customizing-menu1').click(function(){
        $(this).children('img').attr('src','icons/speedmaster-red.png');
        $('#customizing-menu2').children('img').attr('src','icons/seamaster-gray.png');
        $('#customizing-menu3').children('img').attr('src','icons/constellation-gray.png');
        $('#customizing-menu4').children('img').attr('src','icons/deville-gray.png');
    });
    $('#customizing-menu2').click(function(){
        $(this).children('img').attr('src','icons/seamaster-red.png');
        $('#customizing-menu1').children('img').attr('src','icons/speedmaster-gray.png');
        $('#customizing-menu3').children('img').attr('src','icons/constellation-gray.png');
        $('#customizing-menu4').children('img').attr('src','icons/deville-gray.png');
    });
    $('#customizing-menu3').click(function(){
        $(this).children('img').attr('src','icons/constellation-red.png');
        $('#customizing-menu1').children('img').attr('src','icons/speedmaster-gray.png');
        $('#customizing-menu2').children('img').attr('src','icons/seamaster-gray.png');
        $('#customizing-menu4').children('img').attr('src','icons/deville-gray.png');
    });
    $('#customizing-menu4').click(function(){
        $(this).children('img').attr('src','icons/deville-red.png');
        $('#customizing-menu1').children('img').attr('src','icons/speedmaster-gray.png');
        $('#customizing-menu2').children('img').attr('src','icons/seamaster-gray.png');
        $('#customizing-menu3').children('img').attr('src','icons/constellation-gray.png');
    });

    $('.customizing-menu>li').click(function(){ // 해당 메뉴 클릭시 언더바 생기기
        $(this).children('.customizing-menu-bar').css({'width':'100%'});
        $(this).siblings().children('.customizing-menu-bar').css({'width':'0%'});
    });
    
    // 메뉴 클릭시 해당 시리즈 텍스트, 베젤,다이얼 보이기
    customizing_page = 0;
    $('.customizing-menu>li').click(function(){
        customizing_page = $(this).index();
        $('.customizing-series-textbox>li').eq(customizing_page).show().siblings().hide();
        $('.bezel-list-container>li').eq(customizing_page).show().siblings().hide();
        $('.dial-list-container>li').eq(customizing_page).show().siblings().hide();
        $('.customizing-view-fixedbox>li').eq(customizing_page).show().siblings().hide();

        customizing_submenu = 0;
        $('.customizing-submenu>li:nth-child(1)').css({'background-color':'#c40d2e','color':'#fff','font-weight':'300'}).siblings().css({'background-color':'transparent','color':'#a0a0a0','font-weight':'100'});
        $('.customizing-submenu-list>li:nth-child(1)').show().siblings().hide();

    });

    // 시리즈 텍스트 선택시 색상변경,화살표,해당 베젤 다이얼 이미지 변경
    series_page_num = 0;
    $('.customizing-series-text>li').click(function(){
        series_page_num = $(this).index();
        $(this).css({'color':'#212121','font-weight':'300','background':'url(icons/basic-arrow-s.png) right 20px top 10px no-repeat'}).siblings().css({'color':'#a0a0a0','font-weight':'100','background':'none'});

        customizing_submenu = 0;
        $('.customizing-submenu>li:nth-child(1)').css({'background-color':'#c40d2e','color':'#fff','font-weight':'300'}).siblings().css({'background-color':'transparent','color':'#a0a0a0','font-weight':'100'});
        $('.customizing-submenu-list>li:nth-child(1)').show().siblings().hide();

        if( customizing_page == 0 ){
            $('.speedmaster-bezel-list-box>li').eq(series_page_num).show().siblings().hide();
            $('.speedmaster-dial-list-box>li').eq(series_page_num).show().siblings().hide();
            $('.speedmaster-serise-page>li').eq(series_page_num).show().siblings().hide();
        }
        if( customizing_page == 1 ){
            $('.seamaster-bezel-list-box>li').eq(series_page_num).show().siblings().hide();
            $('.seamaster-dial-list-box>li').eq(series_page_num).show().siblings().hide();
            $('.seamaster-serise-page>li').eq(series_page_num).show().siblings().hide();
        }
        if( customizing_page == 2 ){
            $('.constellation-bezel-list-box>li').eq(series_page_num).show().siblings().hide();
            $('.constellation-dial-list-box>li').eq(series_page_num).show().siblings().hide();
            $('.constellation-serise-page>li').eq(series_page_num).show().siblings().hide();
        }
        if( customizing_page == 3 ){
            $('.deville-bezel-list-box>li').eq(series_page_num).show().siblings().hide();
            $('.deville-dial-list-box>li').eq(series_page_num).show().siblings().hide();
            $('.deville-serise-page>li').eq(series_page_num).show().siblings().hide();
        }
       
    });

    // 베젤,다이얼 리스트 선택시 fixed 이미지 변경
    // speedmaster 시리즈별 다이얼,베젤 픽스드이미지 변경
    moonwatch_list_num = 0;
    $('.moonwatch-listimg>li').click(function(){
        moonwatch_list_num = $(this).index();
        if( customizing_page == 0 && customizing_submenu == 0 ){
            $('.moonwatch-bezel-fixed-list>li').eq(moonwatch_list_num).show().siblings().hide();
        }
        else if( customizing_page == 0 && customizing_submenu == 1 ){
            $('.moonwatch-dial-fixed-list>li').eq(moonwatch_list_num).show().siblings().hide();
        }
    });

    heritage_list_num = 0;
    $('.heritage-listimg>li').click(function(){
        heritage_list_num = $(this).index();
        if( customizing_page == 0 && customizing_submenu == 0 ){
            $('.heritage-bezel-fixed-list>li').eq(heritage_list_num).show().siblings().hide();
        }
        else if( customizing_page == 0 && customizing_submenu == 1 ){
            $('.heritage-dial-fixed-list>li').eq(heritage_list_num).show().siblings().hide();
        }
    });

    dark_list_num = 0;
    $('.dark-listimg>li').click(function(){
        dark_list_num = $(this).index();
        if( customizing_page == 0 && customizing_submenu == 0 ){
            $('.dark-bezel-fixed-list>li').eq(dark_list_num).show().siblings().hide();
        }
        else if( customizing_page == 0 && customizing_submenu == 1 ){
            $('.dark-dial-fixed-list>li').eq(dark_list_num).show().siblings().hide();
        }
    });

    // seamaster 시리즈별 다이얼,베젤 픽스드이미지 변경
    diver_list_num = 0;
    $('.diver-listimg>li').click(function(){
        diver_list_num = $(this).index();
        if( customizing_page == 1 && customizing_submenu == 0 ){
            $('.diver-bezel-fixed-list>li').eq(diver_list_num).show().siblings().hide();
        }
        else if( customizing_page == 1 && customizing_submenu == 1 ){
            $('.diver-dial-fixed-list>li').eq(diver_list_num).show().siblings().hide();
        }
    });

    planet_list_num = 0;
    $('.planet-listimg>li').click(function(){
        planet_list_num = $(this).index();
        if( customizing_page == 1 && customizing_submenu == 0 ){
            $('.planet-bezel-fixed-list>li').eq(planet_list_num).show().siblings().hide();
        }
        else if( customizing_page == 1 && customizing_submenu == 1 ){
            $('.planet-dial-fixed-list>li').eq(planet_list_num).show().siblings().hide();
        }
    });

    aqua_list_num = 0;
    $('.aqua-listimg>li').click(function(){
        aqua_list_num = $(this).index();
        if( customizing_page == 1 && customizing_submenu == 0 ){
            $('.aqua-bezel-fixed-list>li').eq(aqua_list_num).show().siblings().hide();
        }
        else if( customizing_page == 1 && customizing_submenu == 1 ){
            $('.aqua-dial-fixed-list>li').eq(aqua_list_num).show().siblings().hide();
        }
    });

    // constellation 시리즈별 다이얼,베젤 픽스드이미지 변경
    globe_list_num = 0;
    $('.globe-listimg>li').click(function(){
        globe_list_num = $(this).index();
        if( customizing_page == 2 && customizing_submenu == 0 ){
            $('.globe-bezel-fixed-list>li').eq(globe_list_num).show().siblings().hide();
        }
        else if( customizing_page == 2 && customizing_submenu == 1 ){
            $('.globe-dial-fixed-list>li').eq(globe_list_num).show().siblings().hide();
        }
    });

    cons_list_num = 0;
    $('.cons-listimg>li').click(function(){
        cons_list_num = $(this).index();
        if( customizing_page == 2 && customizing_submenu == 0 ){
            $('.cons-bezel-fixed-list>li').eq(cons_list_num).show().siblings().hide();
        }
        else if( customizing_page == 2 && customizing_submenu == 1 ){
            $('.cons-dial-fixed-list>li').eq(cons_list_num).show().siblings().hide();
        }
    });

    // deville 시리즈별 다이얼,베젤 픽스드이미지 변경
    tresor_list_num = 0;
    $('.tresor-listimg>li').click(function(){
        tresor_list_num = $(this).index();
        if( customizing_page == 3 && customizing_submenu == 0 ){
            $('.tresor-bezel-fixed-list>li').eq(tresor_list_num).show().siblings().hide();
        }
        else if( customizing_page == 3 && customizing_submenu == 1 ){
            $('.tresor-dial-fixed-list>li').eq(tresor_list_num).show().siblings().hide();
        }
    });

    prestige_list_num = 0;
    $('.prestige-listimg>li').click(function(){
        prestige_list_num = $(this).index();
        if( customizing_page == 3 && customizing_submenu == 0 ){
            $('.prestige-bezel-fixed-list>li').eq(prestige_list_num).show().siblings().hide();
        }
        else if( customizing_page == 3 && customizing_submenu == 1 ){
            $('.prestige-dial-fixed-list>li').eq(prestige_list_num).show().siblings().hide();
        }
    });

    // 스트랩 리스트 선택시 fixed 이미지 변경
    strap_list_num = 0;
    $('.customizing-submenu-listimg>li').click(function(){
        strap_list_num = $(this).index();
        if( customizing_submenu == 2 ){
            $('.customizing-strap-view-fixed-box>li').eq(strap_list_num).show().siblings().hide();
        }
    });
    // 서브메뉴 클릭 하이라이트효과, 해당 페이지 보이기
    customizing_submenu = 0;
    $('.customizing-submenu>li').click(function(){
        customizing_submenu = $(this).index();
        $(this).css({'background-color':'#c40d2e','color':'#fff','font-weight':'300'}).siblings().css({'background-color':'transparent','color':'#a0a0a0','font-weight':'100'});
        $('.customizing-submenu-list>li').eq(customizing_submenu).show().siblings().hide();
    });

    // 서브메뉴리스트 이미지 클릭시 바탕화면색상 변경
    $('.customizing-submenu-listimg>li').click(function(){
        $(this).css({'background-color':'#fff'}).siblings().css({'background-color':'transparent'});
    });

    // 서브메뉴리스트 스크롤 드래그
    $('.strap-dragbt').draggable({
        axis:'x',
        containment:'.strap-scroll-box',
        drag:function(e){
            drag_x = 1382 - $('.strap-dragbt').offset().left;
            $('.strap-list-box>ul').css({'left': drag_x*1.18 + 'px' });
        },
    });

    // drag bt 효과
    $('.strap-drag-center').animate({scale:'2'},1000,function(){
        $(this).animate({scale:'1'},800);
    });
    setInterval(function(){
        $('.strap-drag-center').animate({scale:'2'},1000,function(){
            $(this).animate({scale:'1'},800);
        });
    },1820);
    
    // reset bt 효과
    $('.customizing-reset-bt').mousedown(function(){
        $(this).css({'box-shadow':'inset 3px 3px 3px rgba(0,0,0,0.5)','color':'#fff','background-color':'#c40d2e'}).children('img').attr('src','icons/reset-bt-w.png');
    });
    $('.customizing-reset-bt').mouseup(function(){
        $(this).css({'box-shadow':'5px 5px 13px rgba(0,0,0,0.2)','color':'#212121','background-color':'#fff'}).children('img').attr('src','icons/reset-bt-b.png');
    });
    $('.customizing-reset-bt').mouseout(function(){
        $(this).css({'box-shadow':'5px 5px 13px rgba(0,0,0,0.2)','color':'#212121','background-color':'#fff'}).children('img').attr('src','icons/reset-bt-b.png');
    });

    $('.customizing-reset-bt').click(function(){
        $('.customizing-strap-view-fixed-box>li:nth-child(1)').show().siblings().hide();
        $('.parts>li:nth-child(1)').show().siblings().hide();
        $('.customizing-submenu-listimg>li:nth-child(1)').css({'background-color':'#fff'}).siblings().css({'background-color':'transparent'});
    });
    /* page9 end */
    /////////////////////////////////////////////////////
    /* page10 */
    // magazine popup video 설정
    magazine_video1 = $('.magazine-img1-popup>video').get(0);
    $('.magazine-img1-box').click(function(){
        $('.magazine-img1-popup-wrap').stop().fadeIn(600);
        magazine_video1.play();
        magazine_video1.volume = 0.2;
    });
    $('.magazine-popup-close').click(function(){
        $('.magazine-img1-popup-wrap').stop().fadeOut(400);
        magazine_video1.pause();
        magazine_video1.currentTime=0;
    });
    /* page10 end */
    /////////////////////////////////////////////////////
    /* page11 */
    // 뉴스 메뉴 클릭 효과
    news_menu_list = 0;
    $('.news-menu>li').click(function(){
        news_menu_list = $(this).index();
        $(this).children('p').children('.news-menu-bar').css({'width':'100%'});
        $(this).siblings('li').children('p').children('.news-menu-bar').css({'width':'0%'});
        $(this).children('p').css({'color':'#212121'}).parents('li').siblings('li').children('p').css({'color':'#a0a0a0'});
        $('.news-slide').css({'left': 0 });
        $('.news-slide-bar').css({'left': 0 });
        $('.news-slide-box>li').eq(news_menu_list).stop().fadeIn(500).siblings().stop().fadeOut(300);
    });

    // 뉴스 슬라이드
    var news_x,news_left;
    $('.news-slide-box>li').mousemove(function(e){
        news_x = e.pageX;
        news_left = 700 - $(this).scrollLeft();
        if( news_x <= 700 ){ 
            news_x = 700; 
        }
        else if( news_x >= 1685 ){ 
            news_x = 1685; 
        }
        $('.news-slide').css({'left': (news_left - news_x)*1.5 });
        $('.news-slide-bar').css({'left': (news_x - news_left)*0.72 });
    });
    /* page11 end */
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
    /* footer  end */
    /////////////////////////////////////////////////////
    /* top,bottom bt */
    // text 효과
    $('.top-bt-text>li:nth-child(1)').animate({'opacity':'1'},2000,function(){
        $('.top-bt-text>li:nth-child(1)').animate({'opacity':'0'},2000);
    });
    $('.top-bt-text>li:nth-child(2)').animate({'opacity':'0'},2000,function(){
        $('.top-bt-text>li:nth-child(2)').animate({'opacity':'1'},2000);
    });
    setInterval(function(){
        $('.top-bt-text>li:nth-child(1)').animate({'opacity':'1'},2000,function(){
            $('.top-bt-text>li:nth-child(1)').animate({'opacity':'0'},2000);
        });
        $('.top-bt-text>li:nth-child(2)').animate({'opacity':'0'},2000,function(){
            $('.top-bt-text>li:nth-child(2)').animate({'opacity':'1'},2000);
        });
    },4020);

    // text1,2 나타나기 효과
    $('.top-bt-wrap').mouseenter(function(){
        $('.top-bt-text').stop().fadeOut(300);
        $('.top-bt-text2').stop().fadeIn(500);
    });
    $('.top-bt-wrap').mouseleave(function(){
        $('.top-bt-text').stop().fadeIn(500);
        $('.top-bt-text2').stop().fadeIn(300);
    });

    // 해당 버튼 효과
    $('.top-bt').mouseenter(function(){
        $('.top-bt-line').css({'top':'0'});
        $('.top-bt-arrow').css({'width':'50px'});
        $('.bottom-bt-line').css({'bottom':'0'});
        $('.bottom-bt-arrow').css({'width':'0px'});
        $('.top-bt-text2>li:nth-child(1)').stop().animate({'top':'140px','opacity':'1'},300);
        $('.top-bt-text2>li:nth-child(2)').stop().animate({'top':'0px','opacity':'0'},300);
    });
    $('.top-bt').mouseleave(function(){
        $('.top-bt-line').css({'top':'20px'});
        $('.top-bt-arrow').css({'width':'78px'});
        $('.bottom-bt-line').css({'bottom':'20px'});
        $('.bottom-bt-arrow').css({'width':'78px'});
        $('.top-bt-text2>li:nth-child(1)').stop().animate({'top':'0px','opacity':'0'},300);
        $('.top-bt-text2>li:nth-child(2)').stop().animate({'top':'0px','opacity':'0'},300);
    });

    $('.bottom-bt').mouseenter(function(){
        $('.top-bt-line').css({'top':'0'});
        $('.top-bt-arrow').css({'width':'0px'});
        $('.bottom-bt-line').css({'bottom':'0'});
        $('.bottom-bt-arrow').css({'width':'50px'});
        $('.top-bt-text2>li:nth-child(2)').stop().animate({'top':'-140px','opacity':'1'},300);
        $('.top-bt-text2>li:nth-child(1)').stop().animate({'top':'0px','opacity':'0'},300);
    });
    $('.bottom-bt').mouseleave(function(){
        $('.top-bt-line').css({'top':'20px'});
        $('.top-bt-arrow').css({'width':'78px'});
        $('.bottom-bt-line').css({'bottom':'20px'});
        $('.bottom-bt-arrow').css({'width':'78px'});
        $('.top-bt-text2>li:nth-child(1)').stop().animate({'top':'0px','opacity':'0'},300);
        $('.top-bt-text2>li:nth-child(2)').stop().animate({'top':'0px','opacity':'0'},300);
    });

    // 클릭 효과
    $('.top-bt').click(function(){ // 해당 스크롤로 이동
        $('body,html').animate({'scrollTop':'0'},1500);
        $('.sea-beach-wrap').css({'top':'850px','opacity':'1'});
        $('.customizing-wrap').css({'opacity':'0'});
        $('.scroll-bg1,.scroll-bg2').css({'background-color':'#fff'});
        $('.scroll-text').css({'color':'#fff'});
        $('.moon-box').hide();
        $('.scroll-wrap').fadeIn(300);
    });
    $('.bottom-bt').click(function(){ // 해당 스크롤로 이동
        $('body,html').animate({'scrollTop':'9370'},1500);
        $('.sea-beach-wrap').css({'top':'-6000px','opacity':'0'});
        $('.customizing-wrap').css({'opacity':'1'});
        $('.scroll-bg1,.scroll-bg2').css({'background-color':'#212121'});
        $('.scroll-text').css({'color':'#212121'});
        $('.moon-box').show();
        $('.scroll-wrap').fadeOut(300);
    });
    /* top,bottom bt end */
    /////////////////////////////////////////////////////
    /* page2~ 효과*/
    // moon,panorama point arrow 효과
    setInterval(function(){
        $('.basic-arrow-glow').animate({'margin-top':'30px','opacity':'1'},800,function(){
            $(this).animate({'opacity':'0'},800,function(){
                $(this).css({'margin-top':'0px'});
            });
        });
    },2000);
    
    // 달,텍스트이미지 효과
    $('#constellation-text-glow').stop().animate({'opacity':'1'},1000,function(){ // // 해당 텍스트이미지 효과
        $(this).stop().animate({'opacity':'0'},1000);
    });
    setInterval(function(){
        $('#constellation-text-glow').stop().animate({'opacity':'1'},999,function(){
            $(this).stop().animate({'opacity':'0'},999);
        });
    },2000);

    $('#deville-text-glow').stop().animate({'opacity':'0'},1000,function(){ // 해당 텍스트이미지 효과
        $(this).stop().animate({'opacity':'1'},1000);
    });
    setInterval(function(){
        $('#deville-text-glow').stop().animate({'opacity':'0'},999,function(){
            $(this).stop().animate({'opacity':'1'},999);
        });
    },2000);

    $('#speedmaster-text-glow').stop().animate({'opacity':'1'},1000,function(){ // 해당 텍스트이미지 효과
        $(this).stop().animate({'opacity':'0'},1000);
    });
    setInterval(function(){
        $('#speedmaster-text-glow').stop().animate({'opacity':'1'},999,function(){
            $(this).stop().animate({'opacity':'0'},999);
        });
    },2000);

    // 스크롤 효과
    sc_age = 0; // 스크롤반응 중복방지
    $(window).scroll(function(){

        /* scrollTop */
        sc=$(window).scrollTop();
        $('#sc').text(sc);
        /* scrollTop end */
        /////////////////////////////////////////////////////
        /* moon */
        // page2 달, 글씨 효과
        if( sc >= $('.page2').offset().top && sc_age == 0 ){ 
            sc_age = sc_age + 1;
            $('.moon-box').stop().fadeIn(600,function(){
                $('.black-moon-box').stop().animate({'left':'20%','bottom':'20%'},2500); // 달 그림자 이동
                $('.balck-moon').stop().animate({'width':'88%','height':'88%'},2500);
                $('.constellation-text-box').stop().fadeIn(800); // constellation-text 나타남
            });
            clearInterval(page1_auto);
        }
        else if( sc < $('.page2').offset().top && sc_age == 1 ){ 
            sc_age = sc_age - 1;
            page1_autoslide();
            $('.moon-box').stop().fadeOut(600);
            $('.black-moon-box').stop().animate({'left':'-2%','bottom':'-4%'},1000);
            $('.balck-moon').show().stop().animate({'width':'100%','height':'100%'},1000);
            $('.constellation-text-box').stop().fadeOut(800); // constellation-text 사라짐
        }

        // page3 달, 글씨 효과
        if( sc >= $('.page3').offset().top && sc_age == 1 ){
            sc_age = sc_age + 1;
            $('.constellation-text-box').stop().fadeOut(800); // constellation-text 사라짐
            $('.black-moon-box').stop().animate({'left':'65%','bottom':'65%'},2500); // 달 그림자 이동
            $('.balck-moon').stop().animate({'width':'70%','height':'70%'},2500,function(){
                $(this).hide();
            });
            $('.deville-text-box').stop().fadeIn(800); // deville-text 나타남
        }
        else if( sc < $('.page3').offset().top && sc_age == 2 ){
            sc_age = sc_age - 1;
            $('.deville-text-box').stop().fadeOut(800); // deville-text 사라짐
            $('.balck-moon').show().stop().animate({'width':'88%','height':'88%'},1000);
            $('.black-moon-box').stop().animate({'left':'20%','bottom':'20%'},1000);
            $('.constellation-text-box').stop().fadeIn(800); // constellation-text 반대 스크롤에도 나타남
        }

        // page4 글씨, 시계 효과
        if( sc >= $('.page4').offset().top && sc_age == 2 ){
            sc_age = sc_age + 1;
            $('.balck-moon').hide();
            $('.moon-box').stop().animate({'top':'220px'},1000); // 달 올라가며 바다물결 나타남
            $('.wave-bg-wrap').stop().fadeIn(1000);
            $('#wave-bg').stop().animate({'margin-top':'80px'},1000);
            $('.constellation-text-box').stop().fadeOut(800); // constellation-text 사라짐
            $('.deville-text-box').stop().fadeOut(800); // deville-text 사라짐
            $('.speedmaster-text-box').stop().fadeIn(1500); // speedmaster-text 나타남
            $('.speedmaster-text-imgbox').stop().animate({'margin-left':'230px'},1500);
            $('.page4-text-rightbox').css({'opacity':'1'});
        }
        else if( sc < $('.page4').offset().top && sc_age == 3 ){
            sc_age = sc_age - 1;
            $('.moon-box').stop().animate({'top':'320px'},800);
            $('.wave-bg-wrap').stop().fadeOut(800);
            $('#wave-bg').stop().animate({'margin-top':'0px'},800);
            $('.speedmaster-text-box').stop().fadeOut(800); // speedmaster-text 사라짐
            $('.speedmaster-text-imgbox').stop().animate({'margin-left':'0px'},800);
            $('.deville-text-box').stop().fadeIn(800); // deville-text 반대 스크롤에도 나타남
            speedmaster_close(); //speedmaster hidden close
            $('.basic-arrow').fadeIn(500);
            $('.page4-text-rightbox').css({'opacity':'0'});
        }
        /* moon end */
        /////////////////////////////////////////////////////
        /* panorama */
        if( sc >= $('.page5').offset().top && sc_age == 3 ){ 
            sc_age = sc_age + 1;
            speedmaster_close(); //speedmaster hidden close
            wetsuit_show(); // wetsuit 핑그르르 돌며 나타나기 (텍스트이미지도 같이)
            $('.speedmaster-text-box').stop().fadeOut(800); // speedmaster-text 사라짐
            $('.speedmaster-text-imgbox').stop().animate({'margin-left':'0px'},800);
            $('.moon-box').stop().animate({'top':'300px'},1000); // moon 사라지기
            $('.moon').stop().fadeOut(1000);
            $('#wave-bg').stop().animate({'margin-top':'0px'},1000);
            $('.wave-bg-wrap').stop().fadeOut(1000);
            $('.sea-beach-wrap').stop().animate({'top':'350px'},1000); // 바다 이미지 전환
            $('.basic-arrow').fadeIn(500);
        }
        else if( sc < $('.page5').offset().top && sc_age == 4 ){ 
            sc_age = sc_age - 1;
            wetsuit_hide(); // wetsuit 핑그르르 돌며 사라지기 (텍스트이미지도 같이)
            $('.moon').stop().fadeIn(800)
            $('.moon-box').stop().animate({'top':'220px'},800);
            $('.wave-bg-wrap').stop().fadeIn(800);
            $('#wave-bg').stop().animate({'margin-top':'80px'},800);
            $('.sea-beach-wrap').stop().animate({'top':'850px'},800); // 바다 이미지 전환
            $('.speedmaster-text-box').stop().fadeIn(1500); // speedmaster-text 나타남
            $('.speedmaster-text-imgbox').stop().animate({'margin-left':'230px'},1500);
            seamaster_close();
            $('.basic-arrow').fadeIn(500);
        }

        // 바닷속 img animate 효과
        if( sc >= $('.page6').offset().top && sc_age == 4 ){ 
            sc_age = sc_age + 1;
            seamaster_close();
            turtle_ani(); // turtle 효과 적용
            whale_ani(); // whale 효과 적용
            $('.seamaster-text-wrap').stop().fadeOut(300,function(){
                $('.seamaster-text-box').css({'top':'-469px'});
            });
            $('.turtle-container,#whale').stop().animate({'opacity':'1'},500);
            $('.sea-beach-wrap').stop().animate({'top':'-800px'},1000);
            $('.bubble-box').delay(500).fadeIn(500);
            $('#wetsuit').stop().animate({'width':'50%','height':'50%'},1000,function(){
                $('.page6-imgbox>ul>li:nth-child(1)').css({'left':'-785px','width':'413px','height':'564px'});
                $('.page6-imgbox>ul>li:nth-child(2)').css({'right':'-785px','width':'413px','height':'564px'});
                $('.page6-imgtext').stop().fadeIn(800,function(){
                    $('.page6-imgtext>h3').css({'opacity':'1','bottom':'0px'});
                });
            });
            $('.wetsuit-movebox').css({'animation':'wetsuit-ani 1.5s infinite cubic-bezier(0.41, 0.08, 0.72, 0.98) alternate'});
            $('.basic-arrow').fadeIn(500);
        }
        else if( sc < $('.page6').offset().top && sc_age == 5 ){ 
            sc_age = sc_age - 1;
            clearInterval(turtle_set);
            clearInterval(whale_set);
            $('.turtle-container,#whale').stop().animate({'opacity':'0'},500);
            $('.bubble-box').delay(500).fadeOut(300);
            $('#wetsuit').stop().animate({'width':'100%','height':'100%'},800);
            $('.wetsuit-movebox').css({'animation':'none'});

            // seamaster-text 이징효과
            $('.seamaster-text-wrap').stop().fadeIn(300);
            $('.seamaster-text-box').stop().animate({'top':'0px'},800,'easeOutElastic');
            $('.sea-beach-wrap').stop().animate({'top':'350px'},800);
            $('.basic-arrow').fadeIn(500);
            $('.page6-imgbox>ul>li:nth-child(1)').css({'left':'0','width':'0','height':'0'});
            $('.page6-imgbox>ul>li:nth-child(2)').css({'right':'0','width':'0','height':'0'});
            $('.page6-imgtext').stop().fadeOut(500);
            $('.page6-imgtext>h3').css({'opacity':'0','bottom':'-30px'});
        }

        if( sc >= $('.page7').offset().top && sc_age == 5 ){ 
            sc_age = sc_age + 1;
            clearInterval(turtle_set);
            clearInterval(whale_set);
            $('.page6-imgbox>ul>li:nth-child(1)').css({'opacity':'0'});
            $('.page6-imgbox>ul>li:nth-child(2)').css({'opacity':'0'});
            $('.page6-imgtext>h3').css({'opacity':'0'});
            $('.seamaster-text-wrap').stop().fadeOut(300,function(){
                $('.seamaster-text-box').css({'top':'-469px'});
            });
            $('.turtle-container,#whale').stop().animate({'opacity':'0'},500);
            $('.wetsuit-wrap').stop().fadeOut(800);
            $('.sea-beach-wrap').stop().animate({'top':'-2600px'},900,function(){
                $('.omegasailing-text-box').stop().fadeIn(850,function(){
                    $(this).stop().animate({'width':'400px'},800);
                    $('.sailing-videowrap,.sailing-play-btbox').stop().fadeIn(2500);
                });
                $('.sailing-wrap').stop().animate({'left':'1920px'},4000,'easeOutQuad');
            });
            $('.basic-arrow').fadeIn(500);
            $('.moon-wrap').css({'background-color':'#fff'});
            $('.sailing-text-box').stop().fadeIn(3800,function(){
                $(this).stop().animate({'right':'160px'},400);
            })
        }
        else if( sc < $('.page7').offset().top && sc_age == 6 ){ 
            sc_age = sc_age - 1;
            turtle_ani(); // turtle 효과 적용
            whale_ani(); // whale 효과 적용
            $('.turtle-container,#whale').stop().animate({'opacity':'1'},500);
            $('.sea-beach-wrap').stop().animate({'top':'-800px'},800);
            $('.wetsuit-wrap').stop().fadeIn(500,function(){
                $('.page6-imgbox>ul>li:nth-child(1)').css({'opacity':'1'});
                $('.page6-imgbox>ul>li:nth-child(2)').css({'opacity':'1'});
                $('.page6-imgtext>h3').css({'opacity':'1'});
            });
            $('.basic-arrow').fadeIn(500);
            $('.omegasailing-text-box').stop().fadeOut(300,function(){
                $(this).css({'width':'0px'});
            });
            $('.sailing-wrap').css({'left':'-430px'});
            $('.moon-wrap').css({'background-color':'#000'});
            $('.sailing-videowrap,.sailing-play-btbox').stop().fadeOut(500);
            $('.sailing-text-box').stop().animate({'right':'-320px','opacity':'0'},500,function(){
                $(this).css({'opacity':'1'}).hide();
            });
            sailing_video.pause();
            sailing_video.currentTime=0;
            $('.sailing-play-btbox').css({'opacity':'1'});
            $('.page7').css({'background-color':'transparent'});
            $('.omegasailing-text-wrap').css({'z-index':'99'});
            $('.scroll-wrap').stop().animate({'opacity':'1'},500);
        }

        if( sc >= $('.page8').offset().top && sc_age == 6 ){ 
            sc_age = sc_age + 1;
            $('.page8-bg-box').animate({'opacity':'1'},500,function(){
                $('.planet-ocean-title').animate({'opacity':'1'},600);
                $('.container-page-btbox>li').animate({'margin':'0 5px','opacity':'1'},400,function(){
                    $('.container-page-prevbox,.container-page-nextbox').animate({'opacity':'1'},500);
                });
                $('.page8-leftbox').animate({'margin':'0'},800);
                $('.page8-rightbox').animate({'margin':'0'},800,function(){
                    page8_autoslide();
                });
            });
            $('.sea-beach-wrap').animate({'top':'-4300px'},1000);
            $('.sailing-wrap').css({'left':'-430px'});
            $('.sailing-videowrap,.sailing-play-btbox,.sailing-text-box').fadeOut(500);
            sailing_video.pause();
            sailing_video.currentTime=0;
            $('.sailing-play-btbox').css({'opacity':'1'});
            $('.page7').css({'background-color':'transparent'});
            $('.omegasailing-text-wrap').css({'z-index':'99'});
            $('.scroll-wrap').animate({'opacity':'1'},500);

            // top,bottom bt 색상 변경
            $('.top-bt-line').css({'border-left':'1px solid #212121'});
            $('.top-bt-arrow').css({'border-top':'1px solid #212121'});
            $('.bottom-bt-line').css({'border-left':'1px solid #212121'});
            $('.bottom-bt-arrow').css({'border-bottom':'1px solid #212121'});
            $('.top-bt-text>li').css({'color':'#212121'});
            $('.top-bt-text2>li').css({'color':'#212121'});
        }
        else if( sc < $('.page8').offset().top && sc_age == 7 ){ 
            sc_age = sc_age - 1;
            clearInterval(page8_img_auto);
            $('.page8-leftbox').fadeOut(300,function(){
                $(this).show().css({'margin-left':'-50%'});
            });
            $('.page8-rightbox').fadeOut(300,function(){
                $(this).show().css({'margin-right':'-50%'});
            });
            $('.container-page-btbox>li').animate({'margin':'0 17px','opacity':'0'},300);
            $('.container-page-prevbox,.container-page-nextbox').animate({'opacity':'0'},300);
            $('.page8-bg-box').stop().animate({'opacity':'0'},300);
            $('.sea-beach-wrap').stop().animate({'top':'-2600px'},500,function(){
                $('.sailing-videowrap,.sailing-play-btbox,.sailing-text-box').stop().fadeIn(800);
            });
            $('.planet-ocean-title').stop().animate({'opacity':'0'},600);

            // top,bottom bt 색상 변경
            $('.top-bt-line').css({'border-left':'1px solid #fff'});
            $('.top-bt-arrow').css({'border-top':'1px solid #fff'});
            $('.bottom-bt-line').css({'border-left':'1px solid #fff'});
            $('.bottom-bt-arrow').css({'border-bottom':'1px solid #fff'});
            $('.top-bt-text>li').css({'color':'#fff'});
            $('.top-bt-text2>li').css({'color':'#fff'});
        }
        /* panorama end */
        /* customizing */
        if( sc >= $('.page9').offset().top && sc_age == 7 ){ 
            sc_age = sc_age + 1;
            clearInterval(page8_img_auto);
            $('.sea-beach-wrap').animate({'top':'-6000px'},800);
            $('.scroll-wrap').animate({'opacity':'0'},500,function(){
                $(this).animate({'opacity':'1'});
                $('.scroll-bg1,.scroll-bg2').css({'background-color':'#212121'});
                $('.scroll-text').css({'color':'#212121'});
            });
            $('.customizing-wrap').animate({'opacity':'1'},800);
        }
        else if( sc < $('.page9').offset().top && sc_age == 8 ){ 
            sc_age = sc_age - 1;
            page8_autoslide();
            $('.sea-beach-wrap').animate({'top':'-4300px','opacity':1},300);
            $('.scroll-wrap').animate({'opacity':'0'},300,function(){
                $(this).animate({'opacity':'1'});
                $('.scroll-bg1,.scroll-bg2').css({'background-color':'#fff'});
                $('.scroll-text').css({'color':'#fff'});
            });
            $('.customizing-wrap').animate({'opacity':'0'},300);
        }
        /* customizing end */
        /* magazine */
        if( sc >= $('.page10').offset().top && sc_age == 8 ){
            sc_age = sc_age + 1;
            $('.sea-beach-wrap').animate({'top':'-6000px'},800);
            $('.scroll-wrap').animate({'opacity':'0'},500,function(){
                $(this).animate({'opacity':'1'});
                $('.scroll-bg1,.scroll-bg2').css({'background-color':'#212121'});
                $('.scroll-text').css({'color':'#212121'});
            });
            $('.magazine-img1-box').animate({'top':'150px','opacity':'1'},500,function(){
                $('.magazine-img1-text').animate({'opacity':'1'},800);
                $('.magazine-img2-box').animate({'left':'290px','opacity':'1'},800,function(){
                    $('.magazine-img2-text').animate({'bottom':'95px','opacity':'1'},500);
                });
                $('.magazine-img3-box').animate({'right':'294px','opacity':'1'},800,function(){
                    $('.magazine-img3-text').animate({'top':'255px','opacity':'1'},500);
                });
            });
        }
        else if( sc < $('.page10').offset().top && sc_age == 9 ){ 
            sc_age = sc_age - 1;
            $('.customizing-wrap').animate({'opacity':'1'},300);
            $('.magazine-img1-box').animate({'top':'250px','opacity':'0'},300);
            $('.magazine-img1-text').animate({'opacity':'0'},300);
            $('.magazine-img2-box').animate({'left':'190px','opacity':'0'},300);
            $('.magazine-img2-text').animate({'bottom':'0px','opacity':'0'},300);
            $('.magazine-img3-box').animate({'right':'194px','opacity':'0'},300);
            $('.magazine-img3-text').animate({'top':'155px','opacity':'0'},300);
        }
        /* magazine end */
        /* news */
        if( sc >= $('.page11').offset().top && sc_age == 9 ){
            sc_age = sc_age + 1;
            $('.news-menu-box').animate({'opacity':'1'},700);
            $('.news-slide-wrap').animate({'opacity':'1','right':'0'},700);
            $('.news-slide-bar').animate({'opacity':'1','left':'0'},700);
            $('.scroll-wrap').fadeOut(300);
            ft_img_loop();
        }
        else if( sc < $('.page11').offset().top && sc_age == 10 ){ 
            sc_age = sc_age - 1;
            clearInterval(ft_img_auto);
            $('.news-menu-box').animate({'opacity':'0'},300);
            $('.news-slide-wrap').animate({'opacity':'0','right':'-100%'},300);
            $('.news-slide-bar').animate({'opacity':'0','left':'1411px'},300);
            $('.scroll-wrap').fadeIn(300);
        }
        /* news end */

    });
    /* page2~ end */  

}); //전체괄호