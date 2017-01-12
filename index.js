var circle_od = 77;
var stroke_length = Math.ceil(2 * 3.14159 * 0.8 *circle_od);
var ratings = [0.9, 0.6, 0.2, 1, 0.6];
var ratings = [["foo", 0.9], ["bar", 0.6], ["willy", 0.2], ["wonka", 1], ["tony hawk", 0.6]];
for (var i=0; i<ratings.length; i++) {
    document.getElementById("circles").innerHTML += '<div class="circle-stats"><svg class="circle"><circle cx="50px" cy="50px" r="40" class="inner1" /><circle cx="50px" cy="50px" r="40" class="inner2" /></svg>' + ratings[i][0] + '</div>';
}

/*

        <div class="circle-stats">
            <svg class="circle">
                <circle cx="50px" cy="50px" r="40" class="inner1" />
                <circle cx="50px" cy="50px" r="40" class="inner2" />
            </svg>
        </div>

        */


var circles = document.getElementsByClassName("circle-stats");
for (i = 0; i < circles.length; i++) {
    var circle = circles[i].children[0];
    var inner1 = circle.children[0];
    var inner2 = circle.children[1];

    inner1.setAttribute("cx", circle_od);
    inner1.setAttribute("cy", circle_od);
    inner1.setAttribute("r",  0.8 * circle_od);
    inner1.setAttribute("stroke-dasharray", stroke_length + " " + stroke_length);

    inner2.setAttribute("cx", circle_od);
    inner2.setAttribute("cy", circle_od);
    inner2.setAttribute("r",  0.8 * circle_od);
    inner2.setAttribute("stroke-dasharray", ratings[i][1] * stroke_length + " " + stroke_length);

    circle.setAttribute("height", 2 * circle_od);
    circle.setAttribute("width", 2 * circle_od);
}

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