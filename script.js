let searchTerm = document.body.getAttribute('data-dep');

if (searchTerm) searchTerm = searchTerm.toUpperCase();

const themeName = detectWordPressTheme();

// Определение URL на основе наличия темы WordPress
const url = themeName ? 
    `${window.location.origin}/wp-content/themes/${themeName}/deposits.php?search=${encodeURIComponent(searchTerm)}` : 
    `${window.location.origin}/deposits.php?search=${encodeURIComponent(searchTerm)}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data) {
            const currencies = document.querySelectorAll('[data-dep-currency]');
            const values = document.querySelectorAll('[data-dep-value]');
            const codes = document.querySelectorAll('[data-dep-code]');

            const dataCurrency = data.currency;
            const dataValue = data.value;
            const dataCode = data.code;

            setInnerText(currencies, dataCurrency);
            setInnerTextValue(values, dataValue);
            setInnerText(codes, dataCode);
        }
    })
    .catch(error => {
        console.error('Ошибка при запросе данных: ', error);
    });

function setInnerText(array, text) {
    array.forEach(item => {
        item.innerText = text;
    });
}


function setInnerTextValue(array, text) {
    // Удаляем запятые из текста и преобразуем в число
    const numericText = Number(text.replace(/,/g, ''));

    array.forEach(item => {
        const depValue = Number(item.getAttribute('data-dep-value'));
        let result;

        if (depValue > 0) {
            result = numericText * depValue; // Выполняем математическую операцию
        } else {
            result = numericText;
        }

        // Преобразуем результат обратно в строку с разделителями тысяч
        item.innerText = result.toLocaleString('en-US');
    });
}

function detectWordPressTheme() {
    const links = document.querySelectorAll('link[rel="stylesheet"]');

    for (let link of links) {
        const href = link.href;
        // Ищем путь, который включает 'wp-content/themes/'
        const match = href.match(/wp-content\/themes\/([^\/]+)/);
        if (match) {
            return match[1]; // Возвращает название темы
        }
    }
    return null;
}
