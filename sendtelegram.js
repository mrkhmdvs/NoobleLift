document.getElementById('telegramForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const products =formData.get('productType')

    const botToken = '6913741911:AAHzgX1wd30pAuq3Z9kKjYZ1UXR3qVDFIgs';
    const chatId = '-1002143620672';

    const message = `Новый запрос:
     Имя:  ${name}.
     Номер телефона:  ${phone}.
     Продукт:  ${products}`;
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(telegramApiUrl, {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        console.log('Сообщение успешно отправлено в телеграм:', data);
        alert('С вами скоро свяжутся');
        document.getElementById('telegramForm').reset(); 
    })
    .catch(error => {
        console.error('Ошибка при отправке в телеграм:', error);
        alert('Произошла ошибка при отправке данных');
    });
});
