// Базовая обойма топ-5 экстремальных демонов Pointercrate
const baseTop5 = ["Thinking Space II", "Flamewall", "Amethyst", "Tidal Wave", "ORBIT"];

// Пулы фраз для генерации случайного вердикта Зоинка
const zoinkPhrases = [
    "«Поиграл в эти уровни под бургер. Короче, вот вам новый официальный топ, я так чувствую.»",
    "«У меня заболел мизинец от старой раскладки Листа. Переделываем топ-5 прямо сейчас, пацаны.»",
    "«Ну, чуваки, Flamewall вообще не чувствуется, я прошёл его пока спал. Ловите апдейт.»",
    "«Я тут словил пару прикольных кликов на 360 Гц. Список переписан, не благодарите.»"
];

function generateTop() {
    const body = document.body;
    const card = document.getElementById("mainCard");
    const box = document.getElementById("verdictBox");
    const container = document.getElementById("verdictContent");

    // Каждый раз при клике бережно счищаем старые эффекты анархии
    body.classList.remove("acu-anarchy-bg");
    card.classList.remove("card-anarchy");
    box.classList.remove("verdict-anarchy");

    // Перемешиваем массив по честному геймдевному алгоритму Фишера-Йетса
    let list = [...baseTop5];
    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }

    // Тот самый 0.5% шанс на то, что Acu внезапно захватит Топ-1 списка
    // (Если хочешь потестить эффект чаще — временно поменяй 0.005 на 0.3)
    const isAcuAnarchy = Math.random() < 0.1;

    let htmlContent = "";

    if (isAcuAnarchy) {
        // Подключаем стили безумия и тряски сайта
        body.classList.add("acu-anarchy-bg");
        card.classList.add("card-anarchy");
        box.classList.add("verdict-anarchy");

        htmlContent += `<div class="opinion-text"><strong>Мнение Монарха:</strong> «Я тут зашёл в Insane секцию... Пацаны, вы все жестко недооценивали Acu. Эти тайминги в начале — чистый пиздец. Пушим на Топ-1, остальные подвиньтесь!»</div>`;
        htmlContent += `<div class="list-title">⚠️ СБОЙ СИСТЕМЫ POINTERCRATE:</div>`;
        
        // Внедряем Acu на первое место, отрезая бывший топ-5
        list.unshift("Acu (⚡ Сверхсложный АД!)");
        list.pop();
    } else {
        // Стандартный вердикт
        const randomPhrase = zoinkPhrases[Math.floor(Math.random() * zoinkPhrases.length)];
        htmlContent += `<div class="opinion-text"><strong>Мнение Монарха:</strong> ${randomPhrase}</div>`;
        htmlContent += `<div class="list-title">Актуальный Бургеркрейт Топ-5:</div>`;
    }

    // Собираем строки с индивидуальной задержкой анимации для красивого ступенчатого вылета
    list.forEach((level, index) => {
        let extraClass = "";
        let itemStyle = `animation-delay: ${index * 0.08}s;`;

        if (level.includes("Acu")) {
            extraClass = "acu-blink";
        } else if (index === 0) {
            extraClass = "top1-orange";
        }

        htmlContent += `<div class="list-item ${extraClass}" style="${itemStyle}">#${index + 1} — ${level}</div>`;
    });

    // Пушим готовый HTML-шаблон прямо на экран
    container.innerHTML = htmlContent;
}
