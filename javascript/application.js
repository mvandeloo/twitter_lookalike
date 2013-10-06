$(function() {
  
  $( '.button' ).hover(function() {
  	$(this).addClass( "textmouseover" );
  }, function() {
  	$(this).removeClass( "textmouseover" );
  });

  $( 'a' ).hover(function() {
  	$(this).addClass( "streammouseover" );
  }, function() {
  	$(this).removeClass( "streammouseover" );
  });

  $( '#username' ).hover(function() {
  	$(this).addClass( "streammouseover" );
  }, function() {
  	$(this).removeClass( "streammouseover" );
  });

  $( '.tweet' ).hover(function() {
  	$('.functionlinks').toggle();
  }, function() {
  	$('.functionlinks').toggle();
  });

  $( '.settings' ).click(function() {
  	$('#flyout').toggle();
  }, function() {
  	$('#flyout').toggle();
  });

  $( '.createtweet' ).hover(function() {
  	$('#tooltip').toggle();
  }, function() {
  	$('#tooltip').toggle();
  });
})


