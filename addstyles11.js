var navigationMenu = document.getElementById("P-Navigation");
var container = document.getElementById("P-Container");
worksheetsList = document.getElementsByClassName("liveworksheet");
selectedWorksheet = 0;

navigationMenu.style.display = "flex";
navigationMenu.style.alignItems = "center";
navigationMenu.style.justifyContent = "center";
navigationMenu.style.marginTop = navigationMenu.style.marginBottom = "10px";
menuElements = [];

for (var i = 0; i < worksheetsList.length; i++) { 
  menuEl = document.createElement("a");
  menuEl.value = i;
  menuEl.innerHTML = "Page " + i;
  menuEl.style.cursor = "pointer";
  menuEl.style.backgroundColor = "#00b0ea";
  menuEl.style.color = "#FFFFFF";
  menuEl.style.fontSize = "1.2em";
  menuEl.style.fontFamily = "Arial";
  menuEl.style.paddingLeft = menuEl.style.paddingRight = "12px";
  menuEl.style.paddingTop = menuEl.style.paddingBotton = "10px";
  menuEl.style.marginLeft = menuEl.style.marginRight = "5px";
  menuEl.style.borderRadius = "5%";
  menuEl.style.transition = "all 0.3s";
  menuEl.addEventListener("click", changeWorksheet);
  menuEl.addEventListener("mouseenter", menuHover);
  menuEl.addEventListener("mouseleave", menuHoverExit);
  menuElements.push(menuEl);
  navigationMenu.insertAdjacentElement("beforeend", menuEl);
}

var leftArrow = document.createElement("a");
var rightArrow = document.createElement("a");
leftArrow.innerHTML = "&#8678;";
rightArrow.innerHTML = "&#8680;";
  leftArrow.style.cursor = rightArrow.style.cursor = "pointer";
  leftArrow.style.backgroundColor = rightArrow.style.backgroundColor = "#00b0ea";
  leftArrow.style.color = rightArrow.style.color = "#FFFFFF";
  leftArrow.style.fontSize = rightArrow.style.fontSize = "1.2em";
  leftArrow.style.fontFamily = rightArrow.style.fontFamily = "Arial";
  leftArrow.style.paddingLeft = rightArrow.style.paddingLeft = "12px";
  leftArrow.style.paddingRight = rightArrow.style.paddingRight = "12px";
  leftArrow.style.paddingTop = rightArrow.style.paddingTop = "10px";
  leftArrow.style.paddingBottom = rightArrow.style.paddingBottom = "10px";
  leftArrow.style.MarginLeft = rightArrow.style.MarginLeft = "5px";
  leftArrow.style.MarginRight = rightArrow.style.MarginRight = "5px";
  leftArrow.style.borderRadius = rightArrow.style.borderRadius = "5%";
  leftArrow.style.transition = rightArrow.style.transition = "all 0.4s";
  leftArrow.addEventListener("click", function(){if (selectedWorksheet > 0) {selectedWorksheet -= 1; changeWorksheet();}});
  rightArrow.addEventListener("click", function(){if (selectedWorksheet < worksheetsList.length-1) {selectedWorksheet += 1; changeWorksheet();}});
  leftArrow.addEventListener("mouseenter", menuHover);
  rightArrow.addEventListener("mouseenter", menuHover);
  leftArrow.addEventListener("mouseleave", menuHoverExit);
  rightArrow.addEventListener("mouseleave", menuHoverExit);

navigationMenu.insertAdjacentElement("afterbegin", leftArrow);
navigationMenu.insertAdjacentElement("beforeend", rightArrow);

toggleWorksheets(selectedWorksheet);

function changeWorksheet(ev){
  if (ev)
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
}

function menuHover(ev){
ev.currentTarget.style.transform = "scale(1.1)";
}
function menuHoverExit(ev){
ev.currentTarget.style.transform = "scale(1)";
}
