describe('Покупка нового аватара', function(){
	it('е2е тест для покупки нового аватара для тренера', function(){
		cy.visit('https://pokemonbattle.ru/login'); // Найти новый сайт

		// Залогиниться
		cy.get('input[id="k_email"]').type('kira.yakuhina@gmail.com'); 
		cy.get('input[id="k_password"]').type('HW7VLON$VJZKJKJ'); 
		cy.get('button[type="submit"]').click();

		// Зайти в личный кабинет
		cy.get('a.header_card_trainer.style_1_interactive_button_link').click();
		cy.get('.k_mobile > :nth-child(5)').click();

		// Выбираем аватар
		cy.get('.available > button').first().click();

		// Вводим данные карты
		cy.get('input[placeholder="0000 0000 0000 0000"]').type('2222 2222 2222 2222 2');
		cy.get('input[placeholder="00/00"]').type('12/25');
		cy.get('input[placeholder="000"]').type('125');
		cy.get('input[placeholder="GERMAN DOLNIKOV"]').type('Кира Целую');
		cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
		cy.get('.style_1_base_input').type('56456');
		cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
		cy.contains('Покупка прошла успешно').should('be.visible');
	})
})