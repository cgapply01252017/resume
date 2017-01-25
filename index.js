
var circle_od = window.innerWidth > 500 ? 70 : 45;
//circle_od = 45;
var stroke_length = Math.ceil(2 * 3.14159 * 0.8 * circle_od);
var ratings = [0.9, 0.6, 0.2, 1, 0.6];
var ratings = [["React", 0.85], ["ES6", 0.9], ["CSS (SCSS)", 0.8], ["Git", 0.7]];
for (var i = 0; i < ratings.length; i++) {
    document.getElementById("circles").innerHTML += '<div class="circle-stats"><svg class="circle"><circle cx="50px" cy="50px" r="40" class="inner1" /><circle cx="50px" cy="50px" r="40" class="inner2" /></svg>' + ratings[i][0] + '</div>';
}

var circles = document.getElementsByClassName("circle-stats");

for (i = 0; i < circles.length; i++) {
    var circle = circles[i].children[0];
    var inner1 = circle.children[0];
    var inner2 = circle.children[1];

    inner1.setAttribute("cx", circle_od);
    inner1.setAttribute("cy", circle_od);
    inner1.setAttribute("r", 0.8 * circle_od);
    inner1.setAttribute("stroke-dasharray", stroke_length + " " + stroke_length);

    inner2.setAttribute("cx", circle_od);
    inner2.setAttribute("cy", circle_od);
    inner2.setAttribute("r", 0.8 * circle_od);

    circle.setAttribute("height", 2 * circle_od);
    circle.setAttribute("width", 2 * circle_od);
}

var arcs = [];
arcs[0] = 1;
function getCircles() {
    function getCircle(i) {
        function circle_loop() {
            circles[i].children[0].children[1].setAttribute("stroke-dasharray", arcs[i] * stroke_length + " " + stroke_length);
            setTimeout(function () {
                arcs[i] += 0.020;
                if (arcs[i] < ratings[i][1]) {
                    circle_loop();
                }
            }, 30);
        };
        circle_loop();
    }
    for (var i = 0; i < circles.length; i++) {
        arcs[i] = 0;
        getCircle(i);
    }
    return arcs[0] > ratings[0][1];
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

        if(e.srcElement.id === "resume" && arcs[0] >= ratings[0][1]) {
            getCircles();
        }
    }
}