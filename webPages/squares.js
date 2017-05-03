var board = d3.select("body").append("svg")
    .attr("width", 800)
    .attr("height", 150)
    .append("g")
	.attr("transform", "translate(25, 25)");

board.append('rect')
	.attr('width', '100')
	.attr('height', '100')
	.attr('fill', 'red')
	.attr("transform", "translate(0,0)")
	.on("mouseover", mouseHover)
	.on("mouseout", mouseOut);

board.append('rect')
	.attr('width', '100')
	.attr('height', '100')
	.attr('fill', 'blue')
	.attr("transform", "translate(150,0)")
	.on("mouseover", mouseHover)
	.on("mouseout", mouseOut);

board.append('rect')
	.attr('width', '100')
	.attr('height', '100')
	.attr('fill', 'black')
	.attr("transform", "translate(300,0)")
	.on("mouseover", mouseHover)
	.on("mouseout", mouseOut);

var score = d3.select("body").append("svg")
    .attr("width", 400)
    .attr("height", 100)
	.attr("transform", "translate(25,25)")
    .append("g");
	

score.append('rect')
	.attr('width', '400')
	.attr('height', '100')
	.attr('fill', 'none')
	.attr('stroke', 'black')
	.attr('stroke-width', '2')
	.attr("transform", "translate(0,0)");

score.append("text")
	.text("Wins: ")
	.attr("font-size", "20")
	.attr("transform", "translate(5,17)")
	.classed("wins", true);

score.append("text")
	.text("Losses: ")
	.attr("font-size", "20")
	.attr("transform", "translate(5,45)")
	.classed("loss", true);

score.append("text")
	.text("Status: ")
	.attr("font-size", "20")
	.attr("transform", "translate(5,73)")
	.classed("status", true);


d3.selectAll('.wins')
	.text("Wins: " + 0);

d3.selectAll('.loss')
	.text("Losses: " + 0);

d3.selectAll('.status')
	.text("Status: Have fun!")

function mouseHover(){
	d3.select(this)
			.transition()
			.attr('width', '105')
			.attr('height', '105')
			.attr('stroke', 'black');
}

function mouseOut(){
	d3.select(this)
			.transition()
			.attr('width', '100')
			.attr('height', '100')
			.attr('stroke', 'none');
}
