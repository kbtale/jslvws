var loadingDiv = document.getElementById("P-LoadingDiv");
var navigationMenuContainer = document.getElementById("P-Navigation");
var navigationMenu = document.getElementById("P-Navigation-Menu");
var container = document.getElementById("P-Container");
var worksheetsList = document.getElementsByClassName("liveworksheet");
var selectedWorksheet = 0;
var menuList = [];
var browserName;

navigationMenuContainer.style.display = "flex";
navigationMenuContainer.style.alignItems = "center";
navigationMenuContainer.style.justifyContent = "center";
navigationMenuContainer.style.marginTop = navigationMenuContainer.style.marginBottom = "10px";

navigationMenuContainer.style.display = "none";
container.style.height = "0px";

for (var i = 0; i < worksheetsList.length; i++) { 
  menuEl = document.createElement("a");
  menuEl.value = i;
  page = i+1;
  menuEl.innerHTML = page;
  menuEl.classList.add("menuItem");
  menuEl.classList.add("menuNumber");
  menuEl.addEventListener("click", changeWorksheet);
  navigationMenu.style.display = "none";
  navigationMenu.insertAdjacentElement("beforeend", menuEl);
  menuList.push(menuEl);
  if (i === 0){
    var dotContainer1 = document.createElement("a");
    dotContainer1.classList.add("dotContainer");
    var dot1 = document.createElement("span");
    dot1.classList.add("dot");
    dotContainer1.classList.add("disabled");
    dotContainer1.insertAdjacentElement("beforeend", dot1);
    navigationMenu.insertAdjacentElement("beforeend", dotContainer1);
  }
  if (i === worksheetsList.length-2){
    var dotContainer2 = document.createElement("a");
    dotContainer2.classList.add("dotContainer");
    var dot2 = document.createElement("span");
    dot2.classList.add("dot");
    dotContainer2.classList.add("disabled");
    dotContainer2.insertAdjacentElement("beforeend", dot2);
    navigationMenu.insertAdjacentElement("beforeend", dotContainer2);
  }
   if (i === 1){
    var dotContainer3 = document.createElement("a");
    dotContainer3.classList.add("dotContainer");
    var dot3 = document.createElement("span");
    dot3.classList.add("dot");
    dotContainer3.classList.add("disabled");
    dotContainer3.insertAdjacentElement("beforeend", dot3);
    navigationMenu.insertAdjacentElement("beforeend", dotContainer3);
  }
   if (i === worksheetsList.length-3){
    var dotContainer4 = document.createElement("a");
    dotContainer4.classList.add("dotContainer");
    var dot4 = document.createElement("span");
    dot4.classList.add("dot");
    dotContainer4.classList.add("disabled");
    dotContainer4.insertAdjacentElement("beforeend", dot4);
    navigationMenu.insertAdjacentElement("beforeend", dotContainer4);
  }
}

var leftArrow = document.createElement("a");
var rightArrow = document.createElement("a");
var la = document.createElement("a");
var ra = document.createElement("a");
leftArrow.appendChild(la);
rightArrow.appendChild(ra);
la.innerHTML = "&#8678;";
ra.innerHTML = "&#8680;";
leftArrow.classList.add("menuItem");
leftArrow.classList.add("menuArrow-l");
rightArrow.classList.add("menuItem");
rightArrow.classList.add("menuArrow-r");
  leftArrow.value = rightArrow.value = -1;
  leftArrow.addEventListener("click", function(ev){if (selectedWorksheet > 0) {selectedWorksheet -= 1; changeWorksheet(ev);}});
  rightArrow.addEventListener("click", function(ev){if (selectedWorksheet < worksheetsList.length-1) {selectedWorksheet += 1; changeWorksheet(ev);}});

navigationMenu.insertAdjacentElement("afterbegin", leftArrow);
navigationMenu.insertAdjacentElement("beforeend", rightArrow);

var classes = `
#P-Navigation-Menu {
  display: inline-flex;
  height: 3.5em;
  background-color: #2c63ff;
  user-select: none;
  overflow: hidden;
  border-radius: 15px;
  transition: all .3s;
  max-width: 90vw;
}

#P-Navigation-Menu:hover {
  -webkit-box-shadow: 0px 6px 8px -4px #101010, 5px 5px 6px -2px rgba(10,10,20,0); 
  box-shadow: 0px 6px 8px -4px #101010, 5px 5px 6px -2px rgba(10,10,20,0);
}

#P-Navigation-Menu .menuItem {
  cursor: pointer;
  user-select: none;
  color: #FFFFFF;
  font-size: 1.2em;
  font-family: Arial;
  transition: all .3s;
  display: flex;
  max-width: 3.5em;
  align-items: center;
  overflow: hidden;
}

#P-Navigation-Menu .menuNumber {
  width: 3.5em;
  heigth: 3.5em;
  justify-content: center;
  transition: all .3s;
}

#P-Navigation-Menu .menuNumber.active {
  background-color: #1944bd;
  transition: all .3s;
}

#P-Navigation-Menu .menuArrow-l, #P-Navigation-Menu .menuArrow-r {
  width: 3.5em;
  heigth: 3.5em;
}
#P-Navigation-Menu .menuArrow-r a {
  margin-left: .9em;
  transition: all .3s;
}

#P-Navigation-Menu .menuArrow-l {
  justify-content: flex-end;
}

#P-Navigation-Menu .menuArrow-l a {
  margin-right: .9em;
  transition: all .3s;
}

#P-Navigation-Menu .menuNumber:hover:not(.active), #P-Navigation-Menu .menuArrow-l:hover, #P-Navigation-Menu .menuArrow-r:hover {
  background-color: #2d59d6;
}
#P-Navigation-Menu .menuArrow-r:hover a {
  transform: translateX(60%) scale(1.1);
}
#P-Navigation-Menu .menuArrow-l:hover a {
  transform: translateX(-60%) scale(1.1);
}

#P-Navigation-Menu .dotContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 3.5em;
  height: 3.5em;
  transition: all .3s;
}

#P-Navigation-Menu .dot {
  height: .8em;
  width: .8em;
  background-color: #fff;
  border-radius: 50%;
  display: inline-block;
}

#P-Navigation-Menu .dotContainer.disabled {
  width: 0em;
  padding: 0;
  transition: all .3s;
}

#P-Container {
	overflow: hidden;
}

#P-LoadingDiv {
	margin: 0;
	padding-top: 15px;
	padding-bottom: 15px;
	display: flex;
	justify-content: center;
	width: 100%;
	max-width: 100%;
	overflow: hidden;
	position: relative;
}

.no-overflow {
	overflow: hidden;
}

#P-LoadingDiv .cover {
	height: 90vh;
	width: auto;
	box-shadow: black 3px 3px 3px;
}

.leave {
	-webkit-animation: leave .9s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards;
	        animation: leave .9s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards;
}

.join {
	-webkit-animation: slide-in-bck-center 0.7s ease-out forwards;
	        animation: slide-in-bck-center 0.7s ease-out forwards;
}

@keyframes leave {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-filter: blur(4px);
            filter: blur(4px);
    opacity: 0;
  }
}
@-webkit-keyframes leave {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-filter: blur(4px);
            filter: blur(4px);
    opacity: 0;
  }
}

@-webkit-keyframes slide-in-bck-center {
  0% {
    -webkit-transform: translateZ(600px);
            transform: translateZ(600px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
}
@keyframes slide-in-bck-center {
  0% {
    -webkit-transform: translateZ(600px);
            transform: translateZ(600px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
}
	.loadingContainer {
		position: absolute;
		bottom: 23vh;
		transform: translateX(10vh);
	}
        .loadingCircle {
            width: clamp(10.5vh, 250px, 18vh);
            height: clamp(10.5vh, 250px, 18vh);
            position: relative;
            box-shadow: inset 0 0 30px 0 rgba(0,0,0,.5), 0 4px 10px 0 rgba(0,0,0,.5);
            border-radius: 50%;
            background-color: skyblue;
            overflow: hidden;
        }
        .loadingContainer .logo {
            width: clamp(10.5vh, 250px, 18vh) !important;
            height: clamp(10.5vh, 250px, 18vh) !important;
            position: absolute !important;
	    margin: 0 !important;
	    padding: 0 !important;
            z-index: 1;
	    max-width: none !important;
	    max-height: none !important;
        }
        .water{
            width: clamp(10.5vh, 250px, 18vh);
            height: clamp(10.5vh, 250px, 18vh);
            position: relative;
            animation: gravity 5s ease-in-out alternate infinite;
        }
        .water:before, .water:after{
            content:'';
            position: absolute;
            width: clamp(12vh, 250px, 21vh);
            height: clamp(12vh, 250px, 21vh);
            top:clamp(-8vh, -100px, -10vh);
            background-color: #fff;
        }
        .water:before{
            border-radius: 45%;
            background:rgba(255,255,255,.7);
            animation:wave 5s linear infinite;
        }
        .water:after{
            border-radius: 35%;
            background:rgba(255,255,255,.3);
            animation:wave 6.5s linear infinite;
        }

        @keyframes gravity {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(1.2rem);
          }
          100% {
            transform: translateY(-1.2rem);
          }
        }

        @keyframes wave{
            0%{
                transform: rotate(0);
            }
            50%{
                transform: rotate(180deg);
            }
            100%{
                transform: rotate(360deg);
            }
        }
@keyframes load {
    0%{
        opacity: 0.08;
/*         font-size: 10px; */
/*              font-weight: 400; */
                filter: blur(5px);
                letter-spacing: 3px;
        }
    100%{
/*         opacity: 1; */
/*         font-size: 12px; */
/*              font-weight:600; */
/*              filter: blur(0); */
        }
}

.animateLoading {
    display:flex;
    justify-content: center;
    margin: auto;
    margin-top: .4rem;
    color: white;
    font-size: 2rem;
    font-family: Helvetica, sans-serif, Arial;
    animation: load 1.5s infinite 0s ease-in-out;
    animation-direction: alternate;
    text-shadow: 0 0 1px white, 0 0 6px black;
}
`;

styles = document.createElement('style');
styles.type = 'text/css';
container.insertAdjacentElement("afterend", styles);

if (styles.styleSheet)
  styles.styleSheet.cssText = classes;
else {
    styles.appendChild(document.createTextNode(classes));
}

window.addEventListener("load", function() {
 setTimeout(showAll(), 500);

});

function changeWorksheet(ev){
  if (ev.currentTarget.value != -1)
    selectedWorksheet = ev.currentTarget.value;
  
  toggleWorksheets(selectedWorksheet);
}

function toggleWorksheets(sw){
  for (var i = 0; i < worksheetsList.length; i++) {
    (i != sw) ? worksheetsList[i].style.display = 'none' : worksheetsList[i].style.display = 'block';
  }
  for (var i = 0; i < worksheetsList.length; i++) {
    (i != sw) ? menuList[i].classList.remove("active") : menuList[i].classList.add("active");
  }
  
  if (sw > 2 && sw < menuList.length-3){
      dotContainer1.classList.remove("disabled");
      dotContainer2.classList.remove("disabled");
      dotContainer3.classList.add("disabled");
      dotContainer4.classList.add("disabled");
  } else if (sw < 3) {
      dotContainer1.classList.add("disabled");
      dotContainer2.classList.add("disabled");
      dotContainer3.classList.add("disabled");
      dotContainer4.classList.remove("disabled");
  } else if (sw > menuList.length-4) {
      dotContainer1.classList.add("disabled");
      dotContainer2.classList.add("disabled");
      dotContainer3.classList.remove("disabled");
      dotContainer4.classList.add("disabled");
  }
  
  for (var i = 1; i < menuList.length - 1; i++){
    if (sw > 2 && sw < menuList.length-3){
      if (i != sw && i != sw-1 && i != sw+1) {
        menuList[i].style.maxWidth = '0px';
      }
      else {
        menuList[i].style.maxWidth = '3.5em';
      }
    }
    else if (sw < 3) {
      if (i != sw && i >= 4 && i != menuList.length -2) {
        menuList[i].style.maxWidth = '0px';
      }
      else {
        menuList[i].style.maxWidth = '3.5em';
      }
    }
    else if (sw > menuList.length-4) {
       if (i < menuList.length-4 && i != 1) {
        menuList[i].style.maxWidth = '0px';
      }
      else {
        menuList[i].style.maxWidth = '3.5em';
      }
    }
  }
}

function showAll(){
 var worksheetsList = document.getElementsByClassName("liveworksheet");
 navigationMenu.style.display = "";
 fnBrowserDetect();
 if (browserName === "chrome" || browserName === "safari" || browserName === "opera" || browserName === "edge") {
	show();
   function show(){
	worksheetsList = document.getElementsByClassName("liveworksheet");
	console.log(JSON.stringify(worksheetsList));
	console.log(document.getElementsByClassName("liveworksheet"));
	if (worksheetsList[0].length > 1) {
    for (var j = 0; j < worksheetsList.length; j++){
    worksheetsList[j].getElementsByTagName("div")[0].style.height = "";
    worksheetsList[j].getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.height = "";
    toggleWorksheets(0);
    }
    navigationMenuContainer.style.opacity="0";
    container.style.opacity="0";
    setTimeout(() => {
	    loadingDiv.classList.add("leave");
	    setTimeout(() => {
		loadingDiv.style.display="none";
		navigationMenuContainer.style.display = "flex";
		container.style.height = "";
		navigationMenuContainer.classList.add("join");
		container.classList.add("join");
	    	navigationMenuContainer.style.opacity="1";
    		container.style.opacity="1";
	    },900);
    }, 1500);
	}
	   else {
		console.log("Retrying connection...");
		setTimeout(show,1500);
	   }
   }
 } else if (browserName === "firefox"){
  try {
  for (var j = 0; j < worksheetsList.length; j++){
    worksheetsList[j].getElementsByTagName("div")[0].style.height = "";
    worksheetsList[j].getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.height = "";
	      toggleWorksheets(0);
  }
  navigationMenuContainer.style.opacity="0";
    container.style.opacity="0";
    setTimeout(() => {
	    loadingDiv.classList.add("leave");
	    setTimeout(() => {
		console.log("last div loaded");
		loadingDiv.style.display="none";
		navigationMenuContainer.style.display = "flex";
		container.style.height = "";
		navigationMenuContainer.classList.add("join");
		container.classList.add("join");
	    navigationMenuContainer.style.opacity="1";
    	container.style.opacity="1";
	    },900);
    }, 1500);
  } catch {
    setTimeout(() => {menuList[0].click();
	navigationMenuContainer.style.opacity="0";
    container.style.opacity="0";
    setTimeout(() => {
	    loadingDiv.classList.add("leave");
	    setTimeout(() => {
		console.log("last div loaded");
		loadingDiv.style.display="none";
		navigationMenuContainer.style.display = "flex";
		container.style.height = "";
		navigationMenuContainer.classList.add("join");
		container.classList.add("join");
	    navigationMenuContainer.style.opacity="1";
    	container.style.opacity="1";
	    },900);
    }, 1500);},
	1500);
  }
 }
}

function fnBrowserDetect(){
                 
         let userAgent = navigator.userAgent;
         
         if(userAgent.match(/chrome|chromium|crios/i)){
             browserName = "chrome";
           }else if(userAgent.match(/firefox|fxios/i)){
             browserName = "firefox";
           }  else if(userAgent.match(/safari/i)){
             browserName = "safari";
           }else if(userAgent.match(/opr\//i)){
             browserName = "opera";
           } else if(userAgent.match(/edg/i)){
             browserName = "edge";
           }else{
             browserName="No browser detection";
           }    
}
