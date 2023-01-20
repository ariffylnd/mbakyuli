// Get Year
const d = new Date();
document.getElementById("yearNow").innerHTML = d.getFullYear();

// Mobile Menu
function updateMenu() {
  if (document.getElementById('input-menu').checked == true) {
    document.getElementById('mobile-menu').style.display = 'block';
    document.getElementById('logo').style.color = '#fffffe';
    document.getElementById('main-nav').style.backgroundColor = '#094067';
  } else {
    document.getElementById('mobile-menu').style.display = 'none';
    document.getElementById('logo').style.color = '#094067';
    document.getElementById('main-nav').style.backgroundColor = 'transparent';
  }
}

// Smooth Scrolling & mobile menu
// Smooth Scrolling | https://www.w3schools.com/howto/howto_css_smooth_scroll.asp

$(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      $('#mobile-menu').css('display', 'none');

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        window.location.hash = hash;
      });
    }
  });

  $(document).on('mousewheel', function () {
    if ($(this).scroll() < 50) {
      $('#mobile-menu').css('display', 'block');
      $('#logo').css('color', '#fffffe');
      $('#main-nav').css('background-color', '#094067');
    } else {
      $('#input-menu').prop('checked', false);
      $('#mobile-menu').css('display', 'none');
      $('#logo').css('color', '#094067');
      $('#main-nav').css('background-color', 'transparent');
    }
  });
});
