function speak() {
    var word = prompt("Enter the word you want pronounced");
    var text = `Oh, Sweetie, it's pronounced "${word}!"`
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    voices = speechSynthesis.getVoices()
    msg.voice = voices[4];
    speechSynthesis.speak(msg);
}
window.onload = function() {
    speechSynthesis.speak(new SpeechSynthesisUtterance());
}