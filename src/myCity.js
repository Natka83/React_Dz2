import React from "react"

//_________________________________________________________________________________________
// Задание 3
// Создайте и запустите приложение React, выводящее краткую информацию
// о вашем городе в браузер. Например: название города, название страны, год
// основания, несколько фотографий достопримечательностей вашего города.
// При разработке нужно использовать функциональные компоненты и
// синтаксис JSX.

export let City = {
    city: "Львов",
    country: "Украина",
    year: "1256 год.",
    text: "Чтобы вкусить атмосферу Европы, не обязательно покидать территорию Украины. " +
        "Отправляйтесь во Львов. Тут и рождественские ярмарки, и домики, как в Праге, и католические церкви. " +
        "Не влюбиться в этот город невозможно." +
        "Он по-своему хорош цветущей весной, во время летних рассветов и теплых закатов, романтический осенью и, "+
        "конечно, волшебный снежной зимой. Львов нужно застать во все сезоны. ",
    photos: ['/images/gerb.png',
        '/images/evening.jpg',
        '/images/opera.jpg',
        '/images/oldTown.jpg',
        '/images/latsobor.jpg'
    ]

}
