let answer;
let min;
let max;
let historyList;
let life;

function startGame(){

    answer =
    Math.floor(Math.random()*100)+1;

    min = 1;
    max = 100;
    life = 10;
    historyList = [];

    updateUI();

    document
    .getElementById("message")
    .innerText = "";

    document
    .getElementById("gameBox")
    .classList.remove("win");
}

function updateUI(){

    document
    .getElementById("range")
    .innerText =
    `${min} ~ ${max}`;

    document
    .getElementById("life")
    .innerText =
    life;

    document
    .getElementById("history")
    .innerText =
    "猜測紀錄：" +
    historyList.join(", ");
}

function shakeBox(){

    const box =
    document
    .getElementById("gameBox");

    box.classList.add("shake");

    setTimeout(()=>{
        box.classList.remove("shake");
    },400);
}

function checkGuess(){

    const input =
    document
    .getElementById("guessInput");

    const guess =
    Number(input.value);

    const msg =
    document
    .getElementById("message");

    if(!guess){

        msg.innerText =
        "⚠️ 請輸入數字";

        shakeBox();
        return;
    }

    if(
        guess <= min ||
        guess >= max
    ){

        msg.innerText =
        `⚠️ 請輸入 ${min} ~ ${max}`;

        shakeBox();
        return;
    }

    historyList.push(guess);

    life--;

    if(guess === answer){

        msg.innerText =
        "🎉 BOOOOOOM！你猜中了！";

        msg.style.color =
        "#00ff88";

        document
        .getElementById("gameBox")
        .classList.add("win");
    }

    else if(life <= 0){

        msg.innerText =
        `💀 遊戲結束！答案是 ${answer}`;

        msg.style.color =
        "#ff4d4d";
    }

    else if(guess < answer){

        min = guess;

        msg.innerText =
        "📉 太小了！";

        msg.style.color =
        "#ffe066";

        shakeBox();
    }

    else{

        max = guess;

        msg.innerText =
        "📈 太大了！";

        msg.style.color =
        "#ff9f9f";

        shakeBox();
    }

    updateUI();

    input.value = "";
}

function resetGame(){
    startGame();
}

startGame();
