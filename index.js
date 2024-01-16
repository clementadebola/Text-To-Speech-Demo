// const text = input.value;

// const utterance = new SpeechSynthesisUtterance(text);

// window.speechSynthesis.speak(utterance);

function speak() {
    const textToRead  = document.getElementById('text-to-read').value;

    if ('speechSyntheis' in window) {
        const synthesis = window.speechSyntheis;
        const utterance = new SpeechSynthesisUtterance(textToRead);

        synthesis.speak(utterance);
    } else {
        alert('your browser does not support the web Speech API.');

    }
}

//use 

document.getElementById('speakbutton').addEventListener('click', speak)