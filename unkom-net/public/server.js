const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

// Настройка парсинга данных из тела запроса
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Настройка почтового транспорта (SMTP)
const transporter = nodemailer.createTransport({
    service: 'gmail', // Используем Gmail для отправки почты
    auth: {
        user: 'your-email@gmail.com', // Вставь свой email
        pass: 'your-email-password'    // Вставь свой пароль (или настройку приложения для Gmail)
    }
});

// Обработчик POST-запроса для формы
app.post('/submit-form', (req, res) => {
    const { name, email, phone, address } = req.body;

    // Подготовка письма
    const mailOptions = {
        from: 'your-email@gmail.com', // Вставь свой email
        to: 'destination-email@example.com', // Почта, на которую отправлять данные
        subject: 'Новая заявка с сайта',
        text: `Имя: ${name}\nЭлектронная почта: ${email}\nТелефон: ${phone}\nАдрес: ${address}`
    };

    // Отправка письма
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Ошибка при отправке письма');
        }
        res.status(200).send('Форма отправлена!');
    });
});

// Запуск сервера
const port = 3000;
app.listen(port, () => {
    console.log(`Сервер работает на порту ${port}`);
});
