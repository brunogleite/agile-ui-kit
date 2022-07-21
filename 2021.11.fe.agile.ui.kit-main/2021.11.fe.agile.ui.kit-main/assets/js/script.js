
/* MENU ITEM ACTIVE */

$( document ).ready(function() {
    if($('body').hasClass('page-home')) {
        //console.log("show!!!")
        $( ".inner-menu-list li:nth-child(1)" ).addClass( "selected");
      }

    if($('body').hasClass('page-about')) {
        //console.log("show!!!")
        $( ".inner-menu-list li:nth-child(2)" ).addClass( "selected");
      }

    if($('body').hasClass('page-services')) {
        //console.log("show!!!")
        $( ".inner-menu-list li:nth-child(3)" ).addClass( "selected");
      }

    if($('body').hasClass('page-cases')) {
        $( ".inner-menu-list li:nth-child(4)" ).addClass( "selected");
      }
});


/******HOMEPAGE****/

//Scrollicon animation
var $window = $(window);
var windowHeight = $window.outerHeight();
var windowTop = $window.scrollTop();

//When refresh page on the middle
if (windowTop > 5) {
    $('#scroll-icon').css('opacity', 0);
}
//When scroll
$window.scroll(function () {
    $('#scroll-icon').css('opacity', 0);
});

/******CASES*********/
if (window.matchMedia("(max-width: 900px)").matches) {
    var nextCases = new Swiper('#next-cases .swiper-container', {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }

    });
};

