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
menuElements = [];

for (var i = 0; i < worksheetsList.length; i++) { 
  menuEl = document.createElement("a");
  menuEl.value = i;
  page = i+1;
  menuEl.innerHTML = page;
  menuEl.classList.add("menuItem");
  menuEl.classList.add("menuNumber");
  menuEl.addEventListener("click", changeWorksheet);
  menuElements.push(menuEl);
  navigationMenu.insertAdjacentElement("beforeend", menuEl);
  menuList.push(menuEl);
}

var leftArrow = document.createElement("a");
var rightArrow = document.createElement("a");
leftArrow.innerHTML = "&#8678;";
rightArrow.innerHTML = "&#8680;";
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
}

#P-Navigation-Menu .menuItem {
  cursor: pointer;
  user-select: none;
  color: #FFFFFF;
  font-size: 1.2em;
  font-family: Arial;
  transition: all .3s;
  text-align: center;
}

#P-Navigation-Menu .menuNumber {
  width: 3.5em;
  heigth: 3.5em;
  display: flex;
  align-items: center;
  justify-content: center;
}

#P-Navigation-Menu .menuNumber.active {
  background-color: #1944bd;
}

#P-Navigation-Menu .menuArrow-l, #P-Navigation-Menu .menuArrow-r {
  width: 3.5em;
  heigth: 3.5em;
}

#P-Navigation-Menu .menuNumber:hover, #P-Navigation-Menu .menuArrow-l:hover, #P-Navigation-Menu .menuArrow-r:hover {
  background-color: #2d59d6;
}
#P-Navigation-Menu .menuArrow-r:hover {
  transform: translateX(10%) scale(1.1);
}
#P-Navigation-Menu .menuArrow-l:hover {
  transform: translateX(-10%) scale(1.1);
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

window.onload = showAll;

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
    (i != sw) ? menuElements[i].classList.remove("active") : menuElements[i].classList.add("active");
  }
  if (sw > 5){
    
  }
  if (sw < menuList.length - 5) {
    
  }
  for (var i = 2; i < menuList.length - 3; i++){
    if (i != menuList.length && i != menuList.length-1 && i != menuList.length+1) {
      menuElements[i].style.display = 'block';
    }
    else {
      menuElements[i].style.display = 'none';
    }
  }
}

function showAll(){
 var worksheetsList = document.getElementsByClassName("liveworksheet");
  for (var j = 0; j < worksheetsList.length; j++){
    worksheetsList[j].getElementsByTagName("div")[0].style.height = "";
    worksheetsList[j].getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.height = "";
  }
  toggleWorksheets(0);
}
