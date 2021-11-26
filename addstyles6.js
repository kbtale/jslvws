var navigationMenu = document.getElementById("P-Navigation");
var container = document.getElementById("P-Container");
worksheetsList = document.getElementsByClassName("liveworksheet");
selectedWorksheet = 0;
toggleWorksheets(selectedWorksheet);

navigationMenu.style.display = "flex";
navigationMenu.style.alignItems = "center";
navigationMenu.style.justifyContent = "center";
navigationMenu.style.margin = "10px";
menuElements = [];

for (var i = 0; i < worksheetsList.length; i++) { 
  menuEl = document.createElement("a");
  menuEl.value = i;
  menuEl.style.width = menuEl.style.height = "30px";
  menuEl.innerHTML = "Page " + i;
  menuEl.style.cursor = "pointer";
  menuEl.style.backgroundColor = "#00b0ea";
  menuEl.style.color = "#FFFFFF";
  menuEl.style.paddingLeft = menuEl.style.paddingRight = "10px";
  menuEl.style.paddingTop = menuEl.style.paddingBotton = "5px";
  menuEl.style.marginLeft = menuEl.style.marginRight = "5px";
  menuEl.style.borderRadius = "30%";
  menuEl.addEventListener("click", changeWorksheet);
  menuElements.push(menuEl);
  navigationMenu.insertAdjacentElement("beforeend",menuEl);
}

function changeWorksheet(ev){
  selectedWorksheet = ev.currentTarget.value;
  toggleWorksheets(selectedWorksheet);
}

function toggleWorksheets(sw){
  for (var i = 1; i < worksheetsList.length; i++) { 
    (i != sw) ? worksheetsList[i].style.display = 'none' : worksheetsList[i].style.display = 'block';
  }
}
