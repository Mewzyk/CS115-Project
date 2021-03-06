//variables to hold global wins and losses for a given page
var wins = 0;
var lose = 0;

//svg wrapper that holds the squares
var board = d3.select("body").append("svg")
    .attr("width", 850)
    .attr("height", 150)
	.style("display", "block")
    .append("g")
	.attr("transform", "translate(25, 25)");

/*
//object that holds the values specific for each rectangle
//Used to feed into the .selectAll in next line
//replace colored rect options with rock, paper, scissor images
// OLD CODE REPLACED BY CODE BELOW THAT USES RPS IMAGES INSTEAD OF RECTS
var choices = [{color: "red", value: 0, transform: "translate(0,0)", stroke: 'none'},
			   {color: "black", value: 1, transform: "translate(150,0)", stroke: 'none'},
			   {color: "blue", value: 2, transform: "translate(300,0)", stroke: 'none'}];
*/

// object that holds the values/images for each RPS option
// used to feed into teh .selectAll in the next line
var images = [{value: 0, link: "https://img.clipartfest.com/201616f9cdd7deb314215b1be524d2a2_clipart-alpine-landscape-rock-rock-clipart_800-534.png", transform: "translate(0,0)" },
              {value: 1, link: "http://www.clipartbest.com/cliparts/biy/LEM/biyLEMk4T.png", transform: "translate(150,0)"},
              {value: 2, link: "http://www.clipartbest.com/cliparts/KTn/Xj6/KTnXj6Mgc.png", transform: "translate(300,0)"}];

board.selectAll(("image")).data(images).enter()
    .append(("image"))
    .attr("xlink:href", function(d){return d.link})
    .attr("width", 100)
    .attr("height", 100)
    .attr('transform', function(d){return d.transform})
	.on("mouseover", mouseHover)
	.on("mouseout", mouseOut)
	.on("click", click);

/*
//Enters the data in 'items' each into their own rectangle
//Each line beyond enter() is executed once for each data point (so three times)
board.selectAll('.rect').data(choices).enter()
	.append('rect')
	.attr('width', '50')
	.attr('height', '50')
	.attr('stroke', 'black')
	.attr('fill', 'white')
	.attr('transform', function(d){return d.transform})
	.on("mouseover", mouseHover2)
	.on("mouseout", mouseOut2)
	.on("click", click);
*/

//Svg wrapper to hold the square box. 
var score = d3.select("body").append("svg")
    .attr("width", 800)
    .attr("height", 100)
	.attr("transform", "translate(25,25)")
	.style("display", "block")
    .append("g");

//rectangle border around the svg
score.append('rect')
	.attr('width', '800')
	.attr('height', '80')
	.attr('fill', 'none')
	.attr('stroke', 'black')
	.attr('stroke-width', '2')
	.attr("transform", "translate(0,0)");

//Text that holds wins
score.append("text")
	.text("Wins: ")
	.attr("font-size", "20")
	.attr("transform", "translate(5,17)")
	.classed("wins", true);

//Text that holds losses
score.append("text")
	.text("Loses: ")
	.attr("font-size", "20")
	.attr("transform", "translate(5,45)")
	.classed("loss", true);

//Text that holds the status text
score.append("text")
	.text("Status: ")
	.attr("font-size", "20")
	.attr("transform", "translate(5,73)")
	.classed("status", true);

//Text that holds the user choice text
score.append("text")
	.text("You chose: ")
	.attr("font-size", "10")
	.attr("transform", "translate(535,17)")
	.classed("you", true);

//Text that holds the computer choice text
score.append("text")
	.text("Computer chose: ")
	.attr("font-size", "10")
	.attr("transform", "translate(685,17)")
	.classed("computer", true);

/**
USE THE NEXT THREE LINES AS EXAMPLES FOR HOW TO DYNAMICALLY EDIT THE HTML
*/
//example code that sets the wins to 0 at init
d3.selectAll('.wins')
	.text("Wins: " + 0);

//example code that sets loss to 0 at init.
d3.selectAll('.loss')
	.text("Losses: " + 0);

d3.selectAll('.status')
	.text("Status: Have fun!");

d3.selectAll('.you')
    .text("You chose:");

d3.selectAll('.computer')
    .text("Computer chose:");

//Extra little sg that holds the rules
d3.select("body").append("svg")
    .attr("width", 400)
    .attr("height", 50);


d3.select("body").append("p").text("Rules:");

d3.select("body").append("p").text("Rock beats Scissor");

d3.select("body").append("p").text("Scissor beats Paper");

d3.select("body").append("p").text("Paper beats Rock");

console.log(d3.selectAll('.rect'));


//on click function that is used for each square
function click() {
    
	userChoice = d3.select(this).datum().value; // user choice
	compChoice = computerChoice(); // computer choice 
    
	// determine outcome and save result as a numeric value that can be further interpretted 
	chickenDinner = winner(userChoice, compChoice);
	
	console.log(chickenDinner);
    // Tie
	if(chickenDinner < 0) d3.selectAll('.status').text("Status: Tie!");
	
    // User Loses
	if(chickenDinner == 0){
		console.log(lose);
		lose = lose + 1;
		d3.selectAll('.status').text("Status: You lose!");
		d3.selectAll('.loss').text("Losses: " + lose);
		console.log(lose);
	}
	
    // User Wins
	if(chickenDinner == 1){
		wins = wins + 1;
		d3.selectAll('.status').text("Status: You win!");
		d3.selectAll('.wins').text("Wins: " + wins);
	}
    
    // reset user choice
    Image('blank', 500, -25);
    // reset comp choice
    Image('blank', 650, -25);
    
    var RPS = ["rock", "paper", "scissor"]; // list of RPS options
    for (i = 0; i < 3; i++) {
        if (getChoice(userChoice) == RPS[i]) { 
            d3.selectAll('.you').text("You chose: " + Image(RPS[i], 500, 0));
        }
    }
    for (i = 0; i < 3; i++) {
        if (getChoice(compChoice) == RPS[i]) {
            d3.selectAll('.computer').text("Computer chose: " + Image(RPS[i], 650, 0));
        }  
    }
}

/**
Following two functions are assigned to each square and basically just increase/decrease the size of the squares on hover.
*/

function mouseHover(){
	d3.select(this)
			.transition()
			.attr('width', '110')
			.attr('height', '110')
			.attr('stroke', 'none');
}

function mouseOut(){
	d3.select(this)
			.transition()
			.attr('width', '100')
			.attr('height', '100')
			.attr('stroke', 'none');
}

//RNG function
function computerChoice(){
	return Math.floor(3 * Math.random()); // randomly choose a number between 0 and 2 for the computer's choice
}

// displays the options as well as user/computer choices
// parameters: choice = rock, paper, scissor; x = x data; y = y data
function Image(choice, x, y) {
    
    RPS = ['rock', 'paper', 'scissor'];
    links = ["https://img.clipartfest.com/201616f9cdd7deb314215b1be524d2a2_clipart-alpine-landscape-rock-rock-clipart_800-534.png", "http://www.clipartbest.com/cliparts/biy/LEM/biyLEMk4T.png", "http://www.clipartbest.com/cliparts/KTn/Xj6/KTnXj6Mgc.png"]; // links are in the order RPS
    
    for (i = 0; i < 3; i++) {
        if (choice == RPS[i]) {
            var img = board.append("svg:image")
                .attr("xlink:href", links[i])
                .attr("width", 100)
                .attr("height", 100)
                .attr("x", x)
                .attr("y",y)
                .on("mouseover", mouseHover)
                .on("mouseout", mouseOut);
        }   
    } 
    
    // blank reset
    if (choice == 'blank') {
        var img = board.append("svg:image")
            .attr("xlink:href", "https://s-media-cache-ak0.pinimg.com/236x/ef/fc/f6/effcf6728d028df02850fe65a458189e.jpg")
            .attr("width", 100)
            .attr("height", 200)
            .attr("x", x)
            .attr("y",y);
    }
    
    return choice;
    
    /*
    // OLD CODE REPLACED BY THE ABOVE 
    if (choice == 'rock') {
        var img = board.append("svg:image")
            .attr("xlink:href", "https://img.clipartfest.com/201616f9cdd7deb314215b1be524d2a2_clipart-alpine-landscape-rock-rock-clipart_800-534.png")
            .attr("width", 100)
            .attr("height", 100)
            .attr("x", x)
            .attr("y",y)
            .on("mouseover", mouseHover)
            .on("mouseout", mouseOut);
    }   
    // scissor
    if (choice == 'paper') {
        var img = board.append("svg:image") 
            .attr("xlink:href", "http://www.clipartbest.com/cliparts/biy/LEM/biyLEMk4T.png")
            .attr("width", 100)
            .attr("height", 100)
            .attr("x", x)
            .attr("y", y)
            .on("mouseover", mouseHover)
            .on("mouseout", mouseOut);
    }
    // paper
    if (choice == 'scissor') {
        var img = board.append("svg:image") 
            .attr("xlink:href", "http://www.clipartbest.com/cliparts/KTn/Xj6/KTnXj6Mgc.png")
            .attr("width", 100)
            .attr("height", 100)
            .attr("x", x)
            .attr("y", y)
            .on("mouseover", mouseHover)
            .on("mouseout", mouseOut);
    }     
    return choice;
    */
}


/*
Returns 1 for User win
Returns 0 for Computer Win
Returns -1 for Tie
*/
function winner(userInput, compInput){
	if(userInput == 0 && compInput == 2) return 1; // R > S
    if(userInput == 1 && compInput == 0) return 1; // P > R
    if(userInput == 2 && compInput == 1) return 1; // S > P
    if(userInput == 0 && compInput == 1) return 0; // R < P
    if(userInput == 1 && compInput == 2) return 0; // P < S
    if(userInput == 2 && compInput == 0) return 0; // S < R
	if(compInput == userInput) return -1;	
}

function getChoice(value){
	if(value == 0) return 'rock';
	if(value == 1) return 'paper';
	if(value == 2) return 'scissor';
}
