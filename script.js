function handleGoodFeedback() {
    document.getElementById('feedback').style.color = 'green';
    document.getElementById('emojiSmile').style.fill = 'green';
    document.getElementById('feedback').innerHTML = 'Vielen Dank, das freut mich sehr!';
}

function handleBadFeedback() {
    document.getElementById('feedback').style.color = 'red';
    document.getElementById('emojiSmile').style.fill = 'red';
    document.getElementById('feedback').innerHTML = 'Oh nein, das ist aber schade!';
}

let feedback = document.getElementById("feedback").innerHTML;
let smiley = document.getElementById("emojiSmile").innerHTML;
