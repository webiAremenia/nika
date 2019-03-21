$(document).ready(function () {

  $('#toggle-icon').on({
    click: function () {
      $(this).toggleClass('rotate','');
      $('#menu-content .toggle-content').fadeToggle(0);
    }
  });
  $('#menu-content .toggle-content a').on({
    click: function () {
      $('#toggle-icon').toggleClass('rotate','');
      $('#menu-content .toggle-content').fadeToggle(0);
    }
  })

});
