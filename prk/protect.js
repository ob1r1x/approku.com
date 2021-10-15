window.onload = () => {
    
    (async function ad(urlA = 'https://google.com', urlB = 'https://yandex.ru', sourceDomain = 'google.com') {
        
        // Получаем refferrer страницы
        let ref = document.referrer;

        // Проверяем существует ли refferrer
        if (ref) {
            // Видоизменяем refferrer, чтобы он был вида xxxxx.xx
            ref = new URL(ref).hostname.split('.');
            if (ref.length >= 2) ref = `${ref[ref.length - 2]}.${ref[ref.length - 1]}`;

            // Сравниваем с указаннам доменом, если совпадает то редирект на А, если нет на B
            if (ref == sourceDomain) {
                window.location.href = urlA;
            } else {
                window.location.href = urlB;
            }

        } else {
            // refferrer не существует, значит редирект на B
            window.location.href = urlB;
        }

    })();

}