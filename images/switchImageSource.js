function loadBackground() {
    // Split the param var using "=" as the indentifier
    var param = window.location.search;
    string = param.split('=');
 	
 	var images=new Array();
	images[0]=["http://i.imgur.com/eS6lo29.jpg"];
     
	$("#image").attr('src', images[string[1]]);
	$("#imagelink").attr('href', images[string[1]]); 
}
 
loadBackground();