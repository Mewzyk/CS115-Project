var wins = 0;
var lose = 0;

var board = d3.select("body").append("svg")
    .attr("width", 800)
    .attr("height", 150)
	.style("display", "block")
    .append("g")
	.attr("transform", "translate(25, 25)");

var items = [{color:"red", value:"0", transform:"translate(0,0)"},
			 {color:"blue", value:"1", transform:"translate(150,0)"},
			 {color:"black", value:"2", transform:"translate(300,0)"}];

board.selectAll('.rect').data(items).enter()
	.append('rect')
	.attr('width', '100')
	.attr('height', '100')
	.attr('fill', function(d){return d.color})
	.attr('transform', function(d){return d.transform})
	.on("mouseover", mouseHover)
	.on("mouseout", mouseOut)
	.on("click", click);

//OLD CODE THAT IS DONE BY THIS ^

/*
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

*/

var score = d3.select("body").append("svg")
    .attr("width", 400)
    .attr("height", 100)
	.attr("transform", "translate(25,25)")
	.style("display", "block")
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
	.text("Loses: ")
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

d3.select("body").append("svg")
    .attr("width", 400)
    .attr("height", 50);


d3.select("body").append("p").text("Red beats Blue");

d3.select("body").append("p").text("Blue beats Black");

d3.select("body").append("p").text("Black beats Red");

console.log(d3.selectAll('.rect'));


function click(){
	choice = d3.select(this).datum().value;
	compChoice = computerChoice();
	
	//implement display computer choice to html here.
	
	chickenDinner = winner(choice, compChoice);
	
	console.log(chickenDinner);
	if(chickenDinner < 0) d3.selectAll('.status').text("Status: Tie!");
	
	if(chickenDinner == 0){
		console.log(lose);
		lose = lose + 1;
		d3.selectAll('.status').text("Status: You lose!");
		d3.selectAll('.loss').text("Losses: " + lose);
		console.log(lose);
	}
	
	if(chickenDinner == 1){
		wins = wins + 1;
		d3.selectAll('.status').text("Status: You win!");
		d3.selectAll('.wins').text("Wins: " + wins);
	}
	
}

function mouseHover(){
	d3.select(this)
			.transition()
			.attr('width', '110')
			.attr('height', '110')
			.attr('stroke', 'black');
}

function mouseOut(){
	d3.select(this)
			.transition()
			.attr('width', '100')
			.attr('height', '100')
			.attr('stroke', 'none');
}

function computerChoice(){
	return Math.floor(3 * Math.random());
}

/*
Returns 1 for User win
Returns 0 for Computer Win
Returns -1 for Tie
*/
function winner(userInput, compInput){
	if(userInput == 2 && compInput == 0) return 1;
	if(userInput == 0 && compInput == 2) return 0;
	if(userInput < compInput) return 1;
	if(compInput < userInput) return 0;
	if(compInput == userInput) return -1;	
}
