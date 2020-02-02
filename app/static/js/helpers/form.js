$(document).ready(function() {
  $('#header-form #header-form-button').on('click', (e) => {
    if ($('input[name=radio1]:checked', '#header-form').attr('data-radio') === 'error') {
      e.preventDefault();
      Popups.hide('#header-popup');
      Popups.openById('header-subpopup');
    } else {
      return;
    }
  });
});
