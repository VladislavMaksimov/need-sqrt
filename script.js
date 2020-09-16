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
        "answer-label": "Ответ:"
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
        "answer-label": "Answer:"
    }
}

const changeLangTo = (language, name, langName, langVars, numLabel, numButton, answerLabel) => {
    name.innerText = language.name;
    langName.innerText = language["lang-name"];
    for (let i = 0; i < langVars.length; i++)
        langVars[i].innerText = language["lang-var"][i];
    numLabel.innerText = language["num-label"];
    numButton.innerText = language["num-button"];
    answerLabel.innerText = language["answer-label"];   
}

const changeLanguage = (language) => {
    const name = document.getElementById('name');
    const langName = document.getElementsByClassName('lang-name')[0];
    const langVars = document.getElementsByClassName('lang-var');
    const numLabel = document.getElementsByClassName('num-label')[0];
    const numButton = document.getElementById('sqrt');
    const answerLabel = document.getElementById('answer-label');

    if (language == "english")
        changeLangTo(languages.english, name, langName, langVars, numLabel, numButton, answerLabel);

    if (language == "russian")
        changeLangTo(languages.russian, name, langName, langVars, numLabel, numButton, answerLabel);
}

const returnSQRT = () => {
    const numberBox = document.getElementsByClassName('number')[0];
    const answerBox = document.getElementById('answer-render');
    let number = numberBox.value;
    let isNegative = false;

    if (number < 0) {
        answerBox.innerText = ''
        isNegative = true;
        number = number.substring(1);
    }
    else if (number > 0)
        answerBox.innerText = '±';
    else
        answerBox.innerText = '';

    answerBox.innerText += Math.sqrt(number);

    if (isNegative)
        answerBox.innerText += 'i';
}

window.addEventListener('load', () => {
    const langButtons = document.getElementsByClassName('lang-var');
    for (let i = 0; i < langButtons.length; i++)
        langButtons[i].addEventListener('click', changeLanguage.bind(this, langButtons[i].value));
    const sqrt = document.getElementById('sqrt');
    sqrt.addEventListener('click', returnSQRT);
})