$('.mobile-collection .text-with-icon button').click(function () {
    $('.mobile-collection .collection__facets').slideToggle(300);
    $('.mobile-collection .text-with-icon button').toggleClass('opened');
    if ($('.mobile-collection .text-with-icon button').hasClass('opened')) {
      $('.mobile-collection>.text-with-icon').css('borderBottom', 'none');
    } else {
      setTimeout(() => {
        $('.mobile-collection >.text-with-icon').css('border-bottom', '1px solid rgba(0, 0, 0, 0.1)');
      }, 300);
    }
  });
