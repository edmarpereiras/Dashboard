const panel = document.getElementById("panel");
const list = document.getElementById("list");

const panelBtn = document.getElementById("showPanel");
const listBtn = document.getElementById("showList");

panelBtn.onclick = function() {
    if(panel.style.display === "none") {
        panel.style.display = "block"
    }else{
        panel.style.display = "none"
    }
};

listBtn.onclick = function() {
    if(list.style.display === "none") {
        list.style.display = "flex"
    }else{
        list.style.display = "none"
    }
};

title.onclick = function() {
    title.style.color = "red";
};