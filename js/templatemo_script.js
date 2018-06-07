var top_menu_height = 0;
jQuery(function($) {
		

        // scroll to top
        $('#toTop').click(function(e){
            e.preventDefault();
            scrollTo('#header');
        });
		});
 // scroll animation 
function scrollTo(selectors)
{

    if(!$(selectors).size()) return;
    var selector_top = $(selectors).offset().top - top_menu_height;
    $('html,body').animate({ scrollTop: selector_top }, 'slow');

}