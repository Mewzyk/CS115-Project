var pi = Math.PI;

var vis = d3.select("body").append("svg")
    .attr("width", 800)
    .attr("height", 800)
    .append("g")
	.attr("transform", "translate(260,50)");

var rockArc = d3.svg.arc()
    .innerRadius(200)
    .outerRadius(240)
    .startAngle(0) //converting from degs to radians
    .endAngle((2 * pi) / 3); //just radians

var paperArc = d3.svg.arc()
    .innerRadius(200)
    .outerRadius(240)
    .startAngle((2 * pi) / 3) //converting from degs to radians
    .endAngle(2 * (2 * pi) / 3); //just radians

var scissorArc = d3.svg.arc()
    .innerRadius(200)
    .outerRadius(240)
    .startAngle(2 * (2 * pi) / 3) //converting from degs to radians
    .endAngle(2 * pi); //just radians

vis.append("path")
    .attr("d", paperArc)
    .attr("transform", "translate(200,200)")
	.attr("stroke", "blue");

vis.append("path")
    .attr("d", rockArc)
    .attr("transform", "translate(200,200)")
	.attr("stroke", "red")
	.attr("fill", "red");

vis.append("path")
    .attr("d", scissorArc)
    .attr("transform", "translate(200,200)")
	.attr("stroke", "green")
	.attr("fill", "green");

console.log(paperArc.centroid());
rockLocation = rockArc.centroid;
paperLocation = paperArc.centroid;
scissorLocation = scissorArc.centroid;
console.log(rockArc.centroid());

vis.append("circle")
	.attr("cx", rockLocation[0])
	.attr("cy", rockLocation[1])
	.attr("r", "50")
	.attr("fill", "green")
	.on('mouseover', function(d){
	d3.select(this).attr("r", "100");
	})
	.on('mouseout', function(d){
		d3.select(this).attr("r", "50");
	});

vis.append("circle")
	.attr("cx", paperLocation[0])
	.attr("cy", paperLocation[1])
	.attr("r", "50")
	.attr("fill", "blue")
	.on('mouseover', function(d){
		d3.select(this).attr("r", "100");
	})
	.on('mouseout', function(d){
		d3.select(this).attr("r", "50");
	});

vis.append("circle")
	.attr("cx", scissorLocation[0])
	.attr("cy", scissorLocation[1])
	.attr("r", "50")
	.attr("fill", "red")
	.on('mouseover', function(d){
	d3.select(this).attr("r", "100");
	})
	.on('mouseout', function(d){
		d3.select(this).attr("r", "50");
	});