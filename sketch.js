let mobileNet;
let video = ''
let label;


let width = 640
let length = 480

function modelReady() {
    console.log("Model is ready!!!")
    mobileNet.predict(gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.error(error)
    } else {
        //console.log(results)
        label = results[0].label;
        mobileNet.predict(gotResults)
    }
}

//function imageReady() {
 //   image(puffin, 0, 0, width, length);
//}

function setup() {
    createCanvas(640, 550)
    video = createCapture(VIDEO)
    video.hide()
    background(0)
    mobileNet = ml5.imageClassifier('MobileNet', video,  modelReady);
}

function draw() {
    background(0)
    image(video, 0, 0)
    fill(255)
    textSize(64)
    text(label, 10, height - 20)
}