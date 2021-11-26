var navigationMenu = document.getElementById("P-Navigation");
var container = document.getElementById("P-Container");
worksheetsList = document.getElementsByClassName("liveworksheet");
selectedWorksheet = 0;
toggleWorksheets(selectedWorksheet);

navigationMenu.style.display = "flex";
navigationMenu.style.alignItems = "center";
navigationMenu.style.justifyContent = "center";
navigationMenu.style.margin = "10px";

for (var i = 0; i < worksheetsList.length; i++) { 
  menuEl = document.createElement("a");
  menuEl.value = i;
  menuEl.style.width = menuEl.style.height = "30px";
  menuEl.innerHTML = "Page " + i;
  menuEl.style.cursor = "pointer";
  menuEl.style.backgroundColor = "blue";
  menuEl.style.padding = "10%";
  menuEl.style.marginLeft = menuEl.style.marginRight = "15px";
  menuEl.style.borderRadius = "50%";
  navigationMenu.insertAdjacentElement("beforeend",menuEl);
}

function toggleWorksheets(sw){
  for (var i = 1; i < worksheetsList.length; i++) { 
    (i != sw) ? worksheetsList[i].style.display = 'none' : worksheetsList[i].style.display = 'block';
  }
}
