const text = document.getElementById("text");
const buttons = document.getElementById("buttons");

let playerName = "";

function startGame() {
    text.innerHTML = "Привет! Как тебя зовут?";
    buttons.innerHTML = `
        <button onclick="askName()">Ввести имя</button>
    `;
}

function askName() {
    playerName = prompt("Введите имя героини:");

    if (!playerName || playerName.trim() === "") {
        playerName = "Незнакомка";
    }

    scene1();
}

function scene1() {
    text.innerHTML =
    `${playerName}, ты выходишь на пустую улицу. Вокруг тихо, только фонари освещают мокрую дорогу.<br><br>
    Вдруг впереди появляется незнакомец...`;

    buttons.innerHTML = `
        <button onclick="scene2(1)">Кто ты?</button>
        <button onclick="scene2(2)">Промолчать</button>
        <button onclick="scene2(3)">Улыбнуться</button>
    `;
}

function scene2(choice){
    if(choice===1){
        text.innerHTML="Незнакомец улыбается: «Смело. Мне это нравится.»";
    }else if(choice===2){
        text.innerHTML="Он внимательно смотрит на тебя, ожидая ответа.";
    }else{
        text.innerHTML="Он улыбается в ответ. Кажется, напряжение исчезло.";
    }

    buttons.innerHTML=`
        <button onclick="startGame()">Начать заново</button>
    `;
}
