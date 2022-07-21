class Footer extends HTMLElement{
    constructor(){
        super()
        .innerHTML = `
        <footer id="footer">
    <div id="footer-top" class="w-80vw-grid">
      <div id="footer-top-menu-wrapper">
        <div id="footer-principal-menu">
          <a href="about.html" class="footer-principal-menu-item h3 o-hidden">
            <div class="content">About</div>
          </a>
          <a href="services.html" class="footer-principal-menu-item h3 o-hidden">
            <div class="content">Services</div>
          </a>
          <a href="case-studies.html" class="footer-principal-menu-item h3 o-hidden">
            <div class="content">Cases</div>
          </a>
          <a href="" class="footer-principal-menu-item h3 o-hidden">
            <div class="content">Blog</div>
          </a>
        </div>
        <div id="footer-secundary-menu">
          <a href="" class="footer-secundary-menu-item h4 o-hidden">
            <div class="content">Hiring</div>
          </a>
          <a href="javascript;" class="open-contacts footer-secundary-menu-item h4 o-hidden">
            <div class="content">Contact</div>
          </a>
        </div>
      </div>
      <div id="footer-top-contact-wrapper">
        <div id="footer-top-contact-inner-wrapper" class="bg-highlight-color">
          <div id="address-wrapper">
            Agile Kit<br> Street Name 1010<br> San Francisco, USA
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
            <div class="label">New Business</div>
            <a href="mailto:thomas@ymc.ch" class="href-w-underline">thomas@ymc.ch</a>
          </div>
        </div>
        <div id="footer-top-contact-inner-wrapper-shadow"></div>
      </div>
    </div>
    <div id="footer-bottom" class="w-80vw-grid">
      <div id="footer-bottom-social-wrapper">
        <a href="" class="social-icon-wrapper gray social-twitter"><img src="assets/imgs/icon-twitter.svg"
            alt="twitter" /></a>
        <a href="" class="social-icon-wrapper gray social-facebook"><img src="assets/imgs/icon-facebook.svg"
            alt="facebook" /></a>
        <a href="" class="social-icon-wrapper gray social-github"><img src="assets/imgs/icon-github.svg"
            alt="github" /></a>
      </div>
      <div id="footer-bottom-menu-wrapper">
        <span class="footer-bottom-menu-item">© 2020 YMC AG</span>
        <a href="" class="footer-bottom-menu-item">
          Legal
        </a>
        <a href="" class="footer-bottom-menu-item">
          Privacy Statement
        </a>
        <a href="" class="footer-bottom-menu-item">
          Accessibillity
        </a>
        <a href="" class="footer-bottom-menu-item">
          Cookie Policy
        </a>
      </div>
    </div>
  </footer>
        `
    }
   
}

customElements.define('section-footer', Footer);


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