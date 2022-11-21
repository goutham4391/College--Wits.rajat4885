
// Wits custom Javascripts
//Michael Mason TERMINALFOUR December 2014

(function (jQuery) {
    /* On homepage set the heights of feature blocks so all are the same height
     Find the tallest and make each that height if it is not that height */

    fallbackObjectFit();
    $(document).ready(function () {
        if ($('blockquote').length) {
            $('blockquote').prepend('<i class="fa fa-quote-right"></i>');
        }
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
            prevArrow: '<button class="slick-buttons slider-next"><i class="fa fa-angle-right"></i></button>',
            nextArrow: '<button class="slick-buttons slider-prev"><i class="fa fa-angle-left"></i></button>'
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
        $('.feature-cards.slider .content-row').slick({
            slide: '.feature-card',
            dots: false,
            slidesToShow: 4,
            accessibility: true,
            nextArrow: '<button type="button" class="slick-button slick-next-new" ><i class="fa fa-angle-right"></i></button>',
            prevArrow: '<button type="button" class="slick-button slick-prev-new" ><i class="fa fa-angle-left"></i></button>',
            responsive: [
                {
                    breakpoint: 520,
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
                        slidesToScroll: 1
                    }
                }
            ]
        });
        $( '.slick-buttons' ).wrapAll( '<div class="slick-controls"></div>');
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


/**
 * At the moment selective-output does not work the way it supposed to 
 * see CS-40043
 * script is to add orcid url 
 * script below that adds publications from public orcid api onto the site
 * - added 2/10/2017 - by Wits University
 * **/
var the_orcid = "";
$(document).ready(function () {
  		if (!($("#orcid_id").length))
        {
        	return;
        }
        var orcid = $("#orcid_id").text();
        the_orcid = orcid.substring(orcid.length - 19, orcid.length);
        var the_url = "http://orcid.org/" + the_orcid;
        $("#orcid_id").html("<p><a target='_blank'  href='http://orcid.org'><img alt='ORCID logo' src='http://orcid.org/sites/default/files/images/orcid_16x16.png' width='16' height='16' hspace='4' /></a> <a target='_blank' href='"+the_url+"'>"+the_url+"</a></p>");
    });




 $(document).ready(function () {
                /*var the_add = window.location.href;
                 if (!(the_add.includes("orcidtest")))
                 {
                 return;
                 }*/

                if (!($("#orcid_id").length))
                {
                    return;
                }
   
   				$.ajax({
                    headers: {
                        Accept: "application/json"
                    },
                    type: "GET",
                    url: "https://pub.orcid.org/v2.0/" + the_orcid + "/keywords",
                    success: function (data) {
                        if (data["keyword"].length > 0) {
                            var kw_string="";
                            $.each(data["keyword"], function (i, each_kw) {                                
								kw_string += each_kw["content"];
								if (i<data["keyword"].length-1) {
									kw_string += ", ";
								}
                            });
                            if (kw_string)
                            {
                               $("#orcid_keyword_hidden").show();
                                $('#orcid_keyword').html(kw_string); 
                            }
                            
                        }
                    }
                });
   
   				$.ajax({
                    headers: {
                        Accept: "application/json"
                    },
                    type: "GET",
                    url: "https://pub.orcid.org/v2.0/" + the_orcid + "/researcher-urls",
                    success: function (data) {
                        if (data) {
                            var web_string="";
                            $.each(data["researcher-url"], function (i, each_url) {
                                web_string += "<a href='"+each_url["url"].value+"' target='_blank'>"+each_url["url-name"]+"</a>";
                              	if (i<data["researcher-url"].length-1) {
									web_string += " | ";
								}
                            });
                            if (web_string)
                            {
                               $("#other_websites_hidden").show();
                               $('#other_websites').html(web_string); 
                            }
                        }
                    }
                });

                $.ajax({
                    headers: {
                        Accept: "application/json"
                    },
                    type: "GET",
                    url: "https://pub.orcid.org/v2.0/" + the_orcid + "/personal-details",
                    success: function (data) {
                        if (data) {
                            if (!data.biography["content"])
                            {
                                return;
                            }
                            $("#bio_orcid_hidden").show();
                            $("#bio_from_orc_id").html(data.biography["content"].replace(/(?:\r\n|\r|\n)/g, '<br />'));
                            return;
                        }
                    }
                });



                var the_work_string = "";
                var the_api_url = "https://pub.orcid.org/v2.0/" + the_orcid + "/activities";
                $.ajax({
                    headers: {
                        Accept: "application/json"
                    },
                    type: "GET",
                    url: the_api_url,
                    success: function (data) {
                        if (data) {

                            var number_of_works = data.works.group.length;
                            if (number_of_works > 1)
                            {

                                $("#orcid_hidden").show();
                                $("#works_link").append("(" + number_of_works + ")");

                                $.each(data.works.group, function (i, each_work) {

                                    var the_title = each_work["work-summary"][0].title.title.value;
                                    the_work_string += "</br><b><i>" + the_title + "</i></b><span id='work_" + i + "'></span>";

                                    var the_ex_ids = "";
                                    var work_code = each_work["work-summary"][0]["put-code"];
                                    getJournalTitle(the_orcid, work_code, i);

                                    if (each_work["work-summary"][0]["external-ids"]["external-id"])
                                    {
                                        $.each(each_work["work-summary"][0]["external-ids"]["external-id"], function (j, each_ex_id) {
                                            var ex_id_type = each_ex_id["external-id-type"].toUpperCase();
                                            var ex_id_value = each_ex_id["external-id-value"];
                                            if (each_ex_id["external-id-url"])
                                            {
                                                var ex_id_url = each_ex_id["external-id-url"].value;
                                                //alert (ex_id_url);
                                                var ex_id_string = "</br>" + ex_id_type + ": <a target='_blank' href='" + ex_id_url + "'>" + ex_id_value + "</a>";

                                            } else {
                                                var ex_id_string = "</br>" + ex_id_type + ": " + ex_id_value;
                                            }
                                            the_ex_ids += ex_id_string;
                                        });
                                    }

                                    if (each_work["work-summary"][0]["publication-date"])
                                    {
                                        if (each_work["work-summary"][0]["publication-date"].year)
                                        {
                                            var pub_year = each_work["work-summary"][0]["publication-date"].year.value;
                                            the_work_string += "</br>" + pub_year;
                                        }
                                        if (each_work["work-summary"][0]["publication-date"].month)
                                        {
                                            var pub_month = each_work["work-summary"][0]["publication-date"].month.value;
                                            the_work_string += "/" + pub_month;
                                        }
                                        if (each_work["work-summary"][0]["publication-date"].day)
                                        {
                                            var pub_day = each_work["work-summary"][0]["publication-date"].day.value;
                                            the_work_string += "/" + pub_day;
                                        }
                                    }
                                    var the_type = " | " + each_work["work-summary"][0].type.replace("_", "-").toLowerCase();
                                    the_work_string += the_type;

                                    the_work_string += the_ex_ids + "</br></br><hr>";

                                    the_title = "";
                                    the_type = "";
                                    the_ex_ids = "";
                                    pub_year = "";

                                    $("#result_from_orc_id").html(the_work_string);

                                });

                            }
                        }
                        
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        $("#result_from_orc_id").text("error: " + textStatus);
                    }
                });

            });
            
           
            
            function getJournalTitle(orcid_id, journal_id, i) {
                var the_work_link = "https://pub.orcid.org/v2.0/" + orcid_id + "/work/" + journal_id;
                $.ajax({
                    headers: {
                        Accept: "application/json"
                    },
                    type: "GET",
                    url: the_work_link,
                    success: function (data) {
                        if (data) {
                            if (data["journal-title"])
                            {
                                var the_journal_title = "<br/>" + data["journal-title"].value;
                                $("#work_" + i).append(the_journal_title);
                            }


                        }
                    }
                });
            }
            /* End script for orcid */


$( document ).ready(function() {
    $.fn.matchHeight._afterUpdate = function(event, groups) {
        $(groups).each(function(){
            var that = $(this);
            if(that[0].elements[0].parentNode.classList.contains('slick-track')) {
                var height = $(that[0].elements[0].parentNode).outerHeight();
                var buttons = $(that[0].elements[0].parentNode.parentNode.parentNode.querySelectorAll('.slick-button'));
                var buttonHeight = $(buttons[0]).outerHeight();
                var top = (height/2) - (buttonHeight/2);
                buttons.css('top', top + 'px');
            }
        });
    }
  $('.feature-cards:not(.slider) .content-row').each(function() {
    $(this).children('.feature-card').matchHeight();
  });
  $('.news-events .news-container').each(function() {
    $(this).children('.homepage-article').matchHeight();
  });
  $('.feature-cards .content-row .slick-list .slick-track').each(function() {
    $(this).children('.feature-card').matchHeight();
  });

  $('.card-style-result').each(function() {
    $(this).children('.search-result').matchHeight();
  });
});

function resizeVideos() {
    $('iframe[src*="youtube"],iframe[src*="vimeo"], .image-content, .card-style-result .search-result .course-image').each(function(){
        var height = $(this).width()/16*9;
        $(this).css('height',height-2 + 'px');
    });
}
$( document ).ready(function() {
    resizeVideos();
});
$( window ).resize(function() {
    resizeVideos();
    overlayPosition();
});
$( document ).ready(function() {
    
    overlayPosition();
    window.dispatchEvent(new Event('resize'));
    $('.modal .close').on('click', function(){
        closeModal();
    });

    $('.modal').on('click', function(e){
        if($(e.target).hasClass('modal')) {
            closeModal();
        }
    });
    document.addEventListener('keyup', function(){
        if(event.keyCode == 27) {
            closeModal();
        }
    });
    $('.video-trigger').on('click', function(){
        $('.modal').addClass('active');
        $('body').addClass('no-scroll');
        var id = $(this).attr('data-video-id');
        $('.modal-content').append('<iframe width="1280" height="720" src="https://www.youtube.com/embed/' + id + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        resizeVideos();
    });
    $('.v-tour').on('click', function(){
        $('.modal').addClass('active v-tour');
        $('body').addClass('no-scroll');
        $('.modal-content').append('<img width="100%" height="100%" src="//walkinto.in/socialthumbnail/Z1Jr-rAP0mb1xkr-HCvRX/0" data-type="dynamiciframe" data-src="//walkinto.in/tour/Z1Jr-rAP0mb1xkr-HCvRX" data-width="100%" data-height="600"><script async src="//walkinto.in/js/loadtour-nonblocking.js"></script>');
    });
    $('.notice').on('click', '.close',function(){
        $(this).parents('.notice').addClass('closed');
    });
  
	if($('.featuresx3.features-row.link-boxes').length) {
    	$('.featuresx3.features-row.link-boxes .feature-title h2').matchHeight();
    }
});

function overlayPosition() {
    $('.slick-slides .text-overlay').each(function(){
        
        var overlay = $(this);
        var overlayHeight = $(overlay).outerHeight();
        var slideHeight = $(overlay).parents('.slick-track').outerHeight();
       
        overlay.css('top', (slideHeight - overlayHeight) + 'px')
    });
}
function closeModal() {
    $('.modal').removeClass('active');
    $('.modal-content').empty();
    $('body').removeClass('no-scroll');
}

function testCSS(property, value) {
    return window.CSS && window.CSS.supports && window.CSS.supports(property, value);
}
function fallbackObjectFit() {
    if(!testCSS('object-fit', 'cover')) {
        $('.feature-cards .feature-card').each(function(){
            var imgContainer = $(this).find('.image-content');
            var img = imgContainer.find('img');
            var imgSrc = img.attr('src');
            imgContainer.css({'background-position':'center','background-size':'cover','background-image':'url(' + imgSrc + ')'});
            img.remove();
        });
        $('.search-result').each(function(){
            var imgContainer = $(this).find('.course-image');
            var imgContainer = $(this).find('.image-content');
            var imgSrc = img.attr('src');
            imgContainer.css({'background-position':'center','background-size':'cover','background-image':'url(' + imgSrc + ')'});
            img.remove();
        });
    }
}
noticeMargin();
function noticeMargin() {
    if($('.notice:not(.closed)').length) {
        var height = $('.notice:not(.closed)').outerHeight() + 16;
        $('.notice:not(.closed)').siblings('.off-canvas-wrap').css('margin-top', height + 'px');
    }
}











// Cookie Functions
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + ";" + "path=/";
}
 
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}
 
// Emergency Banner
function checkEmergency() {
    var EmCookieSet = getCookie('emergency').split(',');
     
    var checkBanner = $.getJSON( "/site-wide-notices/emergency-notice.json", function(data) {
        // Ignore dummy element
        if (data.notices.length > 1) {
            // Create an array containing the IDs of all the notices already output on the page
            var noticesOnPage = $('.notice[data-id]').map(function() {
                return $.map($(this).data(), function(v) {
                    return v;
                });
            }).get();
             
            // Iterate over each notice in the JSON
            for (i = 0; i < data.notices.length - 1; i++) {
               
                // Checks if the notice is in the cookie
                var noticeInCookie = ($.inArray(data.notices[i].id, EmCookieSet) < 0)?false:true;
                // Checks if notice is already on the page
                var noticeOnPage = ($.inArray(data.notices[i].id, noticesOnPage) < 0)?false:true;
                // Checks if notice is of type 'emergency;
                var isEmergency = (data.notices[i].noticetype == 'emergency')?true:false;

               
                // Output the notice only if:
                // this notice is not in the cookie and is not on the page OR
                // the notice is in the cookie AND not on the page already but is also an Emergency notice
                if((!noticeInCookie && !noticeOnPage) || (noticeInCookie && !noticeOnPage && isEmergency)) {
                    $('.emergencynotice').append('<section class="notice ' + data.notices[i].noticetype + '" data-id="' + data.notices[i].id + '"><div class="content-row"><a class="content" href="' + data.notices[i].url + '">' + data.notices[i].message + '</a><button class="close" data-id="' + data.notices[i].id + '">Close</button></div></section>');
                     
                    // Remove ability to dismiss "Emergency" notices
                    if (isEmergency) {
                        $('button[data-id="'+data.notices[i].id+'"]').remove();
                    }
                }
            }
           
            // Hide notices on click
            $('.notice button').on('click', function(){
                var thisId = $(this).attr('data-id');
                var parentNotice = $(this).parents('.notice').addClass('closed');
                 
                // Double checks notice type before addign to cookie
                if (!parentNotice.hasClass('emergency')) {
                    var currentCookie = getCookie('emergency');
                   
                    if (currentCookie == '') {
                        setCookie('emergency',thisId,1);
                    }
                    else {
                        var cookieArray = currentCookie.split(',');
                        if ($.inArray(thisId, cookieArray) < 0) {
                            setCookie('emergency',currentCookie +',' + thisId,1);
                        }
                    }
                }
            });
        }
    }).fail(function() {
        console.log( "Failed to get emergency notice JSON File" );
    })
    setTimeout(function(){
        checkEmergency();
    }, 10000); // Modify this number to change how often the json file is polled
}
$(document).ready(function () {
    checkEmergency()
});


// Remove empty feature blocks from WITS100

let featureBlocks = document.querySelectorAll('.feature-block');

featureBlocks.forEach(function(block) {
    if (block.getBoundingClientRect().height < 10) {
        block.style.display = 'none';
    }         
})

// Sort Staff Directory
function sortStaff() {
    $('[data-surname]').sort(function(a, b) { 
        if (a.getAttribute('data-surname').toLowerCase() < b.getAttribute('data-surname').toLowerCase()) { 
            return -1;
        } else {
            return 1;
        }
    }).appendTo('#staff-list');
}

$(window).on('load', sortStaff);
$('.ln-letters').children().on('click', sortStaff);

// Display Interest for each Person based on ORCID
$('.orcid_keywords').each(function() {
    if ($(this).attr('id')) {
        var orcidIdAttr = $(this).attr('id');
        var the_orcid = '';
        if (orcidIdAttr.length > 19) {
            the_orcid = orcidIdAttr.substring(orcidIdAttr.length - 19, orcidIdAttr.length);
        } else {
            the_orcid = orcidIdAttr;
        }
        orcidIdAttr = $(this).attr('id', the_orcid);
        console.log("https://pub.orcid.org/v2.0/" + the_orcid + "/keywords")
        $.ajax({
            headers: {
                Accept: "application/json"
            },
            type: "GET",
            async: false,
            url: "https://pub.orcid.org/v2.0/" + the_orcid + "/keywords",
            success: function (data) {
                if (data["keyword"].length > 0) {
                    console.log(data["keyword"][0]["source"]["source-orcid"]["path"]);
                    var get_orcid = data["keyword"][0]["source"]["source-orcid"]["path"]
                    var kw_string="";
                    console.log(kw_string);
                    $.each(data["keyword"], function (i, each_kw) {                                
                        kw_string += each_kw["content"];
                        if (i<data["keyword"].length-1) {
                            kw_string += ", ";
                        }
                    });
                    if (kw_string) {   
                        $('#' + get_orcid).html(kw_string).removeClass('orcid_hide');
                        $('#' + get_orcid).prev().removeClass('orcid_hide');
                        $('#' + get_orcid).next().removeClass('orcid_hide');
                    }
    
                }
            }
        });
    }
})


