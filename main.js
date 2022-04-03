var canvas = new fabric.Canvas("myCanvas");
// Create canvas variable

//Set initial positions for ball and hole images.
ballX = 100;
ballY = 100;
block_image_width = 5;
block_image_height = 5;
holeX = 800;
holeY = 400;

function load_img() {

    fabric.Image.fromURL("golf-h.png", function(Img) {

        hole_obj = Img;
        hole_obj.scaleToWidth(50);
        hole_obj.scaleToHeight(50);
        hole_obj.set({

            top: holeY,
            left: holeX

        });
        canvas.add(hole_obj);
    });

    new_image();

}

function new_image() {

    fabric.Image.fromURL("ball.png", function(Img) {

        ball_obj = Img;
        ball_obj.scaleToWidth(50);
        ball_obj.scaleToHeight(50);
        ball_obj.set({

            top: ballY,
            left: ballX

        });
        canvas.add(ball_obj);
    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (ballX == holeX && ballY == holeY) {

        canvas.remove(ball_obj);
        document.getElementById("hd3").innnerHTML = "You have hit the goal !!!!"
        document.getElementById("myCanvas").style.borderColor = "red";

    } else {
        if (keyPressed == '38') {
            up();
            console.log("up");
        }
        if (keyPressed == '40') {
            down();
            console.log("down");
        }
        if (keyPressed == '37') {
            left();
            console.log("left");
        }
        if (keyPressed == '39') {
            right();
            console.log("right");
        }
    }

    function up() {

        if (ballY > 0) {

            ballY = ballY - block_image_height;
            canvas.remove(ball_obj);
            new_image();

        }

    }

    function down() {

        if (ballY <= 450) {

            ballY = ballY + block_image_height;
            canvas.remove(ball_obj);
            new_image();

        }

    }

    function left() {
        if (ballX > 5) {

            ballX = ballX - block_image_width;
            canvas.remove(ball_obj);
            new_image();

        }
    }

    function right() {
        if (ballX <= 1050) {

            ballX = ballX + block_image_width;
            canvas.remove(ball_obj);
            new_image();

        }
    }

}