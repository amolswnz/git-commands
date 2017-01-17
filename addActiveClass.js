#Single menu item 
$(function() {
    // Add active class based on url 
    var filename = location.pathname.substr(location.pathname.lastIndexOf("/")+1);
    $('#header').find('a').each(function() {
        if(filename === $(this).attr('href') ) {
            $(this).parent().addClass("active");
        }
    });
});



#Submenu item - only one level
$(function() {
    // Add active class based on url 
    var filename = location.pathname.substr(location.pathname.lastIndexOf("/")+1);
    $('#header').find('a').each(function() {
        if(filename === $(this).attr('href') ) {
            console.log("=",filename, $(this).parent() );
            var li= $(this).parent();
            li.addClass("current");
            // If is this li is a submenu item, add class to its parent (ul)'s parent (li)
            if( $(li).parent().is('ul') )   
                $(li).parent().parent().addClass("current");
        }
    }); 
});
