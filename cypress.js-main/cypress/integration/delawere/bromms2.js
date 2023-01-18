
describe('покупка товаров', function () {
   it('позитивный тест на покупку', function () {
        cy.visit('https://testqastudio.me/');
       cy.get('.post-11342 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
       cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
       cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
       cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg').click();
       cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
       cy.get('.post-11337 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
       cy.wait(5000);
cy.get('.woocommerce-mini-cart__buttons > [href="https://testqastudio.me/cart/"]').click();
cy.get('.checkout-button').click();
    cy.get('#billing_first_name').type('максим');
       cy.get('#billing_last_name').type('михайлов');
       cy.get('#billing_address_1').type('moscow');
       cy.get('#billing_city').type('moscow');
       cy.get('#billing_state').type('moscow');
       cy.get('#billing_postcode').type(11111);
       cy.get('#billing_phone').type(89819813359);
       cy.get('#billing_email').type('mihaylov96@mail.ru');
       cy.get('#place_order').click();;
       cy.wait(5000);
       cy.contains('Ваш заказ принят. Благодарим вас.');
       

                   })
})