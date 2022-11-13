function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Yn-L0aPfu/model.json", modelLoaded);
    }
    
    function modelLoaded(){
    classifier.classify(gotresults);    
    }
    
    function gotresults(error, results){
    if(error){
    console.error(error); 
    }    
    else{
    console.log(results);    
    }
    }