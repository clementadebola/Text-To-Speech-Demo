// const text = input.value;

// const utterance = new SpeechSynthesisUtterance(text);

// window.speechSynthesis.speak(utterance);

function speak() {
    const textToRead  = document.getElementById('text-to-read').value;

    // const downloadButton = document.getElementById('downloadButton');

    if ('speechSyntheis' in window) {
        const synthesis = window.speechSyntheis;
        const utterance = new SpeechSynthesisUtterance(textToRead);

        synthesis.speak(utterance);
        
    } else {
        alert('your browser does not support the web Speech API.');

    }



    // const downloadAudio = () => {
    //     const utterance = new SpeechSynthesisUtterance(textToRead.value);
    //     const blob = new Blob([textToRead.value], {type: 'text/plain'});
    //     const url = URL.createObjectURL(blob);
    //     const a = document.createElement('a');
    //     a.href = url;
    //     a.download = 'text'
    //     a.click();
    //     document.body.appendChild(a);

    // }
}

//use 

document.getElementById('speakbutton').addEventListener('click', speak);