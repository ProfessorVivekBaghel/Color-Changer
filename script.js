
document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.querySelector("#start");
    const stopBtn = document.querySelector("#stop");

    let intervalId;

    const randomColor = function () {
        const hex = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const changeBgColor = function () {
        const newColor = randomColor();
        console.log('New color:', newColor);
        document.querySelector("#box").style.backgroundColor = newColor;
        document.querySelector("#box").innerHTML = newColor;
    }

    const startChangingColor = function () {
        changeBgColor();
        intervalId = setInterval(changeBgColor, 1000);
    };

    const stopChangingColor = function () {
        clearInterval(intervalId);
        intervalId = null;
    };

    startBtn.addEventListener('click', startChangingColor);
    stopBtn.addEventListener('click', stopChangingColor);
});

