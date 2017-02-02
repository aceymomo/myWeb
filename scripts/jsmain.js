$(function(){
    var speedArr = ['1','46','36','43','40'];
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
        loopBottom: true,
        verticalCentered:true,
        navigation:true,
        easing:'easeInCirc',

        afterLoad:function(link,index){
            switch (index) {
                case 1:
                    move('.section1 img').set('opacity','1').duration('0.5s').set('margin-top','-10px').end(function(){
                        move('.section1 h3').set('opacity','1').duration('0.2s').end(function(){
                            move('.section1 span').set('opacity','0.8').duration('0.2s').end(function(){
                                move('.section1 strong').set('opacity','0.8').duration('0.2s').end(function(){
                                    move('.section1 p').set('opacity','1').duration('0.2s').end();
                                })
                            })
                        })
                    });
                    break;
                case 2:
                    move('.section2 h3').set('opacity','1').duration('0.5s').set('margin-top','-10px').end(function(){
                        move('.section2 span').set('opacity','1').duration('0.2s').end(function(){
                            move('.section2 .aboutbox').set('opacity','1').duration('0.5s').end();
                            move('.section2 .abouttext-1').set('opacity','1').set('top','-20px').set('left','-20px').end();
                            move('.section2 .abouttext-2').set('opacity','1').set('bottom','-20px').set('right','-20px').end(function(){
                                move('.section2 .aboutbt-1').set('opacity','1').set('left','180px').end(function(){
                                    move('.section2 .aboutbt-2').set('opacity','1').set('left','180px').end(function(){
                                        move('.section2 .aboutbt-3').set('opacity','1').set('left','180px').end(function(){
                                            move('.section2 .aboutbt-4').set('opacity','1').set('left','180px').end();
                                        });
                                    });
                                });
                            });
                        })
                    })
                    
                    break;
                case 3:
                    move('.section3 h3').set('opacity','1').set('margin-top','-10px').end(function(){
                        move('.section3 span').set('opacity','1').end(function(){
                                move('.section3 .skill-12').set('opacity','1').end();
                                move('.section3 .skill-13').set('opacity','1').end();
                                move('.section3 .skill-14').set('opacity','1').end();
                                move('.section3 .skill-15').set('opacity','1').end();
                                move('.section3 .skill-5').set('opacity','1').duration('0.5s').scale(1).end();
                                move('.section3 .skill-6').set('opacity','1').duration('0.8s').scale(1).end();
                                move('.section3 .skill-7').set('opacity','1').duration('0.9s').scale(1).end();
                                move('.section3 .skill-8').set('opacity','1').duration('1s').scale(1).end();
                                move('.section3 .skill-9').set('opacity','1').duration('1.1s').scale(1).end();
                                move('.section3 .skill-10').set('opacity','1').duration('1.6s').scale(1).end();
                                move('.section3 .skill-11').set('opacity','1').duration('1.7s').scale(1).end();
                        })
                    })
                    break;
                case 4:
                    move('.section4 h3').set('opacity','1').set('margin-top','-10px').end(function(){
                        move('.section4 span').set('opacity','1').end(function(){
                            move('.section4 .timeline').set('opacity','1').end(function(){
                                move('.section4 .handtime').set('opacity','1').end();
                                move('.section4 .handtime-2').set('opacity','1').end();
                                move('.section4 .handtime-3').set('opacity','1').end();
                                move('.section4 .handtime-4').set('opacity','1').end();
                                $('.section4 .handbox-1').animate({'opacity':'1'},30);
                                $('.section4 .handbox-1').animate({'width':'530px'},300);
                                $('.section4 .handbox-1').animate({'width':'450px'},100);
                                $('.section4 .handbox-1').animate({'width':'490px'},100);
                                move('.section4 .handtime-5').set('opacity','1').end(function(){
                                    $('.section4 .handbox-2').animate({'opacity':'1'},30);
                                    $('.section4 .handbox-2').animate({'width':'530px'},300);
                                    $('.section4 .handbox-2').animate({'width':'450px'},100);
                                    $('.section4 .handbox-2').animate({'width':'490px'},100);
                                    move('.section4 .handtime-6').set('opacity','1').end(function(){
                                        $('.section4 .handbox-3').animate({'opacity':'1'},30);
                                        $('.section4 .handbox-3').animate({'width':'530px'},300);
                                        $('.section4 .handbox-3').animate({'width':'450px'},100);
                                        $('.section4 .handbox-3').animate({'width':'490px'},100);
                                        move('.section4 .handtime-7').set('opacity','1').end(function(){
                                            $('.section4 .handbox-4').animate({'opacity':'1'},30);
                                            $('.section4 .handbox-4').animate({'width':'530px'},300);
                                            $('.section4 .handbox-4').animate({'width':'450px'},100);
                                            $('.section4 .handbox-4').animate({'width':'490px'},100);
                                            move('.section4 .handtime-8').set('opacity','1').end();
                                        })
                                    })
                                })
                            });
                        })
                    })
                    break;
                case 5:
                    move('.section5 h3').set('opacity','1').set('margin-top','-10px').end(function(){
                        move('.section5 span').set('opacity','1').end(function(){
                            move('.section5 #bk').set('opacity','1').scale(1).end();
                            move('.section5 #bk:last-child').set('opacity','1').scale(1).end(function(){
                                move('.section5 #bk:nth-child(2)').set('opacity','1').scale(1).end();
                                move('.section5 #bk:nth-child(3)').set('opacity','1').scale(1).end();
                            });
                        });
                    });
                    break;
                case 6:
                    move('.section6 h3').set('opacity','1').set('margin-top','-10px').end(function(){
                        move('.section6 span').set('opacity','1').end(function(){
                            move('.section6 .contact-text').set('opacity','1').end(function(){
                                $('.section6 .contact-1').css('opacity','1');
                                $.each(speedArr,function(i,val){
                                    $('.section6 .contact-1').animate({top:val+'px'},100);
                                })
                                move('.section6 strong').set('opacity','1').end(function(){
                                    $('.section6 .contact-2').css('opacity','1');
                                    $.each(speedArr,function(i,val){
                                        $('.section6 .contact-2').animate({top:val+'px'},100);
                                    })
                                    move('.section6 .miss1').set('opacity','1').end(function(){
                                        $('.section6 .contact-3').css('opacity','1');
                                        $.each(speedArr,function(i,val){
                                            $('.section6 .contact-3').animate({top:val+'px'},100);
                                        })
                                        move('.section6 .miss2').set('opacity','1').end(function(){
                                            $('.section6 .contact-4').css('opacity','1');
                                            $.each(speedArr,function(i,val){
                                                $('.section6 .contact-4').animate({top:val+'px'},100);
                                            })
                                            move('.section6 .miss3').set('opacity','1').end(function(){
                                                $('.section6 .contact-5').css('opacity','1');
                                                $.each(speedArr,function(i,val){
                                                    $('.section6 .contact-5').animate({top:val+'px'},100);
                                                })
                                                move('.section6 .miss4').set('opacity','1').end(function(){
                                                    $('.section6 .contact-6').css('opacity','1');
                                                    $.each(speedArr,function(i,val){
                                                        $('.section6 .contact-6').animate({top:val+'px'},100);
                                                    })
                                                });
                                            });
                                        });
                                    });
                                });
                                /*$.each(speedArr,function(i,val){
                                    $('.section6 .contact-1').animate({top:val+'px'},100);
                                });*/
                            });
                        });
                    });
                    break;
                default:
                    // statements_def
                    break;
            }
        },

        /*onLeave:function(link,index){
            switch (index) {
                case 1:
                    move('.section1 img').set('opacity','0').set('margin-top','0px').end()
                    move('.section1 h3').set('opacity','0').end()
                    move('.section1 span').set('opacity','0').end()
                    move('.section1 strong').set('opacity','0').end()
                    move('.section1 p').set('opacity','0').end();
                    break;
                case 2:
                    move('.section2 h3').set('opacity','0').set('margin-top','0px').end()
                    move('.section2 span').set('opacity','0').end()
                    move('.section2 .abouttext-1').set('opacity','0').set('top','-200px').set('left','-200px').end();
                    move('.section2 .abouttext-2').set('opacity','0').set('bottom','-200px').set('right','-200px').end()
                    move('.section2 .aboutbox').set('opacity','0').end();
                    break;
                case 3:
                    move('.section3 h3').set('opacity','0').set('margin-top','0px').end();
                        move('.section3 span').set('opacity','0').end();
                                move('.section3 .skill-12').set('opacity','0').end();
                                move('.section3 .skill-13').set('opacity','0').end();
                                move('.section3 .skill-14').set('opacity','0').end();
                                move('.section3 .skill-15').set('opacity','0').end();
                                move('.section3 .skill-5').set('opacity','0').scale(0.2).end();
                                move('.section3 .skill-6').set('opacity','0').scale(0.2).end();
                                move('.section3 .skill-7').set('opacity','0').scale(0.2).end();
                                move('.section3 .skill-8').set('opacity','0').scale(0.2).end();
                                move('.section3 .skill-9').set('opacity','0').scale(0.2).end();
                                move('.section3 .skill-10').set('opacity','0').scale(0.2).end();
                                move('.section3 .skill-11').set('opacity','0').scale(0.2).end();
                    break;
                case 4:
                    move('.section4 h3').set('opacity','0').set('margin-top','0px').end();
                        move('.section4 span').set('opacity','0').end();
                            move('.section4 .timeline').set('opacity','0').end();
                                move('.section4 .handtime').set('opacity','0').end();
                                move('.section4 .handtime-2').set('opacity','0').end();
                                move('.section4 .handtime-3').set('opacity','0').end();
                                move('.section4 .handtime-4').set('opacity','0').end();
                                $('.section4 .handbox-1').css({'opacity':'0','width':'20px'});
                                move('.section4 .handtime-5').set('opacity','0').end();
                                    $('.section4 .handbox-2').css({'opacity':'0','width':'20px'});
                                    move('.section4 .handtime-6').set('opacity','0').end();
                                        $('.section4 .handbox-3').css({'opacity':'0','width':'20px'});
                                        move('.section4 .handtime-7').set('opacity','0').end();
                                            move('.section4 .handtime-8').set('opacity','0').end();
                                                $('.section4 .handbox-4').css({'opacity':'0','width':'20px'});
                    break;
                default:
                    // statements_def
                    break;
            }
        }*/
    });
});

$(function(){
    $('.section5 #bk').hover(function(){
        $(this).children('.bk1').stop(true).animate({height:'240px'},300)
        $(this).children('.bk2').stop(true).delay(300).animate({width:'300px'},300)
        $(this).children('.bk3').stop(true).animate({height:'240px'},300)
        $(this).children('.bk4').stop(true).delay(300).animate({width:'300px'},300)
    },function(){
        $(this).children('.bk1').stop(true).animate({height:'0px'},300)
        $(this).children('.bk2').stop(true).delay(100).animate({width:'0px'},300)
        $(this).children('.bk3').stop(true).animate({height:'0px'},300)
        $(this).children('.bk4').stop(true).delay(100).animate({width:'0px'},300)
    })
    $('.section5 #bk').hover(function(){
        $(this).children('.top').stop(true).animate({top:'-10px'});
    },function(){
        $(this).children('.top').stop(true).animate({top:'-60px'});
    })
})


$(function(){
    $('.section6 .contact-box ul li:eq(5)').click(function(){
        $('.section6 .wx-hide').animate({opacity:'1',width:'1200px',height:'350px',top:'-400px'},500);
    });
    $(document).click(function(){
        $('.section6 .wx-hide').css({opacity:'0',width:'200px',height:'35px',top:'400px'});
    })
})
