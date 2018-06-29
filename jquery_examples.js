$(document).ready(() => {

  $('#cart').on('click', () => {
    $('#cartMenu').show();
  });

  $('#cartMenu').on('mouseleave', () => {
    $('#cartMenu').hide();
  });

  $('#account').on('click', () => {
    $('#accountMenu').toggle();
  });

  $('#help').on('click', () => {
    $('#helpMenu').toggle();
  });

  $('.postText').on('keyup', (event) => {
  const post = $(event.currentTarget).val();
  const remaining = 140 - post.length;

  if (remaining <= 0) {
    $('.wordcount').addClass('red');
  } else {
    $('.wordcount').removeClass('red');
  }

  $('.postText').focus();
  $('.characters').html(remaining);
});

var main = function() {
	$('.more-btn').on('click', (event) => {
  	$(event.currentTarget).siblings().toggleClass('more-menu')
  });

  $('.share').on('click', (event) => {
    $(event.currentTarget).siblings().toggleClass('share-menu')
  });

  $('.notification').on('click', (event) => {
    $(event.currentTarget).toggleClass('active');
  });

};

$(document).ready(main);

})
