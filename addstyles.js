var navigationMenu = document.getElementById("P-Navigation");
var container = document.getElementById("P-Container);
worksheetsList = document.getElementsByClassName("worksheets");
selectedWorksheet = 0;
toggleWorksheets(selectedWorksheet);

for (var i = 0; i < worksheetsList.length; i++) { 
  menuEl = document.createElement("a");
  menuEl.value = i
}

function toggleWorksheets(sw){
  for (var i = 1; i < worksheetsList.length; i++) { 
    (i == sw) ? worksheetsList[i].style.display = 'none' : worksheetsList[i].style.display = 'block';
  }
}
