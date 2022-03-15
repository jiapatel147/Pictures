objectDetector="";
img="";
objects=[];
status = "" ;

function preload() {
    img=loadImage('https://storage.googleapis.com/petbacker/images/blog/2017/dog-and-cat-cover.jpg');
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();

    objectDetector=ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML="status= detecting objects";
    }

    function modelLoaded() {
        console.log("Modal Loaded!")
        status = true;
        objectDetector.detect(img, gotResults);
    }

    function gotResult(error,results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(img,0,0,640,420);
    if (status ! = "")
    {
        for (var i= 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Object Detected";

            fill(225,0,0);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + ""+ percent +"%",objects[i].x + 15, objects[i].y +15);
            nofill();
            stroke(255,0,0);
            rect(objects[i].x,objects[i].y, objects[i].width, objects[i].height);
        }
    }
}