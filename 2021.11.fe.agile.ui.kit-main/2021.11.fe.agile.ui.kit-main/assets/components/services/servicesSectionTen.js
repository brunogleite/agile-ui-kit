class servicesSectionTen extends HTMLElement{
    constructor(){
        super()
        .innerHTML = `
            <section class="contact-us">
                <div class="w-1334">
                    <div class="next-page-href-wrapper">
                        <div class="flex-container">
                            <div class="w-40-p offset-60-p">
                                <a href="javascript;" class="open-contacts h3 lh-3 next-page-href">
                                    Ready to take off ? <span>Let’s&nbsp;chat!</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    }
}


customElements.define('services-ten', servicesSectionTen);

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