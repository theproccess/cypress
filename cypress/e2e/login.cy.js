describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio'); //заход на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //найден логин + ввод верного
        cy.get('#pass').type('iLoveqastudio1');//найден пасс + ввод верного
        cy.get('#loginButton').click(); //прожата кнопка войти
        cy.get('#messageHeader').should('be.visible');// проверка на видимость инфобаннера
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверка содержания текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видимость иконки крестик

    })

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio'); //заход на сайт
        cy.get('#forgotEmailButton').click(); //прожать кнопку забыли логин
        cy.get('#mailForgot').type('ti-tati@mail.ru'); // Ввести любой имейл
        cy.get('#restoreEmailButton').click();  //Прожать получить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверка на требуемый текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видимость иконки крестик
    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio'); //заход на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //найден логин + ввод верного
        cy.get('#pass').type('xtujnfytghfdbkmyjt'); //найден пасс + ввод неверного
        cy.get('#loginButton').click(); //прожать кнопку войти
        cy.get('#messageHeader').should('be.visible'); // проверка на видимость инфобаннера
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка на текст ошибки
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видимость иконки крестик
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio'); //заход на сайт
        cy.get('#mail').type('ti-tati@mail.ru'); //найден логин + ввод неверного
        cy.get('#pass').type('iLoveqastudio1'); //найден пасс + ввод верного
        cy.get('#loginButton').click(); //прожать кнопку войти
        cy.get('#messageHeader').should('be.visible'); // проверка на видимость инфобаннера
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка на текст ошибки
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видимость иконки крестик
    })

    it('Невалидный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio'); //заход на сайт
        cy.get('#mail').type('ti-tatimail.ru'); //найден логин + ввод без @
        cy.get('#pass').type('iLoveqastudio1'); //найден пасс + ввод верного
        cy.get('#loginButton').click(); //прожать кнопку войти
        cy.get('#messageHeader').should('be.visible'); // проверка на видимость инфобаннера
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверка на текст ошибки
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видимость иконки крестик
    })

    it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio'); //заход на сайт
        cy.get('#mail').type('gErman@dOlnikov.ru'); //найден логин + ввод верного строчными
        cy.get('#pass').type('iLoveqastudio1');//найден пасс + ввод верного
        cy.get('#loginButton').click(); //прожата кнопка войти
        cy.get('#messageHeader').should('be.visible');// проверка на видимость инфобаннера
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверка содержания текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видимость иконки крестик
        // Разработчик допустил баг и это не реализовал. Тест упал.
    })

})

