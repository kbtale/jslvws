var navigationMenuContainer = document.getElementById("P-Navigation");
var navigationMenu = document.getElementById("P-Navigation-Menu");
var container = document.getElementById("P-Container");
var worksheetsList = document.getElementsByClassName("liveworksheet");
var selectedWorksheet = 0;
var menuList = [];

navigationMenuContainer.style.display = "flex";
navigationMenuContainer.style.alignItems = "center";
navigationMenuContainer.style.justifyContent = "center";
navigationMenuContainer.style.marginTop = navigationMenuContainer.style.marginBottom = "10px";

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
  box-shadow: 0 4px 12px #22213c;
  user-select: none;
  overflow: hidden;
  border-radius: 15px;
  transition: all .3s;
}

#P-Navigation-Menu .menuItem {
  cursor: pointer;
  user-select: none;
  color: #FFFFFF;
  font-size: 1.2em;
  font-family: Arial;
  transition: all .3s;
  display: flex;
  align-items: center;
  overflow: hidden;
}

#P-Navigation-Menu .menuNumber {
  width: 3.5em;
  heigth: 3.5em;
  justify-content: center;
}

#P-Navigation-Menu .menuNumber.active {
  background-color: #1944bd;
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
  padding-left: .9em;
  padding-right: .9em;
  transition: all .3s;
}

#P-Navigation-Menu .dot {
  height: 1em;
  width: 1em;
  background-color: #fff;
  border-radius: 50%;
  display: inline-block;
  transition: all .3s;
}

#P-Navigation-Menu .dotContainer.disabled {
  width: 0em;
  padding: 0;
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
  showAll();
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
  if (sw > 2){
    dotContainer1.classList.remove("disabled");
  } else {
    dotContainer1.classList.add("disabled");
  }
  
  if (sw < menuList.length - 3) {
    dotContainer2.classList.remove("disabled");
  } else {
    dotContainer2.classList.add("disabled");
  }
  for (var i = 1; i < menuList.length - 1; i++){
    if (sw > 2 && sw < menuList.length-3){
      if (i != sw && i != sw-1 && i != sw+1) {
        menuList[i].style.maxWidth = '0px';
      }
      else {
        menuList[i].style.maxWidth = '';
      }
    }
    else if (sw < 3) {
      if (i != sw && i >= 4) {
        menuList[i].style.maxWidth = '0px';
      }
      else {
        menuList[i].style.maxWidth = '';
      }
    }
    else if (sw > menuList.length-4) {
       if (i < menuList.length-4) {
        menuList[i].style.maxWidth = '0px';
      }
      else {
        menuList[i].style.maxWidth = '';
      }
    }
  }
}

function showAll(){
 var worksheetsList = document.getElementsByClassName("liveworksheet");
 navigationMenu.style.display = "";
  /*
  for (var j = 0; j < worksheetsList.length; j++){
    console.log(worksheetsList[j]);
    worksheetsList[j].getElementsByTagName("div")[0].style.height = "";
    worksheetsList[j].getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.height = "";
  }
  */
  toggleWorksheets(0);
 //Fixing Firefox bug
 menuList[0].click();
}
