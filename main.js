// https://teachablemachine.withgoogle.com/models/Xe8qajJyy/model.json

prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="snap_image" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version: ", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Xe8qajJyy/model.json', modelLoaded);

function modelLoaded() {
    console.log("Model loaded!");
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data1 = "The first prediction is " + prediction_1;
    speak_data2 = ", and the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utterThis);
}

function check() {
    img = document.getElementById('snap_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        document.getElementById("gesture_name").innerHTML = prediction_1;
        document.getElementById("gesture_name2").innerHTML = prediction_2;
        speak();
        if(prediction_1 == "Thumbs Up") {
            document.getElementById("display_emoji").innerHTML = '&#128077;';
        }
        if(prediction_1 == "Peace") {
            document.getElementById("display_emoji").innerHTML = '&#9996;';
        }
        if(prediction_1 == "You") {
            document.getElementById("display_emoji").innerHTML = '&#128073;';
        }
        if(prediction_1 == "Ok") {
            document.getElementById("display_emoji").innerHTML = '&#128076;';
        }
        if(prediction_1 == "Me") {
            document.getElementById("display_emoji").innerHTML = '&#128400;';
        }
        if(prediction_1 == "Stop") {
            document.getElementById("display_emoji").innerHTML = '&#9995;';
        }
        if(prediction_1 == "Fingers Crossed") {
            document.getElementById("display_emoji").innerHTML = '&#129310;';
        }
        if(prediction_1 == "Thumbs Down") {
            document.getElementById("display_emoji").innerHTML = '&#128078;';
        }
        if(prediction_2 == "Thumbs Up") {
            document.getElementById("display_emoji2").innerHTML = '&#128077;';
        }
        if(prediction_2 == "Peace") {
            document.getElementById("display_emoji2").innerHTML = '&#9996;';
        }
        if(prediction_2 == "You") {
            document.getElementById("display_emoji2").innerHTML = '&#128073;';
        }
        if(prediction_2 == "Ok") {
            document.getElementById("display_emoji2").innerHTML = '&#128076;';
        }
        if(prediction_2 == "Me") {
            document.getElementById("display_emoji2").innerHTML = '&#128400;';
        }
        if(prediction_2 == "Stop") {
            document.getElementById("display_emoji2").innerHTML = '&#9995;';
        }
        if(prediction_2 == "Fingers Crossed") {
            document.getElementById("display_emoji2").innerHTML = '&#129310;';
        }
        if(prediction_2 == "Thumbs Down") {
            document.getElementById("display_emoji2").innerHTML = '&#128078;';
        }
    }
}