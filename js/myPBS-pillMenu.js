$(function() {

  // Animates the menu open and close and shows/hides menu sections
  var myPBS_PILL_MENU = {};
  myPBS_PILL_MENU.open = false;
  $('.myPBS-pillMenu-openCloseBtn').on('click', function(e){
    e.preventDefault();
    $('.myPBS-pillMenu-wsmenu').toggleClass('myPBS-pillMenu-collapsedMenu');
    $('.myPBS-pillMenu-wsmenu').addClass('myPBS-pillMenu-hideMenuSections');
    $(this).find('i').toggleClass('myPBS-pillMenu-icon-chevron-right');
    if(myPBS_PILL_MENU.open == false){
      myPBS_PILL_MENU.open = true;
      setTimeout(myPBSmenuTimer, 500);
    }else {
      myPBS_PILL_MENU.open = false;
    }
  });
  var myPBSmenuTimer = function(){
    $('.myPBS-pillMenu-wsmenu').toggleClass('myPBS-pillMenu-hideMenuSections');
  };

  var items = $('.myPBS-pillMenu-overlapblackbg, .slideLeft');
  var myPBSpillMenuContent = $('.myPBS-pillMenu-content');
  
  var menuopen = function() {
    $(items).removeClass('menuclose').addClass('menuopen');
  }

  var menuclose = function() { 
    $(items).removeClass('menuopen').addClass('menuclose');
  }

  $('#myPBS-pillMenu-navToggle').click(function(){
    if (myPBSpillMenuContent.hasClass('menuopen')) {
      $(menuclose)
    } else {
      $(menuopen);
    }
  });

  myPBSpillMenuContent.click(function(){
    if (myPBSpillMenuContent.hasClass('menuopen')) {
      $(menuclose)
    }
  });

  $('#myPBS-pillMenu-navToggle, .myPBS-pillMenu-overlapblackbg').on('click', function(){
    $('.myPBS-pillMenu-container').toggleClass( "mrginleft" );
  });

  $('.myPBS-pillMenu-wsmenu-list li').has('.myPBS-pillMenu-wsmenu-submenu, .myPBS-pillMenu-wsmenu-submenu-sub, .myPBS-pillMenu-wsmenu-submenu-sub-sub').prepend('<span class="myPBS-pillMenu-wsmenu-click"><i class="myPBS-pillMenu-wsmenu-myPBS-pillMenu-arrow"></i></span>');
  $('.myPBS-pillMenu-wsmenu-list li').has('.megamenu').prepend('<span class="myPBS-pillMenu-wsmenu-click"><i class="myPBS-pillMenu-wsmenu-myPBS-pillMenu-arrow"></i></span>');
  $('.myPBS-pillMenu-wsmenu-mobile').click(function(){
    $('.myPBS-pillMenu-wsmenu-list').slideToggle('slow');
  });

  // Added by PBS
  $('.myPBS-pillMenu-wsmenu-click').click(function(e){
    e.stopPropagation();
    $('.myPBS-pillMenu-wsmenu-click').parent().not($(this).parent()).removeClass('open');
    $(this).parent().toggleClass('open');
  });

});