var buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        playSound(this.innerText);
    });
}

document.addEventListener("keypress", (event) => {
    if ("asdjklw".includes(event.key)) {
        playSound(event.key);
    }
});

function playSound(url) {
    let beat = new Audio(`sounds/${url}.mp3`);
    beat.play();
}