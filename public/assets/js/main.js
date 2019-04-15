/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

  var $window = $(window),
    $body = $('body'),
    $nav = $('#nav');

  // Breakpoints.
  breakpoints({
    wide: ['961px', '1880px'],
    normal: ['961px', '1620px'],
    narrow: ['961px', '1320px'],
    narrower: ['737px', '960px'],
    mobile: [null, '736px']
  });

  // Play initial animations on page load.
  $window.on('load', function() {
    window.setTimeout(function() {
      $body.removeClass('is-preload');
    }, 100);
  });

  // Nav.
  var $nav_a = $nav.find('a');

  $nav_a
    .addClass('scrolly')
    .on('click', function(e) {

      var $this = $(this);

      // External link? Bail.
      if ($this.attr('href').charAt(0) != '#')
        return;

      // Prevent default.
      e.preventDefault();

      // Deactivate all links.
      $nav_a.removeClass('active');

      // Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
      $this
        .addClass('active')
        .addClass('active-locked');

    })
    .each(function() {

      var $this = $(this),
        id = $this.attr('href'),
        $section = $(id);

      // No section for this link? Bail.
      if ($section.length < 1)
        return;

      // Scrollex.
      $section.scrollex({
        mode: 'middle',
        top: '-10vh',
        bottom: '-10vh',
        initialize: function() {

          // Deactivate section.
          $section.addClass('inactive');

        },
        enter: function() {

          // Activate section.
          $section.removeClass('inactive');

          // No locked links? Deactivate all links and activate this section's one.
          if ($nav_a.filter('.active-locked').length == 0) {

            $nav_a.removeClass('active');
            $this.addClass('active');

          }

          // Otherwise, if this section's link is the one that's locked, unlock it.
          else if ($this.hasClass('active-locked'))
            $this.removeClass('active-locked');

        }
      });

    });

  // Scrolly.
  $('.scrolly').scrolly();

  //syntax for slideshow found on w3 schools: https://www.w3schools.com/w3css/w3css_slideshow.asp
  var index = 1;

  function imageRotate() {
    $('#main>section.one').css('background-image', `url("../../images/trees${index}.jpg")`);
    index++;
    if (index > 4) { index = 1 }
    setTimeout(imageRotate, 2000); // Change image every 2 seconds
  }

  imageRotate();

  // Header (narrower + mobile).

  //syntax for breakpoint event handling from brakpoints documentation: https://www.npmjs.com/package/breakpoints-js
  const navText = [];
  $('#nav span').each(function() {
    navText.push($(this).text());
  });

  breakpoints.on('wide', function() {
    $('#nav span').each(function(i) {
      $(this).text(navText[i]);
    });
  });

  breakpoints.on('normal', function() {
    $('#nav span').each(function(i) {
      $(this).text(navText[i]);
    });
  });

  breakpoints.on('narrow', function() {
    $('#nav span').each(function(i) {
      $(this).text(navText[i]);
    });
  });

  breakpoints.on('narrower', function() {
    $('#nav span').each(function() {
      $(this).text('');
    });
  });

  breakpoints.on('mobile', function() {
    $('#nav span').each(function() {
      $(this).text('');
    });
  });

  // Toggle.
  // $(
  //   '<div id="headerToggle">' +
  //           '<a href="#header" class="toggle"></a>' +
  //           '</div>'
  // )
  //   .appendTo($body);



  // // Header.
  // $('#header')
  //   .panel({
  //     delay: 500,
  //     hideOnClick: true,
  //     hideOnSwipe: true,
  //     resetScroll: true,
  //     resetForms: true,
  //     side: 'left',
  //     target: $body,
  //     visibleClass: 'header-visible'
  //   });

})(jQuery);
