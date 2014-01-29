function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") {
        return;
    }

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=");
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) {
            parms[n] = [];
        }

        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

function loadBackground() {
    var params = parseURLParams(document.URL);
    if(typeof params === "undefined"){
    	$("#message").text("message number not entered");
    }
    else{	
		var messages=new Array();
		messages[0]=["A confIrmatIon emaIl has been sent to the address you provIded."];
		messages[1]=["Sayonara!"];
		messages[2]=["You're already subscrIbed! :D"];
		messages[3]=["You are not subscrIbed."];
		messages[4]=["The emaIl address you entered was malformed"];
		messages[5]=["Welcome to the maIlIng lIst!"];

		$("#message").text(messages[params["message"]]);
	}
}
 
loadBackground();