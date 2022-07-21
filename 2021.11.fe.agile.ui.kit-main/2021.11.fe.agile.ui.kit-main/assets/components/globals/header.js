class Header extends HTMLElement{
    constructor(){
        super()
        .innerHTML = `
        
        <header id="menu">

          <!-- MENU BAR -->

          <div id="menu-bar" class="w-full">
            <div id="menu-inner-wrapper">
              <div id="menu-button">
                <div id="menu-container">
                  <svg version="1.1" id="Burger" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px" y="0px" viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;" xml:space="preserve">
                    <path id="Path2" class="st0" d="M30,24.5v1c0,0.3-0.2,0.5-0.4,0.5c0,0,0,0-0.1,0h-19c-0.3,0-0.5-0.2-0.5-0.4c0,0,0,0,0-0.1v-1
                        c0-0.3,0.2-0.5,0.4-0.5c0,0,0,0,0.1,0h19C29.8,24,30,24.2,30,24.5C30,24.5,30,24.5,30,24.5z" />
                    <path id="Path1" class="st0" d="M29.5,14h-19c-0.3,0-0.5,0.2-0.5,0.4c0,0,0,0,0,0.1v1c0,0.3,0.2,0.5,0.4,0.5c0,0,0,0,0.1,0h19
                        c0.3,0,0.5-0.2,0.5-0.4c0,0,0,0,0-0.1v-1C30,14.2,29.8,14,29.5,14C29.5,14,29.5,14,29.5,14z" />
                  </svg>
                </div>
              </div>
              <div id="logo">
                <a href="index.html">
                  <img src="./assets/imgs/aG.svg" alt="AG" />
                </a>
              </div>
              <div id="contact-wrapper">
                <a href="javascript;" class="href-right-arrow-wrapper">
                  <div class="custom-href grey href-underlined href-right-arrow" alt="get in touch">
                    Get in touch
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!-- CONTACT -->

          <div id="contact-us-wrapper">
            <div id="contact-us">
              <div class="w-80vw-grid">
                <div class="w-70-p left-section">
                  <div class="title-line flex-container">
                    <h2 class="font-regular">
                      <div class="line-1">
                        <span class="inline-block dash visible-desktop">—</span>
                        <span class="inline-block"><span class="inline-block dash visible-mobile">—</span> Wow, We are glad
                          <span class="outlined-coral-glyph">
                            <span class="text"></span>
                            <span class="element">
                              <svg xmlns="http://www.w3.org/2000/svg" width="179" height="82" viewBox="0 0 179 82">
                                <path fill="none" stroke="#EF6F6C" stroke-width="7.329"
                                  d="M756.392255,542.182816 C756.392255,542.182816 680,547.429018 680,571.847174 C680,583.679689 694.697185,592.01984 715.474014,596.885087 C765.493377,608.597968 850.749501,600.170792 851,571.847174 C851.243609,543.93155 785.970973,532.031998 725.759812,528"
                                  transform="translate(-676 -524)" />
                              </svg>
                            </span>
                        
                        </span>
                      </div>
                      <div class="line-2 text-center">
                        <span class="inline-block tag-line">you got here.</span>
                      </div>
                    </h2>
                  </div>
                  <!--Success submited form message, it become visible by adding of ".success" class to .left-section-->
                  <div id="success-message">
                    <div class="title">
                      Thank you for your contact.
                    </div>
                    <div class="text">
                      We will reply to you, as soon as possible.
                    </div>
                  </div>
                  <!--End of Success submited form message-->
                  <div class="text-line flex-container">
                    <div class="w-60-p">
                      <div class="text-wrapper">
                        <p>Feel free to contact us about your digital project.</p>
                      </div>
                    </div>
                  </div>
                  <form action="" method="">
                    <div class="subtitle">Get in touch</div>
                    <div class="flex-container">
                      <div class="w-50-p">
                        <div class="input-container">
                          <input type="text" id="name" placeholder="Name">
                          <!--Error message field. You can change the error message. To enable just add ".error". class to .input-container parent-->
                          <span class="error-message">Required field</span>
                        </div>
                        <div class="input-container">
                          <input type="email" id="email" placeholder="Email">
                          <span class="error-message">Required field</span>
                        </div>
                      </div>
                      <div class="w-50-p">
                        <div class="input-container">
                          <input type="text" id="about" placeholder="about">
                          <span class="error-message">Required field</span>
                        </div>
                        <div class="input-container">
                          <input type="text" id="phone-number" placeholder="Phone Number">
                          <span class="error-message">Required field</span>
                        </div>
                      </div>
                    </div>
                    <div class="subtitle">How can we help?</div>
                    <div class="w-95-p">
                      <div class="textarea-wrapper">
                        <div class="input-container textarea">
                          <span class="placeholder">Your Message</span>
                          <textarea id="message"></textarea>
                          <span class="error-message">Required field</span>
                        </div>
                      </div>
                      <div class="form-submit-button">
                        <a href="javascript;" id="submit-form"
                          class="custom-href href-underlined light-blue text-right">Send</a>
                      </div>
                    </div>
                  </form>
                </div>
                
                <div class="right-section-wrapper o-hidden">
                <div class="right-section-bar"></div>
                  <div class="right-section">
                    <div class="contact-wrapper">
                      <div id="address">
                        Agile Kit<br />
                        Street Name 1010<span class="br-desktop"> San Francisco, USA</span>
                      </div>
                      <div class="contact-item-wrapper phone">
                        <div class="label">Phone</div>
                        <a href="tel:+41715082481" class="href-wo-underline">+41. 71 508 24 81</a>
                      </div>
                      <div class="contact-item-wrapper email">
                        <div class="label">General</div>
                        <a href="mailto:hallo@ymc.ch" class="href-w-underline">hallo@ymc.ch</a>
                      </div>
                      <div class="contact-item-wrapper email">
                        <div class="label">For new business enquiries,<br>
                          Thomas will help you.</div>
                        <a href="mailto:thomas@ymc.ch" class="href-w-underline">thomas@ymc.ch</a>
                      </div>
                    </div>
                    <div class="next-page-href-wrapper">
                      <div class="flex-container">
                        <div class="contact-white"><a class="h3 lh-3 next-page-href">
                            Let's talk!
                            </span>
                          </a>
                        </div>
                      </div>
      
                    </div>
                    <div class="close-wrapper"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- MENU -->

          <div id="menu-page">
            <div class="menu-page-container w-full">
              <div class="w-92vw-grid">
                <div class="w-50-p">
                  <div id="menu-list-principal">
                    <ul class="inner-menu-list">
                      <li class="menu-principal-item menu-home">
                        <a href="index.html"><span>Home</span></a>
                      </li>
                      <li class="menu-principal-item menu-about">
                        <a href="about.html"><span>About</span></a>
                      </li>
                      <li class="menu-principal-item menu-services">
                        <a href="services.html"><span>Services</span></a>
                      </li>
                      <li class="menu-principal-item menu-cases">
                        <a href="case-studies.html"><span>Case Studies</span></a>
                      </li>
                      <li class="menu-principal-item menu-sm">
                        <a href="javascript;" class="open-contacts"><span>Contact</span></a>
                      </li>
                      <li class="menu-principal-item menu-sm">
                        <a href="" ><span>Hiring</span></a>
                      </li>
                    </ul>
                  <!--
                  <div id="menu-list-secondary">
                    <a href="javascript;" class="open-contacts menu-secondary-item"><span>Contact</span></a>
                    <a href="hiring.html" class="menu-secondary-item"><span>Hiring</span></a>
                  </div>
                  -->
                  <div id="menu-bottom">
                    <div id="menu-bottom-social-wrapper">
                      <a href="" class="social-icon-wrapper white social-twitter"><svg xmlns="http://www.w3.org/2000/svg"
                          width="24" height="20" viewBox="0 0 24 20">
                          <path 
                            d="M21.54,4.94047619 L21.54,5.5952381 C21.54,12.2619048 16.56,20 7.56,20 C4.74,20 2.16,19.1666667 0,17.7380952 C0.36,17.797619 0.78,17.797619 1.2,17.797619 C3.48,17.797619 5.64,16.9642857 7.32,15.6547619 C5.16,15.5952381 3.36,14.1666667 2.7,12.1428571 C3,12.202381 3.3,12.2619048 3.6,12.2619048 C4.02,12.2619048 4.5,12.202381 4.92,12.0833333 C2.64,11.6071429 0.96,9.58333333 0.96,7.14285714 L0.96,7.02380952 C1.62,7.38095238 2.4,7.61904762 3.18,7.67857143 C1.81911663,6.69447883 1.01596317,5.12305313 1.02,3.45238095 C1.02,2.5 1.26,1.66666667 1.68,0.892857143 C4.08,3.92857143 7.74,5.95238095 11.82,6.19047619 C11.76,5.83333333 11.7,5.41666667 11.7,5.05952381 C11.7,2.26190476 13.92,0 16.62,0 C18.06,0 19.32,0.595238095 20.22,1.60714286 C21.36,1.36904762 22.38,0.952380952 23.34,0.357142857 C22.98,1.54761905 22.2,2.55952381 21.18,3.1547619 C22.2,3.03571429 23.1,2.73809524 24,2.38095238 C23.34,3.39285714 22.5,4.22619048 21.54,4.94047619" />
                        </svg></a>
                      <a href="" class="social-icon-wrapper white social-facebook"><svg xmlns="http://www.w3.org/2000/svg"
                          width="11" height="24" viewBox="0 0 11 24">
                          <path 
                            d="M7.14000028,24 L2.4000001,24 L2.4000001,12 L0.0600000024,12 L0.0600000024,7.86000031 L2.4000001,7.86000031 L2.4000001,5.40000021 C2.4000001,2.04000008 3.72000015,-1.77635684e-15 7.5000003,-1.77635684e-15 L10.6800004,-1.77635684e-15 L10.6800004,4.14000016 L8.70000035,4.14000016 C7.20000029,4.14000016 7.14000028,4.74000019 7.14000028,5.82000023 L7.14000028,7.92000031 L10.7400004,7.92000031 L10.3200004,12 L7.14000028,12 L7.14000028,24" />
                        </svg></a>
                      <a href="" class="social-icon-wrapper white social-github"><svg xmlns="http://www.w3.org/2000/svg"
                          width="26" height="25" viewBox="0 0 26 25">
                          <path fill-rule="evenodd"
                            d="M13,0 C5.8175,0 0,5.73523743 0,12.816173 C0,18.4873296 3.72125,23.2773743 8.88875,24.9755172 C9.53875,25.0876587 9.7825,24.7031735 9.7825,24.366749 C9.7825,24.0623649 9.76625,23.0530913 9.76625,21.9797368 C6.5,22.5724848 5.655,21.1947462 5.395,20.4738364 C5.24875,20.1053715 4.615,18.9679361 4.0625,18.663552 C3.6075,18.4232487 2.9575,17.8305007 4.04625,17.8144805 C5.07,17.7984603 5.80125,18.7436531 6.045,19.1281383 C7.215,21.0665844 9.08375,20.5218971 9.83125,20.1854725 C9.945,19.3524213 10.28625,18.7917137 10.66,18.4713094 C7.7675,18.1509051 4.745,17.0455101 4.745,12.143324 C4.745,10.7495651 5.24875,9.59610956 6.0775,8.69897745 C5.9475,8.37857312 5.4925,7.06491539 6.2075,5.30269159 C6.2075,5.30269159 7.29625,4.96626705 9.7825,6.61634933 C10.8225,6.32798544 11.9275,6.18380349 13.0325,6.18380349 C14.1375,6.18380349 15.2425,6.32798544 16.2825,6.61634933 C18.76875,4.95024684 19.8575,5.30269159 19.8575,5.30269159 C20.5725,7.06491539 20.1175,8.37857312 19.9875,8.69897745 C20.81625,9.59610956 21.32,10.7335449 21.32,12.143324 C21.32,17.0615304 18.28125,18.1509051 15.38875,18.4713094 C15.86,18.8718148 16.26625,19.6407852 16.26625,20.8423014 C16.26625,22.5564645 16.25,23.9342031 16.25,24.366749 C16.25,24.7031735 16.49375,25.1036789 17.14375,24.9755172 C22.27875,23.2773743 26,18.4713094 26,12.816173 C26,5.73523743 20.1825,0 13,0 Z" />
                        </svg></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lang-wrapper">
                <div class="lang active" data-lang="eng"><a href="">Eng</a></div>
                <div class="lang" data-lang="deu"><a href="">Deu</a></div>
              </div>
              <div class="menu-page-container-bar"></div>
            </div>
          </div>
        </header>
        `
    }
   
}

customElements.define('section-header', Header);

/**********CONTACT************/

// Contacts animation
var contactsTimeline = gsap.timeline({
  onStart: function () {
      $body.addClass('contacts-opened');
  },
});

contactsTimeline
  .slideInFromRight("#contact-us-wrapper .right-section", { delay: 0.5 })

contactsTimeline.pause();

// Open contacts section
var $body = $('body');
var $contactsButton = $('#contact-wrapper, .open-contacts');
$contactsButton.on('click', function (e) {
  e.preventDefault();
  $('#menu').addClass('menu-sticky menu-show');
  if (menuIsOpen) {
      toggleMenu();
  }
  contactsTimeline.restart();
});

// Close contact section
var $contactsCloseButton = $('#contact-us-wrapper .close-wrapper');
$contactsCloseButton.on('click', function () {    
  $body.removeClass('contacts-opened');
});

// Click textarea
if (window.matchMedia("(min-width: 901px)").matches) {
  var $contactsTextarea = $('#contact-us-wrapper .textarea-wrapper');
  $contactsTextarea.on('click', function () {
      $(this).find('.placeholder').hide();
  });

  $contactsTextarea.on('focusout', function () {
      if ($(this).find('textarea').val() == "") {
          $(this).find('.placeholder').show();
      }
  });
}



/******MENU****/
var menuIsOpen = false;
var $body = $('body');

//Sticky menu
$(function () {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $('#menu');
    var headerHeight = $header.outerHeight();

    $window.scroll(function () {
        if ($body.hasClass("menu-opened")) {
            return;
        }

        var windowTop = $window.scrollTop();
        if (windowTop > (headerHeight - 60)) {
            $header.addClass('menu-sticky');
        } else {
            $header.removeClass('menu-sticky');
            $header.removeClass('menu-show');
        }
        if ($header.hasClass('menu-sticky')) {
            if (windowTop < lastScrollTop) {
                $header.addClass('menu-show');
            } else {
                $header.removeClass('menu-show');
            }
        }

        lastScrollTop = windowTop;
    });

    // Add smooth scrolling to all links
    $(".scroll-to-btn").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

// menu animation

var $menuButton = $('#menu-button');

if (window.matchMedia("(min-width: 500px)").matches) {
    var menuTimeline = gsap.timeline({
        onStart: function () {
            $body.addClass('menu-opened');
            $menuButton.addClass('white');
        },
        onReverseComplete: function () {
            $body.removeClass('menu-opened');
            $menuButton.removeClass('white');
        },
    });

    menuTimeline
        .to(
            '#menu-page .menu-page-container', {
                duration: 0.4,
                xPercent: 101,
                ease: 'ease.out',
            },
            "<"
        )
        .from(
            '#menu-page .menu-page-container .menu-principal-item', {
                duration: 0.35,
                xPercent: -100,
                opacity: 0,
                stagger: 0.1,
                ease: 'ease.out',
            },
            "<"
        )
        .from(
            '#menu-page .menu-page-container .social-icon-wrapper', {
                duration: 0.35,
                opacity: 0,
                ease: 'ease.out',
            },
            '>-0.35'
        );
} else {
    var menuTimeline = gsap.timeline({
        onStart: function () {
            $body.addClass('menu-opened');
        },
        onReverseComplete: function () {
            $body.removeClass('menu-opened');
        },
    });

    menuTimeline
        .to(
            '#menu-page .menu-page-container', {
                duration: 0.4,
                xPercent: 101,
                ease: 'ease.out',
            },
            "<"
        )
        .to($menuButton, {
                onStart: function () {
                    $menuButton.addClass('white');
                },
                onReverseComplete: function () {
                    $menuButton.removeClass('white');
                }
            },
            '>-0.1s'
        )
        .from(
            '#menu-page .menu-page-container .menu-principal-item', {
                duration: 0.35,
                xPercent: -100,
                opacity: 0,
                stagger: 0.1,
                ease: 'ease.out',
            },
            "<"
        )
        .from(
            '#menu-page .menu-page-container .social-icon-wrapper', {
                duration: 0.35,
                opacity: 0,
                ease: 'ease.out',
            },
            '>-0.35'
        );

}
menuTimeline.pause();

var toggleMenu = function () {
    $menuButton.toggleClass('open');
    if (menuIsOpen) {
        menuIsOpen = false;
        menuTimeline.reverse();
    } else {
        menuIsOpen = true;
        menuTimeline.play();
    }
};

//Open menu
$menuButton.click(function () {
    toggleMenu();
}); 