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
