if (typeof numerolws === 'undefined') {
    numerolws = 0;
} else {
	numerolws = numerolws + 2000;
}

var anchuraadaptada;

function loadliveworksheet(worksheetid,codigoembed,alturaenpx,subdominio) {
	setTimeout(function(){
		var lwsouterdiv = document.createElement("div");
		lwsouterdiv.setAttribute("align","left");
		lwsouterdiv.style.maxWidth = "1024px";
		lwsouterdiv.style.width = "100%"; 
		lwsouterdiv.style.height = "1px"; 
		lwsouterdiv.style.padding = "0"; 
		lwsouterdiv.style.overflow = "hidden";
		//lwsouterdiv.style.zIndex = "1000000";
		lwsouterdiv.style.position = "relative";
		lwsouterdiv.setAttribute("id", "lwsouterdiv"+worksheetid);
		document.getElementById("liveworksheet"+worksheetid).insertBefore(lwsouterdiv, document.getElementById("liveworksheet"+worksheetid).firstChild);
		//document.getElementById("liveworksheet"+worksheetid).appendChild(lwsouterdiv);

		var lwsinnerdiv = document.createElement("div");
		lwsinnerdiv.style.width = "100px"; 
		lwsinnerdiv.style.height = "100px";
		lwsinnerdiv.style.maxWidth = "1024px";
		lwsinnerdiv.style.overflow = "hidden";
		lwsinnerdiv.setAttribute("id", "lwsinnerdiv"+worksheetid);
		lwsouterdiv.appendChild(lwsinnerdiv);

		/*var lwsfullscreenicon = document.createElement("img"); 
		lwsfullscreenicon.setAttribute("id", "lwsfullscreenbutton"+worksheetid);
		lwsfullscreenicon.setAttribute("src", "https://files.liveworksheets.com/images/fullscreenicon.png");
		lwsfullscreenicon.style.position = "absolute";
		lwsfullscreenicon.style.height = "50px";
		lwsfullscreenicon.style.width = "50px";
		lwsfullscreenicon.style.top = "20px";
		lwsfullscreenicon.style.left = "20px";
		lwsfullscreenicon.style.zIndex = "1000001";
		lwsfullscreenicon.style.cursor = "pointer";
		lwsfullscreenicon.style.border = "none";
		lwsfullscreenicon.style.padding = "none";
		lwsfullscreenicon.style.background = "none";
		lwsfullscreenicon.style.mozBoxShadow = "none";
		lwsfullscreenicon.style.webkitBoxShadow = "none";
		lwsfullscreenicon.style.ieBoxShadow = "none";
		lwsfullscreenicon.style.boxShadow = "none";
		lwsfullscreenicon.setAttribute("title","Full screen");
		lwsfullscreenicon.setAttribute("alt","Click to open full screen");
		lwsouterdiv.appendChild(lwsfullscreenicon);
		lwsfullscreenicon.addEventListener('click', function() {
			lwsfullscreen(worksheetid);
		}, false);
		*/

		var lwsiframe = document.createElement("iframe");
		lwsiframe.setAttribute("id", "lwsiframe"+worksheetid);
		lwsiframe.setAttribute("src", "https://" + subdominio + ".liveworksheets.com/embed/" + worksheetid + "/" + codigoembed + "/embed.html");
		lwsiframe.setAttribute("allow", "microphone");
		lwsiframe.setAttribute("scrolling","no");
		lwsiframe.setAttribute("frameborder","0");
		lwsiframe.style.width = "1024px";
		lwsiframe.style.maxWidth = "1024px";
		lwsiframe.style.height = String(alturaenpx + 130) + "px";
		lwsiframe.style.transform = "scale(0.5)";
		lwsiframe.style.transformOrigin = "0 0";
		lwsinnerdiv.appendChild(lwsiframe);
		lwsiframe.onload = lwsfill(worksheetid);
	}, numerolws);

}
/*
function lwsfullscreen(worksheetid) {
	if (document.getElementById("lwsouterdiv"+worksheetid).style.position == "fixed") {
		document.getElementById("lwsinnerdiv"+worksheetid).style.height = "1px";
		document.getElementById("lwsinnerdiv"+worksheetid).style.width = "1px";
		document.getElementById("lwsouterdiv"+worksheetid).style.position = "relative";
		document.getElementById("lwsouterdiv"+worksheetid).style.overflow = "hidden";
		document.getElementById("lwsouterdiv"+worksheetid).style.zIndex = "1000000";
		document.getElementById("lwsouterdiv"+worksheetid).style.top = "auto";
		document.getElementById("lwsouterdiv"+worksheetid).style.bottom = "auto";
		document.getElementById("lwsouterdiv"+worksheetid).style.left = "auto";
		document.getElementById("lwsouterdiv"+worksheetid).style.right = "auto";
		document.getElementById("lwsouterdiv"+worksheetid).style.height = "1px";
		document.getElementById("lwsfullscreenbutton"+worksheetid).src = "https://files.liveworksheets.com/images/fullscreenicon.png";
		lwsfill(worksheetid);
	} else {
		document.getElementById("lwsouterdiv"+worksheetid).style.position = "fixed";
		document.getElementById("lwsouterdiv"+worksheetid).style.top = "0";
		document.getElementById("lwsouterdiv"+worksheetid).style.bottom = "0";
		document.getElementById("lwsouterdiv"+worksheetid).style.left = "0";
		document.getElementById("lwsouterdiv"+worksheetid).style.right = "0";
		document.getElementById("lwsouterdiv"+worksheetid).style.width = "100%";
		document.getElementById("lwsouterdiv"+worksheetid).style.maxWidth = "1024px";
		document.getElementById("lwsouterdiv"+worksheetid).style.marginLeft = "auto";
		document.getElementById("lwsouterdiv"+worksheetid).style.marginRight = "auto";
		document.getElementById("lwsouterdiv"+worksheetid).style.overflowY = "auto";
		document.getElementById("lwsouterdiv"+worksheetid).style.overflowX = "hidden";
		document.getElementById("lwsouterdiv"+worksheetid).style.zIndex = "1000001";
		document.getElementById("lwsfullscreenbutton"+worksheetid).src = "https://files.liveworksheets.com/images/exitfullscreenicon.png";
		lwsfill(worksheetid);
		document.getElementById("lwsouterdiv"+worksheetid).style.height = "100%";
	}
}
*/
function lwsfill(worksheetid) {
worksheetheight = Number(document.getElementById("lwsiframe"+worksheetid).style.height.replace('px', ''));
anchuraadaptada = document.getElementById("lwsouterdiv"+worksheetid).offsetWidth;
proporcion = anchuraadaptada / 1024;
document.getElementById("lwsiframe"+worksheetid).style.transform = "scale("+proporcion+")";
document.getElementById("lwsinnerdiv"+worksheetid).style.height = String(worksheetheight * proporcion) + "px";
document.getElementById("lwsinnerdiv"+worksheetid).style.width = String(1024 * proporcion) + "px";
document.getElementById("lwsouterdiv"+worksheetid).style.height = String((worksheetheight * proporcion)) + "px";
//document.getElementById("lwsfullscreenbutton"+worksheetid).style.top = String((worksheetheight * proporcion) - 70) + "px";
}
