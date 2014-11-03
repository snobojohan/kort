$(function() {

    console.log( "ready to go!" );


    $(document).autoBars(function() {
        var $html = $.handlebarTemplates['main']({
            message: "This is my message"
        });
        $('body').append($html);

		// FOR TEST
		$("#Global_Content").addClass("showme");
		$("#Global_Blocker").fadeIn(100);
    });

    $( "body" ).on( "click", "#Global_Clicker", function(e) {
	  	// console.log( "Handler for .click() called." );
	  	$("#Global_Content").addClass("showme");
	  	$("#Global_Blocker").fadeIn(100);
	  	return false;
	});
	
	$( "body" ).on( "click", "#Global_Blocker", function(e) {
	  	$("#Global_Content").removeClass("showme");
	  	$(this).hide();
	});
	
});