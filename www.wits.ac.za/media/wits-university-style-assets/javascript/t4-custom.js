// Wits custom Javascripts
//Michael Mason TERMINALFOUR December 2014

(function (jQuery) {
    /* On homepage set the heights of feature blocks so all are the same height
     Find the tallest and make each that height if it is not that height */


    $(document).ready(function () {

        if ($('.other-news').length) {
          $('.other-news:nth-child(2)').hide();
        }
        if ($('.other-event').length) {
          $('.other-event:nth-child(2)').hide();
        }

        if ($('.news-fulltext').length || $('.news-paginate').length) {
            var contentid = $('.news-fulltext').data('contentid');

            if ($('.related-news-articles article').length > 3) {
                $.each($('.related-news-articles article'), function () {
                    if ($(this).attr('data-contentid') == contentid) {
                        $(this).remove();
                    }
                });

                if ($('.related-news-articles article').length > 3) {
                    $('.related-news-articles article').first().remove();
                }
            }
        }
        if ($('.news-paginate').length) {          
            $(function () {
                articles = $('.news-paginate article');
              	var articlesPerPage = 10;
                if (articles.length > 10) {
                    pagenumber = Math.ceil($('.news-paginate article').length / articlesPerPage);
                  
                    $('.pagination').dynapagin({
                        pager: false, // set to true to provide just previous and next buttons.
                        total: pagenumber, // The number of pages that will be in the pagination.
                        page: 1, // The starting page to display. Defaults to first page.
                        previous: '«', // Text to use for previous button. Defaults to "«"
                        next: '»' // Text to use for next button. Defaults to "»"
                    }, function (page) {
                      	$('.news-paginate').addClass('active');
                        $('.pagination a').on('click', function () {
                          	var p = $(this).parent().attr('data-page');
                            document.location = "#page=" + p;
                            $('html,body').scrollTop(0);
                        });
	
  						jQuery('.pagination li[data-page]:nth-child(n12)').addClass('hide');
                      
                      	jQuery('.pagination li[data-page]').on('click', function() {
                      		paginationFiveNextPrevious(jQuery(this).index());
                      	});
                      	jQuery('.pagination li.next, .pagination li.previous').on('click', function() {
                      		paginationFiveNextPrevious(jQuery('.pagination li.active').attr('data-page'));
                      	});
                      
                        start = (page - 1) * articlesPerPage;
                       	end = start + articlesPerPage;
                        content = [];
                        for (i = start; i < end; i++) {
                         	content.push(articles.get(i));
                        }                      
                        $('.news-paginate').html(content);                   
                    });
                } else {
                	$('.news-paginate').addClass('active');
                }
                function resetPagination() {
                    var page = window.location.href.split('#page=');
                    var pageNumber = page[1];
                    var selector = $('[data-page='+ pageNumber +'] a');
                    selector.click();
                }
                if(window.location.href.indexOf("#page=") > -1) {
                    resetPagination();
                }
                $(window).on('hashchange',function(){
                    resetPagination();
                });
            });
        }
        if ($('.upcoming-events-module').length) {
            if ($('.event-fulltext').length) {
                var contentid = $('.event-fulltext').data('contentid');

                if ($('.upcoming-events-module article').length > 3) {
                    $.each($('.upcoming-events-module article'), function () {
                        if ($(this).attr('data-contentid') == contentid) {
                            $(this).remove();
                        }
                    });
                }
            }
            if ($('.upcoming-events-module article').length > 3) {
                $('.upcoming-events-module article').last().remove();
            }
        }
        $('#searchoptions input[type="reset"]').on('click', function () {
            $('#searchoptions :input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').val('');
            $(':checkbox, :radio').prop('checked', false);
            return false;
        });
        $(this).foundation({
            accordion: {
                multi_expand: true
            }
        });
        //Foundation accordion toggled handler
        $('.body-accordion, .footer-accordion').on('toggled', function (event, accordion) {
            var accordionNavigations = $(this).find('.accordion-navigation');
            accordionNavigations.each(function (i) {
                if ($(this).hasClass('active')) {
                    if ($(this).find('.fa').hasClass('fa-angle-down')) {
                        $(this).find('.fa').removeClass('fa-angle-down').addClass('fa-angle-up');
                    }
                } else {
                    if ($(this).find('.fa').hasClass('fa-angle-up')) {
                        $(this).find('.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
                    }

                }
            });
        });
        /* Site search slide up/slide down in mobile 
        $('.mobile-header .search-toggle').on('click', function () {
            $('.mobile-site-search').toggleClass('mob-search-visible');
        });
        */

        /* Mobile inner nav show/hide */
        $('.mob-landing-inner-nav-row h3').on('click', function () {
            if (!$('.mob-landing-inner-nav-row .inner-nav').hasClass('open')) {
                $('.mob-landing-inner-nav-row .inner-nav h3 i').removeClass('fa-plus').addClass('fa-minus');
                $('.mob-landing-inner-nav-row .side-nav').slideDown(function () {
                    $('.mob-landing-inner-nav-row .inner-nav').addClass('open');
                });
            } else {
                $('.mob-landing-inner-nav-row h3 i').removeClass('fa-minus').addClass('fa-plus');
                $('.mob-landing-inner-nav-row .side-nav').slideUp(function () {
                    $('.mob-landing-inner-nav-row .inner-nav').removeClass('open');
                });
            }
        });

        /* Slick slider init - for slider as main silder in Homepage/Landing 1 Layout */
        $('.slick-slides').slick({
            slide: '.slick-slide',
            adaptiveHeight: true,
            accessibility: true,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            prevArrow: '<button type="" class="slider-next"><i class="fa fa-chevron-right"></i></button>',
            nextArrow: '<button type="" class="slider-prev"><i class="fa fa-chevron-left"></i></button>'
        });
        /* Discovery slider in Landing 1 and landing 2 layouts */
        $('.discovery-slider').slick({
            slide: '.feature-block',
            dots: false,
            slidesToShow: 4,
            accessibility: true,
            nextArrow: '<div class="disco-next-wrap"><button type="button" class="disco-next"><i class="fa fa-chevron-right"></i></button></div>',
            prevArrow: '',
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2
                    }
                }
            ]
        });
        /* Slider in news pages */
        $('.news-discovery-slider').slick({
            slide: '.feature-block',
            dots: false,
            slidesToShow: 3,
            accessibility: true,
            nextArrow: '<div class="disco-next-wrap"><button type="button" class="disco-next"><i class="fa fa-chevron-right"></i></button></div>',
            prevArrow: '',
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
      
      	/* Slider NEW- Redesign 2021 - Highlights */
      /* highlights slider*/
        $(".highlights-slider--slides-wrapper").slick({
          slide: ".highlights-slider--slides",
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          accessibility: true,
          infinite: false,
          nextArrow:
            '<button class="slider-next"><i class="fa fa-chevron-right"></i></button>',
          prevArrow:
            '<button class="slider-prev"><i class="fa fa-chevron-left"></i></button>',
          appendArrows: ".highlights-slider--navigation",
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
          ],
        });
        $(".highlights-slider--slides-wrapper").slick('setPosition');
      
        /* Muitmedia image gallery slider */
        $('.multi-media-image-gallery').slick({
            slide: '.gallery-element',
            dots: false,
            arrows: false,
            slidesToShow: 1,
            accessibility: true,
            initialSlide: 1,
            adaptiveHeight: true
        });
        //In the multimedia image gallery navigation this sets all the thumbnail images to one height
        //Called as the init function on the gallery navigation sider below
        var initFunction = function () {
            var tallest = $();
            $('.gallery-navigation .thumbs .img-thumb img').each(function () {
                if ($(this).outerHeight() > tallest.outerHeight()) {
                    tallest = $(this);
                }
            });
            var activeSlideIndex = "";
            $('.multi-media-image-gallery .slick-slide').each(function () {
                if ($(this).hasClass('slick-active')) {
                    activeSlideIndex = $(this).attr('index');
                }
            });

            $('.gallery-navigation .thumbs .img-thumb').each(function (index) {
                $(this).removeClass('slick-active').css('height', tallest.outerHeight());
                if ($(this).attr('index') == activeSlideIndex) {
                    $(this).addClass('slick-active');
                }
            });
            $('.slick-slide').not($('.slick-initialized .slick-slide')).addClass('multi-media-item');
        };//End initfunction
        /* Multimedia image gallery navigation */

        $('.gallery-navigation .thumbs').slick({
            slide: '.img-thumb',
            slidesToShow: 8,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            nextArrow: $('.gallery-navigation .thumbs-next'),
            prevArrow: $('.gallery-navigation .thumbs-next'),
            accessibility: true,
            centerMode: false,
            asNavFor: '.multi-media-image-gallery',
            focusOnSelect: true,
            initialSlide: 1,
            onSetPosition: initFunction,
            responsive: [
                {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        nextArrow: $('.gallery-navigation .thumbs-next'),
                        prevArrow: $('.gallery-navigation .thumbs-next'),
                        onSetPosition: initFunction
                    }
                },
                {
                    breakpoint: 720,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        nextArrow: $('.gallery-navigation .thumbs-next'),
                        prevArrow: $('.gallery-navigation .thumbs-next'),
                        onSetPosition: initFunction
                    }
                },
                {
                    breakpoint: 1240,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1,
                        nextArrow: $('.gallery-navigation .thumbs-next'),
                        prevArrow: $('.gallery-navigation .thumbs-next'),
                        onSetPosition: initFunction
                    }
                },
                {
                    breakpoint: 2000,
                    settings: {
                        slidesToShow: 8,
                        slidesToScroll: 1,
                        nextArrow: $('.gallery-navigation .thumbs-next'),
                        prevArrow: $('.gallery-navigation .thumbs-next'),
                        onSetPosition: initFunction
                    }
                }
            ],
            onInit: initFunction('onInit')
        });//end gallery navigation slick

        // In the big image variation of the Landing 1 page. 
        // Ensures that the leader text block is at least as 
        // tall as the inner nav when the inner nav is visible.
        window.onresize = function () {
            if ($('.big-image-row .inner-nav').css('display') === 'block') {
                var h1 = $('.big-image-row .landing-leader-text').outerHeight();
                var h = $('.big-image-row .inner-nav').outerHeight();
                if (h > h1) {
                    h = h + 'px';
                    $('.big-image-row .landing-leader-text').css({'height': h});
                }
            }

        }
        
    });//End on document.ready() 
})($); //end function
function paginationFiveNextPrevious(current) {
  	
	var pagesLength = jQuery('.pagination li[data-page]').length;
  	  
	if(current >= 8 && current <= pagesLength - 4 && pagesLength > 10) {
		jQuery('.pagination li[data-page]').addClass('hide');
      	jQuery('.pagination li[data-page]').slice(current - 5, parseInt(current) + 4).removeClass('hide');
		//for(var i = current - 5; i <= parseInt(current) + 4; i++) {
		//	jQuery('.pagination li[data-page=' + i + ']').removeClass('hide');
		//}
	} else if(current >= pagesLength - 4) { 
		jQuery('.pagination li[data-page]').removeClass('hide');
		jQuery('.pagination li[data-page]:nth-last-child(n12)').addClass('hide');

    } else {
		jQuery('.pagination li[data-page]').removeClass('hide');
		jQuery('.pagination li[data-page]:nth-child(n12)').addClass('hide');
	}
}
function formatPagination(currentPage) {

    if (undefined === currentPage) {
        var currentPage = 1;
    }

    // hide all page numbers
    jQuery('.pagination li[data-page]').addClass('hide');

    var totalPages = jQuery('.pagination li[data-page]').length;

    jQuery('.pagination li[data-page=1]').removeClass('hide');
    jQuery('.pagination li[data-page=' + totalPages + ']').removeClass('hide');

    jQuery('.pagination li[data-page]').each(function (index) {

        //set page dislay range
        var previousPages = parseInt(currentPage) - 3;
        var nextPages = parseInt(currentPage) + 1;

        // remove numbers not in current set range
        if (index >= previousPages && index <= nextPages) {
            jQuery(this).removeClass('hide');
        }

        //add first set of dots
        if (index > 4 && jQuery('.dots-first').length == 0) {
            jQuery(".pagination li[data-page]:nth-child(2)").after("<li class='pagination-dots dots-first' ><a >...</a></li>");
        }

        //add last set of dots
        if (index < (parseInt(totalPages) - 4) && jQuery('.dots-last').length == 0) {
            jQuery(".pagination li[data-page]:nth-last-child(2)").before("<li class='pagination-dots dots-last' ><a >...</a></li>");
        }

    });

    // remove first set of dots if in start range
    if (currentPage <= 4) {
        jQuery('.dots-first').remove();
    }

    // remove last set of dots if in end range
    if (currentPage >= (parseInt(totalPages) - 4)) {
        jQuery('.dots-last').remove();
    }
}
/**
 * Script to test for IE browser version
 * - then show ie-ribbon message for IE<10  
 * - added 12/3/2015 - by Wits University
 * **/
navigator.sayswho = (function () {
    var ua = navigator.userAgent, tem,
            M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null)
            return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null)
        M.splice(1, 1, tem[1]);
    return M.join(' ');
})();
var navigator_says = navigator.sayswho;
var browser_version = navigator_says.split(" ");//alert(navigator_says);
if ((browser_version[0] == "IE") || (browser_version[0] == "MSIE"))
{

    if (browser_version[1] < 9)
    {
        if (window.name !== "true")
        {
            alert("This site is best viewed with either  Firefox,  Chrome or IE version 10 and above(with Compatibility View off). If you are having problems viewing this site, please upgrade or change your browser. Thank you.");
            window.name = "true";
        }
    }
    /* 9 =< IE < 10*/
    else if ( browser_version[1] < 10 )
    {
        $(".ie-ribbon").text("This site is best viewed with either  Firefox,  Chrome or IE version 10 and above(with Compatibility View off). If you are having problems viewing this site, please upgrade or change your browser. Thank you.")
        if (window.name === "true")
        {
            $(".ie-ribbon").hide();
        }
        else
        {
            $(".ie-ribbon").show(function () {
                window.name = "true";
            });
        }
    }
}
/* End script for IE<10 */

/*script for /access/client.ovpn/ */
$(document).ready(function () {
                $('#ovpn_link').click(function (e) {
                    e.preventDefault();
                    alert('Please right click and use \'Save Target/Link As\'.');
                });
            });
/* end of script for /access/client.ovpn/ */


/* Site search slide up/slide down in mobile */
$( document ).ready(function() {
  setTimeout(function(){
	$('.mobile-header .search-toggle').on('click', function () {
      $('.mobile-site-search').toggleClass('mob-search-visible');
    });
   }, 300);
});
        
/* 2021 Redesign of homepage header */
  const searchDisplayBtn = document.querySelector('.search-display');
  const searchBar = document.querySelector('.search-hidden');
  if (searchDisplayBtn && searchBar) {
    searchDisplayBtn.addEventListener('click', function() {
      searchBar.classList.toggle('showSearchBar')
    })
  }

/* PSRR-13777 */

const newsSpan = document.querySelectorAll('.news-events .news-container span.t4-title');
const eventsSpan = document.querySelectorAll('.news-events .events-container span.t4-title');
const removeEmptySpan = (elements) => {
  if (elements.length > 1) {
    elements.forEach(span => {
      (!span.classList.contains('t4-old-title') && !span.classList.contains('t4-new-title')) ? span.remove() : null
    })
  }
}
newsSpan ? removeEmptySpan(newsSpan) : null
eventsSpan ? removeEmptySpan(eventsSpan) : null






