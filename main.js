const speechContent = window.speechSynthesis;

const inputTxt = document.querySelector("#input-txt");
const speakBtn = document.querySelector("#speak-btn");


speakBtn.addEventListener('click',()=>{
    speak(inputTxt.value)
})

function speak(text = 'hi'){
    const speech = new SpeechSynthesisUtterance(text)
    console.log(speech)
    speech.lang= 'ja-JP'
    speech.rate = 1
    speechContent.speak(speech, true)
}