describe('Vuelos Bogotá-Cali', () => {
    it('Caso Automatizado para buscar un vuelo de Bogotá a Cali ida y regreso', () => {
      cy.visit('https://www.wingo.com/');
      cy.get('#btnIdaVuelta > span').click({force: true});
      cy.get('.styledSelectOrigen').click({force: true});
      cy.get('#inputOrigen').type('BOG');
      cy.get('#comboOrigen .textCity').click();
      cy.get('#inputDestino').click();
      cy.get('#inputDestino').type('CALI');
      cy.get('#comboDestino > li:nth-child(1) > .textCity').click();
      cy.get('.icon-chev').click();
      cy.get('.passenger:nth-child(1) .plus').click();
      cy.get('.info-airport-ibe-pasajeros > .icon-chev').click();
      cy.get('.styledSelectMoneda').click();
      cy.get('#currencies > li:nth-child(2)').click();
      cy.get('.icon-chev:nth-child(4)').click();
      cy.get('#inputOutboundDate .next:nth-child(1)').click();
      cy.get('#inputOutboundDate .month1:nth-child(1) tr:nth-child(4) > td:nth-child(4) > .day:nth-child(1)').click();
      cy.get('#date-window-container .month2 tr:nth-child(4) > td:nth-child(4) > .day').click();   
    })
  })