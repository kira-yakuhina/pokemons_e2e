describe('Проверка авторизации', function(){
	it('Верный логин и верный пароль', function(){
		cy.visit('https://login.qa.studio/'); // Найти сайт

		cy.get('#forgotEmailButton').should('be.visible'); // Найти кнопку «Забыли пароль?» Кнопка видна пользователю
		cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Найти кнопку «Забыли пароль?» Проверить цвет 
		

		cy.get('#mail').type('german@dolnikov.ru'); // Найти поле «логин» Ввести правельный логин
		cy.get('#pass').type('iLoveqastudio1'); // Найти поле «пароль» Ввести правельный пароль
		cy.get('#loginButton').click(); // Найти кнопку «Войти» Нажать кнопку «Войти»
		cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверить, что авторизация прошла успешно и пришло сообщение «Авторизация прошла успешно»
		cy.get('#messageHeader').should('be.visible'); // Найти сообщение «Авторизация прошла успешно» Сообщение видно пользователю
		cy.get('#exitMessageButton').should('be.visible'); // Найти крестик Крестик виден пользователю
	})

	it('Логика восстановления пароля', function(){
		cy.visit('https://login.qa.studio/'); // Найти сайт

		cy.get('#forgotEmailButton').click(); // Найти кнопку «Забыли пароль?» Нажать кнопку «Забыли пароль?»
		cy.get('#mailForgot').type('german@dolnikov.ru'); //Найти поле «логин» Ввести правельный пароль
		cy.get('#restoreEmailButton').contains('Отправить код'); //Найти кнопку «Отправить код» Проверить название кнопки «Отправить код»
		cy.get('#restoreEmailButton').click(); //Найти кнопку «Отправить код» Нажать кнопку «Отправить код»
		cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Найти сообщение «Успешно отправили пароль на e-mail» Сообщение видно пользователю
		cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Найти крестик Крестик виден пользователю

	})

	it('Верный логин и неверный пароль', function(){
		cy.visit('https://login.qa.studio/'); // Найти сайт

		cy.get('#mail').type('german@dolnikov.ru'); //Найти поле «логин» Ввести правельный логин
		cy.get('#pass').type('iLove'); // Найти поле «пароль» Ввести неправельный пароль
		cy.get('#loginButton').click(); // Найти кнопку «Войти» Нажать кнопку «Войти»
		cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверить, что вернулось сообщение «Такого логина или пароля нет»
		cy.get('#messageHeader').should('be.visible'); // Найти сообщение Сообщение видно пользователю
		cy.get('#exitMessageButton').should('be.visible'); // Найти крестик Крестик виден пользователю
	})

		it('Неверный логин и верный пароль', function(){
		cy.visit('https://login.qa.studio/'); // Найти сайт

		cy.get('#mail').type('kira.yakuhina@gmail.com'); // Найти поле «логин» Ввести неправельный логин
		cy.get('#pass').type('iLoveqastudio1'); // Найти поле «пароль» Ввести правельный пароль
		cy.get('#loginButton').click(); // Найти кнопку «Войти» Нажать кнопку «Войти»
		cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверить, вурнулось сообщение «Такого логина или пароля нет»
		cy.get('#messageHeader').should('be.visible'); // Найти сообщение «Такого логина или пароля нет» Сообщение видно пользователю
		cy.get('#exitMessageButton > .exitIcon').click(); // Найти крестик Проверить кликабельность крестик
	})

		it('Невалидный логин без @ и верный пароль', function(){
		cy.visit('https://login.qa.studio/'); // Найти сайт

		cy.get('#mail').type('germandolnikov.ru'); //Найти поле «логин» Ввести неправельный логин
		cy.get('#pass').type('iLoveqastudio1'); // Найти поле «пароль» Ввести правельный пароль
		cy.get('#loginButton').click(); // Найти кнопку «Войти» Нажать кнопку «Войти»
		cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверить, что вернулось сообщение «Нужно исправить проблему валидации»
		cy.get('#messageHeader').should('be.visible'); // Найти сообщение Сообщение видно пользователю
		cy.get('#exitMessageButton').click(); // Найти крестик Проверить кликабельность крестик
	})

		it('Проверка на приведение к строчным буквам в логине', function(){
		cy.visit('https://login.qa.studio/'); // Найти сайт 
		

		cy.get('#mail').type('GerMan@Dolnikov.ru'); // Найти поле «логин» Ввести правельный логин
		cy.get('#pass').type('iLoveqastudio1'); // Найти поле «пароль» Ввести правельный пароль
		cy.get('#loginButton').click(); // Найти кнопку «Войти» Нажать кнопку «Войти»
		cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверить, что авторизация прошла успешно и пришло сообщение «Авторизация прошла успешно»
		cy.get('#messageHeader').should('be.visible'); // Найти сообщение «Авторизация прошла успешно» Сообщение видно пользователю
		cy.get('#exitMessageButton').should('be.visible'); // Найти крестик Крестик виден пользователю
	})
})



// План
// 1. Найти поле «пароль» Ввести правельный пароль
// 2. Найти поле «логин» Ввести правельный логин
// 3. Найти кнопку «Войти» Нажать кнопку «Войти»
// 4. Проверить, что авторизация прошла успешно»