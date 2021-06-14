canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 60;

car1_x = 10;
car1_y = 10;

Car2_width = 125;
Car2_height = 70;

Car2_x = 10;
Car2_y = 90;

background_image = "racing.jpg";
car1_image = "car1.png";
Car2_image = "Car 2.png";

function add()
{
    backgroung_imgTag = new Image();
    backgroung_imgTag.onload = uploadBackground;
    backgroung_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    Car2_imgTag = new Image();
    Car2_imgTag.onload = uploadcar2;
    Car2_imgTag.src = Car2_image;
}

function uploadBackground()
{
    ctx.drawImage(backgroung_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1()
{
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2()
{
    ctx.drawImage(Car2_imgTag, Car2_x, Car2_y, Car2_width, Car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }

    if(keyPressed == '87')
    {
        Car2_Up();
        console.log("Car2_Up");
    }
    if(keyPressed == '88')
    {
        Car2_Down();
        console.log("Car2_Down");
    }
    if(keyPressed == '65')
    {
        Car2_Right();
        console.log("Car2_Right");
    }
    if(keyPressed == '68')
    {
        Car2_Left();
        console.log("Car2_Left");
    }

    if(car1_x > 700)
{
    console.log("car1 Won")
    document.getElementById('game_status').innerHTML= "Car 1 Won!!";
}

if(Car2_x > 700)
{
    console.log("Car2 Won")
    document.getElementById('game_status').innerHTML= "Car 2 Won!!";
}
    
}


//Car1 Function

function up()
{
    if(car1_y >= 0)
    {
        car1_y = car1_y - 10;       
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function down()
{
    if(car1_y <= 500)
    {
        car1_y = car1_y + 10;       
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function left()
{
    if(car1_x >= 0)
    {
        car1_x = car1_x - 10;       
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}


function right()
{
    if(car1_x <= 700)
    {
        car1_x = car1_x + 10;       
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

//Car2 function

function Car2_Up()
{
    if(Car2_y >= 0)
    {
        Car2_y = Car2_y - 10;       
        console.log("When up arrow is pressed, x = " + Car2_x + " | y = " +Car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}

function Car2_Down()
{
    if(Car2_y <= 500)
    {
        Car2_y = Car2_y + 10;       
        console.log("When up arrow is pressed, x = " + Car2_x + " | y = " +Car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}

function Car2_Left()
{
    if(Car2_x >= 0)
    {
        Car2_x = Car2_x - 10;       
        console.log("When up arrow is pressed, x = " + Car2_x + " | y = " +Car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}

function Car2_Right()
{
    if(Car2_x <= 700)
    {
        Car2_x = Car2_x + 10;       
        console.log("When up arrow is pressed, x = " + Car2_x + " | y = " +Car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}

