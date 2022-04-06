<script>
jQuery(document).ready(function($){
$( "footer .col-sm-4" ).appendTo( ".artigos" );
$(".breadcrumb").appendTo( ".box__breadcrumb" );

var pathArray = window.location.pathname.split('/');
if(pathArray[1] == "kb" && !pathArray[3]) { $('body').addClass('page__home'); }

});
$('body>.body-content>div.row .header__search').remove();
$('body .kb-header #search-article-view').remove();
</script>
<script>
$("a").on("click",function(event){
  var value= $(this).text();
  var hash = $(this).attr("href");
  if (value.toLowerCase().trim() == "chat" && hash == "#"){
    event.preventDefault();
    movideskChatWidgetChangeWindowState('maximized');
  }
})
</script>