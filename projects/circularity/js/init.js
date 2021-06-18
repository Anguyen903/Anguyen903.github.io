var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
        game.checkCirclePosition = function(circle){
            if(circle.x > canvas.width){
                circle.x = 0;
            }
        }
        var circle;			// variable to hold a single circle when creating circles / iterating
        var circles = [100];	// variable to store all circles in one Array

        // TODO 2 : Create a function that draws a circle 
        game.checkCirclePosition = function(circle){
            if (circle.x > canvas.width){
                circle.x = 0;
            }
        }
        drawCircle
        // Code to draw a circle
        circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
        physikz.addRandomVelocity(circle, canvas);
        view.addChild(circle);
        circles.push(circle); 

        function nameOfFunction(parameters) { 

        }

        // TODO 3 / 8 : Call the drawCircle() function 
        game.checkCirclePosition = function(circle){
            if ( circle.x > canvas.width ){
                circle.x = 0;
            }
        }

drawCircle(100);

var loopsCompleted = 0; 
while (loopsCompleted < 10) {
    // do something
    loopsCompleted++
}

for (var loopsCompleted = 0; loopsCompleted < 10; loopsCompleted++) {
    // do something
}


nameOfFunction(5);
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the circle's position //
            game.checkCirclePosition = function(circle){
                if ( circle.x > canvas.width){
                    circle.x = 0;
                }
            }
         
        functionCallsHadToBeDeletedBecauseItIsRequired
            myArray[0] //--> returns the first value in myArray
            myArray[1] //--> returns the second value in myArray
            
            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
            game.checkCirclePosition = function(circle){
                if (circle.x > canvas.width){
                    circle.x = 0;
                }
            }
            
            functionCallsHadToBeDeletedBecauseItIsRequired
            // TODO 9 : Iterate over the array
           game.checkCirclePosition = function(circle){
               if (circle.x > canvas.width){
                   circle.x = 0;
               }
           }
            
        }

        game.checkCirclePosition(eachCircle) 
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            
            // TODO 7 : YOUR CODE STARTS HERE //////////////////////
            game.checkCirclePosition()
            if (circle.x > canvas.width) {
                circle.x = 0;
            }

            // YOUR TODO 7 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
    }
