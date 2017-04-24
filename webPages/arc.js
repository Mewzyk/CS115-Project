var pi = Math.PI;

var vis = d3.select("body").append("svg")
    .attr("width", 1000)
    .attr("height", 1000)
    .append("g")

var arc = d3.svg.arc()
    .innerRadius(50)
    .outerRadius(70)
    .startAngle(45 * (Math.PI/180)) //converting from degs to radians
    .endAngle(3) //just radians

vis.append("path")
    .attr("d", arc)
    .attr("transform", "translate(200,200)")