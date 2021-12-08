var navigationMenuContainer = document.getElementById("P-Navigation");
var navigationMenu = document.getElementById("P-Navigation-Menu");
var container = document.getElementById("P-Container");
var worksheetsList = document.getElementsByClassName("liveworksheet");
var selectedWorksheet = 0;
var menuList = [];

navigationMenu.style.display = "flex";
navigationMenu.style.alignItems = "center";
navigationMenu.style.justifyContent = "center";
navigationMenu.style.marginTop = navigationMenu.style.marginBottom = "10px";
menuElements = [];

for (var i = 0; i < worksheetsList.length; i++) { 
  menuEl = document.createElement("a");
  menuEl.value = i;
  page = i+1;
  menuEl.innerHTML = page;
  menuEl.classList.add("menuNumber");
  menuEl.style.paddingLeft = menuEl.style.paddingRight = "12px";
  menuEl.style.paddingTop = menuEl.style.paddingBotton = "10px";
  menuEl.style.marginLeft = menuEl.style.marginRight = "5px";
  menuEl.style.transition = "all 0.3s";
  menuEl.addEventListener("click", changeWorksheet);
  menuElements.push(menuEl);
  navigationMenu.insertAdjacentElement("beforeend", menuEl);
  menuList.push(menuEl);
}

var leftArrow = document.createElement("a");
var rightArrow = document.createElement("a");
leftArrow.innerHTML = "&#8678;";
rightArrow.innerHTML = "&#8680;";
  leftArrow.style.cursor = rightArrow.style.cursor = "pointer";
  leftArrow.style.userSelect = rightArrow.style.userSelect = "none";
  leftArrow.style.backgroundColor = rightArrow.style.backgroundColor = "#00b0ea";
  leftArrow.style.color = rightArrow.style.color = "#FFFFFF";
  leftArrow.style.fontSize = rightArrow.style.fontSize = "1.2em";
  leftArrow.style.fontFamily = rightArrow.style.fontFamily = "Arial";
  leftArrow.style.paddingLeft = rightArrow.style.paddingLeft = "12px";
  leftArrow.style.paddingRight = rightArrow.style.paddingRight = "12px";
  leftArrow.style.paddingTop = rightArrow.style.paddingTop = "5px";
  leftArrow.style.paddingBottom = rightArrow.style.paddingBottom = "5px";
  leftArrow.style.MarginLeft = rightArrow.style.MarginLeft = "5px";
  leftArrow.style.MarginRight = rightArrow.style.MarginRight = "5px";
  leftArrow.style.borderRadius = rightArrow.style.borderRadius = "5%";
  leftArrow.style.transition = rightArrow.style.transition = "all 0.4s";
  leftArrow.value = rightArrow.value = -1;
  leftArrow.addEventListener("click", function(ev){if (selectedWorksheet > 0) {selectedWorksheet -= 1; changeWorksheet(ev);}});
  rightArrow.addEventListener("click", function(ev){if (selectedWorksheet < worksheetsList.length-1) {selectedWorksheet += 1; changeWorksheet(ev);}});

navigationMenu.insertAdjacentElement("afterbegin", leftArrow);
navigationMenu.insertAdjacentElement("beforeend", rightArrow);

var classes = `
#P-Navigation-Menu {
  display: inline-flex;
  background-color: #2c63ff;
  box-shadow: 0 10px 20px #26418f;
  user-select: none;
  overflow: hidden;
}

#P-Navigation-Menu .menuNumber {
  cursor: pointer;
  user-select: none;
  background-color: #00b0ea;
  color: #FFFFFF;
  font-size: 1.2em;
  font-family: Arial;
}

#P-Navigation-Menu .menuNumber:hover {
  transform: scale(1.05);
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
    (i != sw) ? menuElements[i].style.backgroundColor = '#00b0ea' : menuElements[i].style.backgroundColor = '#1261a0';
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
