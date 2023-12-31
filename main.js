
var SpeechRecognition = window.webkitSpeechRecognition;// Web Speech API se  utiliza para reconocer lo que decimos y convertirlo en texto

//Almacenamos el  Web Speach API en una variable 
var recognition = new SpeechRecognition();

//Definimos la variable Textbox para tomar el texto del input
var Textbox = document.getElementById("textbox");

//Definimos la función Start y  la programamos
function start() {
    //correccion v/s LP [document.getElementById("textbox").innerHTML = "";]
    Textbox.innerHTML = "";
    //siempre que pulsemos el botón limpiamos el área de texto

    //Llamaremos a la función start() de Web Speach API
    recognition.start();
}
//Llamaremos a la función onresult()
recognition.onresult = function (event) {
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    //correccion v/s LP[document.getElementById("textbox").innerHTML=Content;]
    Textbox.innerHTML = Content;
    if(Content == "selfie"){
        console.log("comando selfie");
        speak();
    }
}
function speak() {
    var synth = window.speechSynthesis

    speak_data="tomando tu selfie en 5 segundos"

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function(){
        
        take_selfie();
    }, 5000)
    
}
camera=document.getElementById("camera");
    Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90,
});
function take_selfie() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image
    link.click();
}