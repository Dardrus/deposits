# deposits.js

`deposits.js` - это JavaScript-код, предназначеный для автоматизации процесса установки минимального депозита на сайте.

## Подключение на вашу веб-страницу

Добавьте следующий код перед закрывающим тегом `</body>` на вашем сайте:

```html
<script src="https://cdn.jsdelivr.net/gh/Dardrus/deposits@v1.0.3/script.js"></script>
```
Добавьте файл `deposit-php` в корень вашего проекта

![deposit php](images/deposit-php.png)

## Использование

Для тега `<body>` установить специальный атрибут `data-dep=""`, с кодом страны или же оставьте пустым для использования дефолтных значений из таблицы.

```html
data-dep=""
``` 

В админке WP выделено специальное поле, [Перейти к разделу](#для-wordpress)


### В тексте используйте следующие теги:

Для знака валюты:
```html
<span data-dep-currency>$</span>
``` 

Для суммы:
```html
<span data-dep-value>250</span>
``` 

Для кода валюты:
```html
<span data-dep-code>USD</span>
```

Комбинация знак + сумма:
```html
<span data-dep-cv>$ 250</span>
```

Комбинация сумма + знак:
```html
<span data-dep-vc>250 $</span>
```

### Пример использования для Польши
Что мы заполняем в коде:

![code](images/code.png)

Что увидит пользователь:

![interface](images/interface.png)

Так же можно умножить значение депозита. 

Например выводим на странице:

`<span data-dep-value="20">250</span>`

получим `5,000`

## Для WordPress

через ACF необходимо вывести поле с названием `Deposit code` во вкладке header

![header deposit code](images/header_deposit_code.png)

### Фрагмент кода на PHP

```php
<?php
  $home_id = get_option('page_on_front');
  $header_deposit_code = get_field('header_deposit_code', $home_id);
?>
```

```php
data-dep="<?= $header_deposit_code  ?>"
```

### Пример интерфейса

![wp-admin](images/wp-admin.png)
