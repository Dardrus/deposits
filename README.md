# deposits.js

`deposits.js` - это JavaScript-код, предназначеный автоматизации процесса установки минимального депозита на сайте.

## Подключение на вашу веб-страницу

Добавьте следующий код перед закрывающим тегом `</body>` на вашем сайте:

```html
<script src="https://cdn.jsdelivr.net/gh/Dardrus/deposits@v1.0.1/script.js"></script>
```
Добавьте файл `deposit-php` в корень вашего проекта

![deposit php](images/deposit-php.png)

## Использование

Для тега `<body>` установить специальный атрибут `data-dep=""`, с кодом страны или же оставить пустым для использования дефолтных значений из таблицы

в тексте используйте следующие теги:

для знака валюты
```html
<span data-dep-currency>$</span>
``` 

для суммы
```html
<span data-dep-value>250</span>
``` 

для кода валюты
```html
<span data-dep-code>USD</span>
```
