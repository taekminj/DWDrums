$(document).ready(function() {
    customSlider('.detailSlider',500,50,true,3,false,true,'.nextBtn','.prevBtn',0,true,'.newPager');
    customSlider('.drumSlider',320,0,true,5,false,true,'.nextBtn','.prevBtn',0,true,'.newPager');
    customSlider('.woodsSlider',300,25,true,5,false,true,'.woodsNextBtn','.woodsPrevBtn',0,true,'.woodsNewPager');
    customSlider('.sscSlider',272,25,true,5,false,true,'.sscNextBtn','.sscPrevBtn',1,false);
    customSlider('.storiesSlider',500,50,true,3,false,true,'.nextBtn','.prevBtn',0,true,'.newPager');

    controlVideo();
    overMouse();
    subScribe();
    searchPanel();
    videoPlay();
    changeRow();
    thumbnailImageChange();
    slideToggle();
    panelControl();
    panelFinish();
    softwareSlide();
    changeTapMenu();
    thumbSlide();
    fancySlide();
    changeShellSize();
    autoFadeSlide();
    passwordProcess();
    popupProcess();
    accountMenu();
    orderPopup();
    sameAddress();
    editInfo();
    peopleSlide();
    onlyNumber();
    footerFolder();
    sortMenu();
    pagerControl();
});

    function customSlider(slideName,widthSlide,marginSlide,itemShrink,slideMax,selectLoop,controlHide,btnNext,btnPrev,slideMove,onOffPager,namePager){
        $(slideName).bxSlider({
            slideWidth: widthSlide,
            slideMargin: marginSlide,
            shrinkItems: itemShrink,
            maxSlides: slideMax,
            infiniteLoop: selectLoop,
            hideControlOnEnd: controlHide,
            nextSelector: btnNext,
            prevSelector: btnPrev,
            moveSlides: slideMove,
            pager: onOffPager,
            pagerSelector: namePager
        });
    }

    

    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    function onYouTubeIframeAPIReady() {
        var youtubeId = $('#player').attr('data-videoId');
        player = new YT.Player('player', {
            videoId: youtubeId,
            playerVars: {
                'rel': 0,
                'controls': 1,
                'mute': 1,
                'loop': 0,
                'playinline': 1,
                'playlist': youtubeId
            },
            events: {
                'onReady': onPlayerReady
            }
        });
    }

    function onPlayerReady(){
        $('.btnVideo').click(function(){
            player.playVideo();
        });
    }

    function changeVideoId(videoId){
        player.loadVideoById(videoId);
        $('#player').attr('data-videoId',videoId);
        videoStartTwo();
    }

    function videoStartTwo(){
        var playerId=null;
        var playerName=$('.videoBox').parent().siblings('div').find('b');
        var playerParagraph=$('.videoBox').parent().siblings('div').find('p');
        playerId=$('#player').attr('data-videoId');

        switch(playerId){
            case "3hiW2YtzzKs":
                playerName.text("Glen Sobel - Straight Up DW Drums");
                playerParagraph.text("Collector's Series Pure Almond is the perfect hardwood for Hard Rock. Glen Sobel proved that when he dropped by the California Custom Shop to check em out. Get out your lighters!");
                break;  
            case "qq2Vg-pZa3M":
                playerName.text("Gerald Heyward plays DW Drums");
                playerParagraph.text("Gerald is considered to be the “Godfather” of gospel drumming and has played with the likes of Mary J. Blige, Destiney’s Child, P.Diddy, and Chris Brown among others.")
                break;
            case "UpTinadSVGo":
                playerName.text("Gil Sharone - Straight Up DW Drums");
                playerParagraph.text("Gil Sharone visited the DW factory to explore the articulate, woodsy tonality of limited-run Pure Almond drums.");
                break;
            case "0xH-xwYyGTg":
                playerName.text("DWe. Natural playability.");
                playerParagraph.text("Watch legendary studio player and longtime DW artist, John ‘JR’ Robinson share his thoughts on DWe. These groundbreaking acoustic-electronic drums offer drummers the best-in-class playability through intuitive features like pressure sensing, pitch bending, and more.");
                break;
            case "Bj2W2-8Fcug":
                playerName.text("DWe. The future feels familiar.");
                playerParagraph.text("DW Artist Stephen Perkins discusses the introduction of DWe, offering drummers the familiar feel of handcrafted acoustic DW drums, combined with the creative possibilities of wireless electronics.");
                break;
            case "Ay72rQDTMnU":
                playerName.text("DW. Electrified.");
                playerParagraph.text("DW is excited to introduce DWe, groundbreaking acoustic-electronic convertible drums that bring new sonic possibilities to any musical situation. DWe features DW’s legendary handcrafted 100% Pure Maple shells, innovative hardware, and all-new wireless triggers for a clean, classic aesthetic. Playable as both fully electronic or acoustic drums, the possibilities are limitless.");
                break;
            case "exQCw15DefA":
                playerName.text("DW Factory Tour 2021");
                playerParagraph.text("Fresh from Drum Day LA, session great Russ Kunkel and John Good give you a tour of the DW Drum factory including the people, techniques, materials and technology that make it all possible. There’s also a very special drum set featured at the end.");
                break;
            case "j0CYz-705f8":
                playerName.text("Introducing our 50th Anniversary Drums and Pedals");
                playerParagraph.text("John Good, Don Lombardi, and the whole DW family celebrate 50 years of inspiration with these limited edition drums and pedals.");
                break;
            case "VGyKy_Ejs_c":
                playerName.text("The Story of DW Collector’s Series Pure Almond");
                playerParagraph.text("Resident Woodologist, John Good, explains all there is to know about this newly-discovered tonewood​.");
                break;
            case "w_FJ98FzdXg":
                playerName.text("Overview - DW Soundworks Tutorial");
                playerParagraph.text("A general overview of all the controls, parameters, and functions of DW Soundworks. This will get you familiar with the software making it easy and intuitive to use.");
                break;
            case "Ewnx9bfg3tU":
                playerName.text("Presets - DW Soundworks Tutorial");
                playerParagraph.text("We'll show you how to name, save, and even remove presets from the Preset browser.");
                break;
            case "nsKikbg7zEE":
                playerName.text("Favorites - DW Soundworks Tutorial");
                playerParagraph.text("The Favorites list gives you easy access to your favorite kits and allows you to list them in whatever order you want.");
                break;
            case "tSOu7IVz7BQ":
                playerName.text("Welcome to the Founder's Feed");
                playerParagraph.text("Don Lombardi and John Good welcome you to the Founder's Feed");
                break;
            case "679NjewGbwA":
                playerName.text("Episode 1 - John Heads Out West");
                playerParagraph.text("We're kicking off the DW50 Founder's Feed with John Good's story of how he made his way out to the Pacific coast for love and drums.");
                break;
            case "fJnT6frVa5I":
                playerName.text("Episode 2 - Don The Drummer");
                playerParagraph.text("Don Lombardi talks about his career as a gigging drummer and teacher leading up to the opening of The Drum Workshop teaching studio in 1972.");
                break;
            case "blgKE7IJ7lw":
                playerName.text("Meet the Makers: Don Lombardi & John Good");
                playerParagraph.text("Enjoy Don Lombardi and John Good’s DW50 keynote session, where they shared stories from DW’s 50-year journey from teaching studio to hardware innovator to global custom drum brand.");
                break;
            case "FrohgtXjk3Q":
                playerName.text("DW50: Our Story");
                playerParagraph.text("Learn about the ethos, passions and, experiences that have guided DW since 1972 from founder Don Lombardi and EVP John Good.");
                break;
            case "zdhvLsAICVM":
                playerName.text("Clinic: Queen Cora");
                playerParagraph.text("Learn from the incredible Queen Cora Coleman (Prince, Beyonce) as she shares insights and skills from her academic and professional journey.");
                break;
            case "i5-ugbd0QkU":
                playerName.text("Channel 4 News Special (2000)");
                playerParagraph.text("In 2003, Channel 4 News did a story on two guys drumming up business in Oxnard, CA. Clip from the DW American Dream 3 VHS released in 2000");
                break;
            case "DWEsJucxu_E":
                playerName.text("Don's Origin Story (1993)");
                playerParagraph.text("The beginning of the original American Dream DW VHS video from 1993 including artist solos and the company's origin story narrated by founder Don Lombardi.");
                break;
            case "SSNExLSB8XY":
                playerName.text("John Hit The Road (1997)");
                playerParagraph.text("John Good talks about how he hit the road as a drum tech in the early days of DW and found out first hand what drummers want and need. Clip from DW VHS American Dream 2 (1997)");
                break;
        }
    }

    function controlVideo(){
        $('#player').hide();
        $('.btnYoutubePlay').click(function() {
            $('#player').show();
            $('.btnVideo').hide();
            $('.playThumbnail').hide();
            $('.videoBox').addClass('active');
        });
    };
    
    function overMouse(){
        var menuMain=$('header>div nav');
        var menuDepth=$('header>div nav ul>li');

        $(window).resize(function(){
            if(window.matchMedia('screen and (max-width: 1279px').matches){
                menuDepth.off();
            }
            desktopMenu();
        });

        desktopMenu();
        function desktopMenu(){
            if(window.matchMedia("screen and (min-width: 1280px)").matches){
                menuDepth.mouseover(function(){
                    $(this).siblings().removeClass('active');
                    $(this).addClass('active');
                });
    
                menuDepth.mouseleave(function(){
                    $(this).removeClass('active');
                });
    
                menuMain.find('ul li:not(:last-child) a').click(function(){
                    $(this).closest('ol').addClass('active');
                    $(this).closest('ol').parent().siblings().find('ol').removeClass('active');
                });
    
                menuDepth.last().click(function(){
                    $(this).siblings().find('ol').removeClass('active');
                });
            }
        }
        
        menuDepth.find('span').on('click', function(){
            if(window.matchMedia('screen and (max-width: 1279px').matches){
                $(this).parent().toggleClass('active');
                $(this).parent().siblings().removeClass('active');
                $(this).next().slideToggle(500);
                $(this).parent().siblings().find('ol').slideUp(500);
            }
            menuMain.find('a').click(function(){
                menuMain.removeClass('active');
            });
        });

        $('header div>ul li:last-child').click(function(){
            menuMain.addClass('active');
           });
    
        $('header div nav>img').click(function(){
            $(this).parent().removeClass('active');
        });
    }
    
    function searchPanel(){
        var barSearch=$('header>div>ul li input[type=search]');
        var btnClose=$('header>div ul li input[type=button');

        barSearch.click(function(){
            barSearch.addClass('active');
            btnClose.addClass('active');
        });
        btnClose.click(function(){
            barSearch.removeClass('active');
            btnClose.removeClass('active');
        });
    }

    function subScribe(){
        var subContent=$('footer>div div:nth-child(3)');

        subContent.find('input[type=submit]').click(function(){
            subContent.find('input').addClass('active');
            subContent.find('p').addClass('active');
        });
    }

    function videoPlay(){
        var videoBox=$('.videoContent video');
        var btnPlay=$('.videoContent .btnVideo');

        btnPlay.click(function(){
            videoBox.get(0).play();
            $(this).siblings('video').siblings().hide();
            videoBox.prop('controls','true');
        });
    }

    function changeRow(){
        $('#secondRow').click(function(){
            $('ul.rowThird').attr('class','rowSecond');
        });
        $('#thirdRow').click(function(){
            $('ul.rowSecond').attr('class','rowThird');
        });
    }

    function changeTapMenu(){
        var currentTabName = '';

        $(".listContainer>span button").click(function(){
            currentTabName = "." + $(this).attr('data-tabName');
            $(currentTabName).addClass('active');
            $(currentTabName).siblings('ul').removeClass('active');
            $(this).addClass('active');
            $(this).siblings().removeClass('active');

            if($(this).attr('data-tabName') == "parts"){
                $(".listContainer>span").addClass('active');
            }
            else{
                $(".listContainer>span").removeClass('active');
            }
        });
    }

    function thumbnailImageChange(){
        var thumbnailImage=$('.detailContainer>div>img')
        var thumbnailList=$('.detailContainer>div:first-of-type ul li');
        thumbnailList.first().addClass('active');

        thumbnailList.click(function(){
            var changeImage=$(this).children().attr('src');

            $(this).addClass('active');
            $(this).siblings().removeClass('active');

            if(thumbnailList.hasClass('active')){
                thumbnailImage.fadeOut(200, function(){
                    thumbnailImage.attr('src',changeImage); 
                    thumbnailImage.fadeIn(200);
                });

                if(window.matchMedia('(min-width: 1280px').matches){
                    $('html,body').animate({scrollTop: 100}, 350);
                }   
            }
        });

        var listSlide=$('.detailContainer>div:first-of-type ul');
        var lastList=listSlide.find('li').last().index();
        var currentList=listSlide.find('li.active').index();

        thumbnailList.click(function(){
            if(window.matchMedia('screen and (max-width: 1279px)').matches){
                currentList=$(this).index();

                if($(this).index()==lastList){
                    listSlide.siblings().last().addClass('active');
                }
                if($(this).index()!=lastList){
                    listSlide.siblings().last().removeClass('active');
                }
                if($(this).index()!=0){
                    listSlide.siblings().first().addClass('active');
                }
                if($(this).index()==0){
                    listSlide.siblings().first().removeClass('active');
                }
                if(currentList==lastList){
                    listSlide.siblings().last().addClass('active');
                }
                if(currentList!=lastList){
                    listSlide.siblings().last().removeClass('active');
                }
                if(currentList==0){
                    listSlide.siblings().first().addClass('active');
                }
                if(currentList!=0){
                    listSlide.siblings().first().removeClass('active');
                }
            }
        });

        var moveValue=listSlide.find('li').outerWidth()+parseInt(listSlide.css('gap'));
        var screenMin=0;
        var screenMax=3;

        listSlide.siblings().last().click(function(){
            if(currentList!=lastList){
                $(this).siblings('ul').children().eq(currentList).removeClass('active');
                $(this).siblings('ul').children().eq(currentList).next().addClass('active');
                currentList++;
            }
            if(currentList==lastList){
                $(this).addClass('active');
            }
            if(currentList!=0){
                $(this).siblings('span').removeClass('active');
            }
            if(window.matchMedia('screen and (max-width: 767px)').matches){
                screenMax=2;

                if(currentList>screenMax){
                    screenMin++;
                    screenMax++;
                    var currentMargin=-(moveValue*(screenMin))+'px';
    
                    $(listSlide).find('li').css('transform','translateX('+currentMargin+')');
                }
            }
            if(window.matchMedia('screen and (min-width: 768px) and (max-width: 1279px)').matches){
                if(currentList>screenMax){
                    screenMin++;
                    screenMax++;
                    var currentMargin=-(moveValue*(screenMin))+'px';
    
                    $(listSlide).find('li').css('transform','translateX('+currentMargin+')');
                }
            }
        });

        listSlide.siblings().first().click(function(){
            if(currentList!=0){
                $(this).siblings('ul').children().eq(currentList).removeClass('active');
                $(this).siblings('ul').children().eq(currentList).prev().addClass('active');
                currentList--;
            }
            if(currentList==0){
                $(this).addClass('active');
            }
            if(currentList!=lastList){
                $(this).siblings('span').removeClass('active');
            }
            if(window.matchMedia('screen and (max-width: 767px)').matches){
                screenMax=2;
                if(currentList<screenMin){
                    screenMin--;
                    screenMax--;
                    var lastMargin=-(moveValue*(screenMin))+'px';
    
                    $(listSlide).find('li').css('transform','translateX('+lastMargin+')');
                }
            }
            if(window.matchMedia('screen and (min-width: 768px) and (max-width: 1279px)').matches){
                if(currentList<screenMin){
                    screenMin--;
                    screenMax--;
                    var lastMargin=-(moveValue*(screenMin))+'px';
    
                    $(listSlide).find('li').css('transform','translateX('+lastMargin+')');
                }
            }
        });

        listSlide.siblings('span').click(function(){
            var changeImg=listSlide.find('li.active').children().attr('src');

            if(thumbnailList.hasClass('active')){
                thumbnailImage.fadeOut(200, function(){
                    thumbnailImage.attr('src',changeImg); 
                    thumbnailImage.fadeIn(200);
                });
            }
        });
    }

    function slideToggle(){
        $('.detailContainer>div:nth-child(2)>ul>li:last-child>b').click(function(){         
            $(this).next().stop().slideToggle(500);
            $(this).toggleClass('active');
        });
    }

    function panelControl(){
        var currentPanel='';

        $('.detailContainer .btnContent').click(function(){
            currentPanel='#'+$(this).attr('data-panel');
            $(currentPanel).addClass('active');
        });
        $('li[data-panel=panelFinish]').click(function(){
            currentPanel='#'+$(this).attr('data-panel');
            $(currentPanel).addClass('active');
        });
        // $('.detailContainer .btnClose').click(function(){
        //     $(currentPanel).removeClass('active');
        // });
        $('[class*=btnClose]').click(function(){
            $(this).parent('div').removeClass('active');
        });
    }

    function panelFinish(){
        var productImg=$('.detailContainer>div:first-child img');
        var finishList=$('#panelFinish div');

        finishList.find('li').click(function(){
            var currentFinish=finishList.find('li.active img').attr('src').slice(14,-4);
            var changeFinish=$(this).find('img').attr('src').slice(14,-4);
            var currentText=$(this).find('p').text();

            productImg.each(function(){
                $(this).attr('src',$(this).attr('src').replace(currentFinish,changeFinish)).fadeOut(0).fadeIn(500);
            });

            finishList.find('li').removeClass('active');
            $(this).addClass('active');
            $('li[data-panel=panelFinish] b').text(currentText);
            $('#panelFinish').removeClass('active');

            if(window.matchMedia('(min-width: 768px) and (max-width: 1279px)')){
                $(window).scrollTop($('.detailContainer').offset().top);
            }
        });
    }

    function softwareSlide(){
        var slideImg=$('.sliderSoftwareImg li');
        var slideTxt=$('.sliderSoftwareText li');
        var slidePager=$('[class^=software] .slidePager ol li:first-child');
        var currentImg=0;
        var currentTxt=0;
        var currentPager=0;

        $('.software .nextBtn').click(function(){
            if(currentImg != slideImg.length -1){
                slideImg.eq(currentImg).addClass('active');
                currentImg += 1;
            }
            if(currentTxt != slideTxt.length -1){
                slideTxt.eq(currentTxt).removeClass('active');
                setTimeout(function(){
                    slideTxt.eq(currentTxt).addClass('active');
                }, 200)
                currentTxt += 1;
            }
            if(currentPager != slideTxt.length -1){
                slidePager.text('0'+(currentPager+2));
                currentPager += 1;
                $('.prevBtn').removeClass('active');
            }
            if(currentPager == 4){
                $('.nextBtn').addClass('active');
            }
        });

        $('.software .prevBtn').click(function(){
            if(currentImg != 0){
                slideImg.eq(currentImg-1).removeClass('active');
                currentImg -= 1;
            }
            if(currentTxt != 0){
                slideTxt.eq(currentTxt).removeClass('active');
                setTimeout(function(){
                    slideTxt.eq(currentTxt).addClass('active');
                }, 200)
                currentTxt -= 1;
            }
            if(currentPager != 0){
                slidePager.text('0'+(currentPager));
                currentPager -= 1;
            }
            if(currentPager == 0){
                $('.prevBtn').addClass('active');
            }
            if(currentPager == 3){
                $('.nextBtn').removeClass('active');
            }
        });

        $(window).resize(function(){
            textMinHeight();
        });

        textMinHeight();

        function textMinHeight(){
            var textHeight=slideTxt.eq(2).find('div').height();
            slideTxt.parent().height(textHeight);
        }
    }

    function thumbSlide(){
        var masterSlider=$('.controlSlider');

        masterSlider.find('ol>li').click(function(){
            var listNumber=$(this).index();

            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            $(this).closest('.controlSlider').find('>ul li').eq(listNumber).addClass('active');
            $(this).closest('.controlSlider').find('>ul li').eq(listNumber).siblings().removeClass('active');
        });

        if(masterSlider.length){
            var contentTop=$('.controlSlider:first-of-type').offset().top;

            $('.drumSlider').find('li').click(function(){
                $('html,body').animate({scrollTop: contentTop-100}, 500);
            });
        }
    }

    function fancySlide(){
        $('.slideFancy>li strong').click(function(){
            $(this).parent().toggleClass('active');
            $(this).siblings().stop().slideToggle(500);

            if($(this).siblings().is(':visible')){
                $(this).parent().siblings().children('p, ol').slideUp(500);
                $(this).parent().siblings().removeClass('active');
            }

            if($(this).is(':visible')){
                $(this).siblings('ol').css('display','flex');
            }
        });
    }

    function changeShellSize(){
        var currentSize='';

        $('.customizeContent>div:nth-of-type(2) ul:first-of-type li').click(function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            currentSize='#'+$(this).attr('data-sizeName');
            $(currentSize).addClass('active');
            $(currentSize).siblings().removeClass('active');
        });
        
        $('.customizeContent>div:nth-of-type(2) ul:last-of-type>li ol li').each(function(){

            var textDiameter=$(this).find('b').text();
            var changeDiameter=parseInt(textDiameter);
            var circleDiameter=Math.round((changeDiameter*96)/10);

            $(this).find('span:not(:nth-of-type(2))').width(circleDiameter-4);
            $(this).find('span:not(:nth-of-type(2))').height(circleDiameter-4);
            $(this).find('span:not(:nth-of-type(2))').css('border-radius',circleDiameter/2);

            var textHeight=$(this).find('em').text();
            var changeHeight=parseInt(textHeight);
            var cylinderHeight=Math.round((changeHeight*96)/10);

            $(this).find('span:nth-of-type(2)').width(circleDiameter-4);
            $(this).find('span:nth-of-type(2)').height(cylinderHeight);
            $(this).find('span:nth-of-type(2)').css('top',(circleDiameter/2)+parseInt(25)+"px");
        });

        $('.customizeContent>div:nth-of-type(2) ul:last-of-type li ol li').children().click(function(){
            if(window.matchMedia('screen and (max-width: 1279px)').matches){
                $(this).parent().toggleClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });

        $(window).resize(function(){
            listHeight();
        });

        listHeight();
        
        function listHeight(){
            $('.customizeContent>div:nth-of-type(2) ul:last-of-type>li ol li').each(function(){
                var listHeight=($(this).find('span:first-of-type').height())+$(this).find('span:nth-of-type(2)').height();

                if(window.matchMedia('screen and (min-width: 1280px)').matches){
                    $(this).mouseenter(function(){
                        $(this).height(listHeight);
                    });
    
                    $(this).mouseleave(function(){
                        $(this).height('250px');
                    });
                }

                if(window.matchMedia('screen and (max-width: 1279px)').matches){
                    $(this).off();
                }

            });

        }
    }      
    
    function autoFadeSlide(){
        var mainSlide=$('.autoSlide>li');

        if(window.matchMedia('screen and (min-width: 1280px)').matches){
            var listHeight=mainSlide.find('li img').height();
            mainSlide.find('ol').height(listHeight);
        }

        $(window).resize(function(){
            if(window.matchMedia('screen and (min-width: 1280px)').matches){
                var listHeight=mainSlide.find('li img').height();
                mainSlide.find('ol').height(listHeight);
            }
        });
        
        mainSlide.each(function(){
            var slideList=$(this).find('ol li');
            var lastList=$(this).find('ol li:last-child').index();
            var currentList=0;

            setInterval(function(){
                if(currentList==0){
                    slideList.eq(lastList).removeClass('active');
                    slideList.eq(currentList).addClass('active');
                    currentList++;
                }
                else if(currentList==lastList){
                    slideList.eq(currentList).prev().removeClass('active');
                    slideList.eq(currentList).addClass('active');
                    currentList=0;
                }
                else{
                    slideList.eq(currentList).prev().removeClass('active');
                    slideList.eq(currentList).addClass('active');
                    currentList++;
                }
            }, 3000);
        });
    };

    function passwordProcess(){
        $('.icoVisibility').click(function(){
            if($(this).siblings('input').attr('type') == 'password'){
                $(this).siblings('input').attr('type','text');
            }
            else{
                $(this).siblings('input').attr('type','password');
            }
        });
    }

    function popupProcess(){
        var namePopup='';
        $('.btnCheck').click(function(){
            namePopup='.'+$(this).attr('data-popup');
            $('.onCheck').each(function(){
                if($(this).find('input').val() == ''){
                    $(this).find('input').prop('required',true);
                }else{
                    $(this).find('input').removeProp('required');
                }
                if($(this).find('input').prop('required') == true){
                    $(namePopup).removeClass('active');
                }
                else if($(this).find('input').prop('required') == false){
                    $(namePopup).addClass('active');
                }
            });
        });

        $('.deletePopup').click(function(){
            $('.checkPopupDelete').addClass('active');
        })

        $('.checkPopupDelete input').click(function(){
            $(this).parent().removeClass('active');
        });
    }

    function accountMenu(){
        $('.accountNav>span').click(function(){
            $(this).parent().toggleClass('active');
        });
    }

    function orderPopup(){
        $('.stateShipped input').click(function(){
            $('.stateShipped>div').toggleClass('active');
        });

        $('input[value=REQUEST]').click(function(){
            $('.stateShipped p').text("REQUESTED");
            $('.stateShipped>input').css('display','none');
        });

        $('.checkPopupDelete input[value=DELETE]').click(function(){
            $('.stateShipping p').text("CANCELLED");
            $('.stateShipping>input').css('display','none');
            $('.stateShipping').removeClass();

            $('.myAccount>div:nth-of-type(2)>div:first-child ul li:last-child').css('display','none');
        })
    }
    
    function sameAddress(){
        $('#sameAddress').click(function(){
            if($('#sameAddress').is(':checked') == true){
                $('.shippingContainer form>div fieldset:first-child ul li span input').each(function(){
                    var beforeValue=$(this);
                    $('.shippingContainer form>fieldset ul li span input').each(function(){
                        var afterValue=$(this);
                        if(beforeValue.attr('name') == afterValue.attr('name')){
                            afterValue.val(beforeValue.val());
                        }
                    });
                });
            };
        });
    }

    function editInfo(){
        $('.typeEdit').click(function(){
            $('.nameEdit').text($('.nameEdit').text().replace("ADD","EDIT"));
            $('.btnEdit').val($('.btnEdit').val().replace("ADD","EDIT"));

            if($('.btnEdit').val().indexOf("EDIT") == 0){
                $('.checkPopup p').text($('.checkPopup p').text().replace("CREATED","UPDATED"));
            }
        });
    }

    function peopleSlide(){
        var mainSlide=$('.dwe>div:nth-of-type(2)>ul:last-of-type li');
        var lastSlide=mainSlide.siblings(':last-child').index();
        var currentSlide=0;
        var intervalClass=null;

        contentHeight();
        timeSlide();

        $(window).resize(function(){
            contentHeight();
            clearInterval(intervalClass);
            intervalClass=setInterval(timeSlide, 3000);
        });

        function contentHeight(){
            if(window.matchMedia("screen and (min-width: 1280px)").matches){
                mainSlide.parent().height('auto');
            }
            if(window.matchMedia("screen and (min-width: 768px) and (max-width: 1279px)").matches){
                mainSlide.parent().height(mainSlide.find('img').height());
            }
            if(window.matchMedia("screen and (max-width: 767px").matches){
                mainSlide.parent().height((mainSlide.find('img').height()+mainSlide.eq(1).find('div').height()));
            }
        }

        intervalClass=setInterval(timeSlide, 3000);
        
        function timeSlide(){
            if(window.matchMedia("screen and (max-width: 1279px").matches){
                if(currentSlide==0){
                    mainSlide.eq(lastSlide).removeClass('active');
                    mainSlide.eq(currentSlide).addClass('active');
                    currentSlide++;
                }
                else if(currentSlide==lastSlide){
                    mainSlide.eq(currentSlide).prev().removeClass('active');
                    mainSlide.eq(currentSlide).addClass('active');
                    currentSlide=0;
                }
                else{
                    mainSlide.eq(currentSlide).prev().removeClass('active');
                    mainSlide.eq(currentSlide).addClass('active');
                    currentSlide++;
                }
            }
        }
    }

    function onlyNumber(){
        $(".numberOnly").on("keyup", function(){
            var minLength=$(this).attr('minlength');
            var value=$(this).val().replace(/[^0-9]/g,"");

            if($(this).val().length<minLength){
                $(this).prop('required','true');
                $(this).val(value);
            }else{
                $(this).val(value);
            }
        });
    }

    function footerFolder(){
        $('footer>div>div:nth-child(-n+2) h2').click(function(){
            if(window.matchMedia('screen and (max-width: 767px)').matches){
                $(this).toggleClass('active');

                if($(this).hasClass('active')){
                    $(this).siblings().height('auto');
                    var abc=$(this).siblings().height();
                    $(this).siblings().height('0');
                    $(this).siblings().height(abc);
                }else{
                    $(this).siblings().height('0');
                }
            }
        });
    }

    function sortMenu(){
        $('.listContainer:not([class*=collector]):not([class^=series])>div:last-of-type h3 small').click(function(){
            if(window.matchMedia('screen and (max-width: 767px)').matches){
                $(this).parent().next().toggleClass('active');
            }
        });
    }

    $(window).resize(function(){
        pagerControl();
    });

    function pagerControl(){
        var btnWidth=$('.pager>a').outerWidth();
        
        if(window.matchMedia('screen and (max-width: 767px').matches){
            if($('.pager ol li').first().hasClass('active')){
                $('.pager').css('padding-left',btnWidth);
                $('.pager ol li.active').next().addClass('on');
                $('.pager ol li.active').next().next().addClass('on');
            }
            else if($('.pager ol li').hasClass('active')){
                $('.pager ol li.active').prev().addClass('on');
                $('.pager ol li.active').next().addClass('on');
            }
            if($('.pager ol li').last().hasClass('active')){
                $('.pager').css('padding-right',btnWidth);
                $('.pager ol li.active').prev().addClass('on');
                $('.pager ol li.active').prev().prev().addClass('on');
            }
        }else{
            $('.pager').css('padding','');
        }
    }