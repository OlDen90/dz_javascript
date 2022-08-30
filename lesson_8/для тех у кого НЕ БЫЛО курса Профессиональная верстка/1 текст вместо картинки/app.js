'use strict';
// 1. получите все кнопки и сохраните в переменную
let buttons = document.querySelectorAll('button')
// 1.1 затем проитерируйтесь по кнопкам и каждой из
// них добавьте обработчик клика - функцию handleClick
buttons.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        handleClick(event)
    })
})

/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */
function handleClick(clickedButtonEvent) {
    // 2. из объекта события получите ссылку на .product и
    // сохраните в переменную:
    // const cardNode = ;
    const cardNode = clickedButtonEvent.target.parentNode  // про .target.parentNode подсмотрел

    // 3. создайте литерал объекта со следующими свойствами:
    const card = {
        wrap: cardNode, // здесь элемент с классом .product
        img: cardNode.querySelector('img'), // здесь картинка внутри .product
        productName: cardNode.querySelector('.productName'), // здесь .productName, который внутри .product
        button: cardNode.querySelector('button'), // здесь button, который внутри .product
    };

    //-------------------------------------------------------------------------------------------
    //ПО НАЧАЛУ НЕ ПОНЯЛ ЧТО ПИСАТЬ В 3Й ПУНКТ. ПОКА ЧТО В ГОЛОВЕ ВСЯ ЦЕПОЧКА НЕ ВЫСТРОИЛАСЬ.
    //ПОДСМОТРЕЛ, НО ПРОДОЛЖИЛ, НЕ БРОСИЛ, СПЕЦИАЛЬНО ЧТОБЫ ХОТЬ КАКУЮ-ТО ПРАКТИКУ ВЫПОЛНИТЬ, 
    //ЧТОБЫ ЗАПОМИНАЛОСЬ (капсом пишу чтобы выделить сообщение)
    //-------------------------------------------------------------------------------------------

    // 4. получаем текст на кнопке, которая внутри .product

    let txtBtn = card.button.innerText
    if (txtBtn === "Подробнее") { // 4.1 проверяем равняется ли этот текст строке "Подробнее"
        // 4.2 если да, то передаем объект card в функцию showMoreText
        showMoreText(card);
    } else if (txtBtn === "Отмена") { // 4.3 проверяем равняется ли текст на кнопке строке "Отмена"
        // 4.4 если да, то передаем объект card в функцию hideMoreText
        hideMoreText(card);
    }
}

/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function hideMoreText(card) {
    // 5. картинке внутри .product ставим стиль display: block
    card.img.style.display = 'block';
    // 5.1 внутри .product находим элемент с классом .desc и удаляем его
    card.wrap.querySelector('.desc').remove();
    // 5.2 кнопке, которая внутри .product ставим текст "Подробнее"
    card.button.innerHTML = 'Подробнее';
}

/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button 
 */
function showMoreText(card) {
    // 6. картинке внутри .product ставим display: none
    card.img.style.display = 'none';
    // 6.1 сохраняем произвольный текст в переменную
    let textRandom = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, aliquam enim voluptates quibusdam perferendis sint ipsa, nulla quas doloribus nobis libero voluptatem unde inventore. Ut quas corporis fugit error explicabo? Ipsa quos qui similique sequi officia quod ab reiciendis alias!'
    // 6.2 внутри .product есть .productName, после него вставляем div.desc и текстом из переменной из п. 6.1
    card.productName.insertAdjacentHTML('afterBegin', `<div class="desc">${textRandom}</div>`)
    //запутался с тем как должен быть вставлен div.desc, списал

    // 6.3 внутри .product у кнопки текст ставим "Отмена"
    card.button.innerHTML = 'Отмена'
}


/*часть кода выполнить самостоятельно не удалось, подсматривал. Тот код который выполнил сам,
потом сверял, проверял.*/