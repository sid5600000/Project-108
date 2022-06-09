cat = 0;
dog = 0;
cow = 0;
lion = 0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/WJn-ovE5y/model.json', modelReady);
}


function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error){ 
        console.error(error);
    }
    else{
        console.log(results);
        random_colour_r = Math.floor(Math.random() * 255) + 1;
        random_colour_g = Math.floor(Math.random() * 255) + 1;
        random_colour_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("sound_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("accuracy").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("sound_label").style.color = "rgb(" + random_colour_r + random_colour_g + random_colour_b + ")";    
        document.getElementById("accuracy").style.color = "rgb(" + random_colour_r + random_colour_g + random_colour_b + ")"; 

        img1 = document.getElementById("download.jpg");
        img2 = document.getElementById("dog.jpg");
        img3 = document.getElementById("cow.png ");
        img4 = document.getElementById("lion.jpg");

        img = document.getElementById("image_hear");

        if (results[0].label == "Meowing"){
            img.src = "download.jpg";
        };

        if (results[0].label == "Barking"){
            img.src = "dog.jpg";
        };

        if (results[0].label == "Mooing"){
            img.src = "cow.png ";
        };

        if (results[0].label == "Roaring"){
            img.src = "lion.jpg";
        };

        if (results[0].label == "Background noise"){
            img.src = "dd5ed82b-b105-4b93-806f-1f9e718b56ec.png";
        };
    
    
    
    }


}
