var links = ["hello", "resume", "portfolio"];
var id = "";


for (var i = 0; i < links.length; i++) {
    document.getElementById(links[i]).onclick = function (e) {
        for (var j = 0; j < links.length; j++) {
            id = links[j] + "Div";
            document.getElementById(id).style.display = "none"
        }
        id = e.srcElement.id + "Div";
        document.getElementById(id).style.display = "flex";
    }
}