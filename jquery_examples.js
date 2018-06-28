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
})
