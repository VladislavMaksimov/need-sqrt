const BigNumber = require('bignumber.js');

const languages = {
    "russian": {
        "name": "Квадратный корень",
        "lang-name": "Язык:",
        "lang-var": [
            "Русский",
            "Английский",
            "Испанский",
            "Китайский"
        ],
        "num-label": "Введите число:",
        "num-button": "Вычислить",
        "answer-label": "Ответ:",
        "precision-label": "Знаков после запятой:",
        "info": "Техподдержка"
    },
    "english": {
        "name": "Square root",
        "lang-name": "Language:",
        "lang-var": [
            "Russian",
            "English",
            "Spanish",
            "Chinese"
        ],
        "num-label": "Enter the number:",
        "num-button": "Calculate",
        "answer-label": "Answer:",
        "precision-label": "Decimal places:",
        "info": "Technical support"
    },
    "spanish": {
        "name": "Raíz cuadrada",
        "lang-name": "Idioma:",
        "lang-var": [
            "Ruso",
            "Inglés",
            "Española",
            "Chino"
        ],
        "num-label": "Ingrese el numero:",
        "num-button": "Calcular",
        "answer-label": "Responder:",
        "precision-label": "Lugares decimales:",
        "info": "Soporte técnico"
    },
    "chinese": {
        "name": "平方根",
        "lang-name": "语言:",
        "lang-var": [
            "俄语",
            "英语",
            "西班牙语",
            "中文"
        ],
        "num-label": "输入号码:",
        "num-button": "计算",
        "answer-label": "回答:",
        "precision-label": "小数位数:",
        "info": "技术支援"
    }
}

const changeLangTo = (language, name, langName, langVars, numLabel, numButton, answerLabel, precisionLabel, info) => {
    name.innerText = language.name;
    langName.innerText = language["lang-name"];
    for (let i = 0; i < langVars.length; i++)
        langVars[i].innerText = language["lang-var"][i];
    numLabel.innerText = language["num-label"];
    numButton.innerText = language["num-button"];
    answerLabel.innerText = language["answer-label"];   
    precisionLabel.innerText = language["precision-label"];
    info.innerText = language["info"];
}

const changeLanguage = (language) => {
    const name = document.getElementById('name');
    const langName = document.getElementsByClassName('lang-name')[0];
    const langVars = document.getElementsByClassName('lang-var');
    const numLabel = document.getElementsByClassName('num-label')[0];
    const numButton = document.getElementById('sqrt');
    const answerLabel = document.getElementById('answer-label');
    const precisionLabel = document.getElementById('precision-label');
    const info = document.getElementById('info');

    if (language == "english")
        changeLangTo(languages.english, name, langName, langVars, numLabel, numButton, answerLabel, precisionLabel, info);

    if (language == "russian")
        changeLangTo(languages.russian, name, langName, langVars, numLabel, numButton, answerLabel, precisionLabel, info);

    if (language == "spanish")
        changeLangTo(languages.spanish, name, langName, langVars, numLabel, numButton, answerLabel, precisionLabel, info);

    if (language == "chinese")
        changeLangTo(languages.chinese, name, langName, langVars, numLabel, numButton, answerLabel, precisionLabel, info);
}

const isNumberOk = (number) => {
    if (number === '')
        return 'Input number!';

    return "";
}

const returnSQRT = () => {
    const numberBox = document.getElementsByClassName('number')[0];
    const answerBox = document.getElementById('answer-render');
    const n = Number(document.getElementsByClassName('precision-input')[0].value);
    let number = numberBox.value;
    let isNegative = false;

    const checkNum = isNumberOk(number);
    if (checkNum !== '') {
        alert(checkNum);
        return;
    }

    if (number < 0) {
        answerBox.innerText = ''
        isNegative = true;
        number = number.substring(1);
    }
    else if (number > 0)
        answerBox.innerText = '\xb1';
    else
        answerBox.innerText = '';

    if (Number(number) <= Number.MAX_SAFE_INTEGER)
        answerBox.innerText += Math.sqrt(number).toFixed(n);
    else {
        let bigNum = new BigNumber(number);
        answerBox.innerText += bigNum.squareRoot().toExponential(n);
    }

    if (isNegative)
        answerBox.innerText += 'i';
}

window.addEventListener('load', () => {
    //console.log(Number.MAX_SAFE_INTEGER)
    const langButtons = document.getElementsByClassName('lang-var');
    for (let i = 0; i < langButtons.length; i++)
        langButtons[i].addEventListener('click', changeLanguage.bind(this, langButtons[i].value));
    const sqrt = document.getElementById('sqrt');
    sqrt.addEventListener('click', returnSQRT);
})