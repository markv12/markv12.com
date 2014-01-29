function loadBackground() {
    // Split the param var using "=" as the indentifier
    var param = window.location.search;
    string = param.split('=');
 	
 	var messages=new Array();
	messages[0]=["A confIrmatIon emaIl has been sent to the address you provIded."];
	messages[1]=["Sayonara!"];
	messages[2]=["You're already subscrIbed! :D"];
	messages[3]=["You are not subscrIbed."];
	messages[4]=["The emaIl address you entered was malformed"];
	messages[5]=["Welcome to the maIlIng lIst!"];
     
	$("#message").text(messages[string[1]]);
}
 
loadBackground();