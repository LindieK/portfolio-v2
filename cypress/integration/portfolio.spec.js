// portfolio.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('Footer', ()=> {
    beforeEach(()=> {
        cy.visit("http://localhost:3000/")
    })

    it('renders links to social pages', ()=> {
        cy.get('footer a').should('have.length', 5)
    })

    context('if links work as expected', ()=> {
        context('LinkedIn link', () => {
            it('has a href attribute', ()=> {
                cy.get('[data-cy=LinkedIn]').should('have.prop', 'href', 'https://linkedin.com/in/linda-okorie/')
            })
            it('will open on a new tab', ()=> {
                cy.get('[data-cy=LinkedIn]').should('have.prop', 'target', '_blank')
            })
        })
        context('Github link', () => {
            it('has a href attribute', ()=> {
                cy.get('[data-cy=Github]').should('have.prop', 'href', 'https://github.com/LindieK')
            })
            it('will open on a new tab', ()=> {
                cy.get('[data-cy=Github]').should('have.prop', 'target', '_blank')
            })
        })
        context('Twitter link', () => {
            it('has a href attribute', ()=> {
                cy.get('[data-cy=Twitter]').should('have.prop', 'href', 'https://twitter.com/lindaokorie_')
            })
            it('will open on a new tab', ()=> {
                cy.get('[data-cy=Twitter]').should('have.prop', 'target', '_blank')
            })
        })
        context('Dribble link', () => {
            it('has a href attribute', ()=> {
                cy.get('[data-cy=Dribbble]').should('have.prop', 'href', 'https://dribbble.com/lindaokorie')
            })
            it('will open on a new tab', ()=> {
                cy.get('[data-cy=Dribbble]').should('have.prop', 'target', '_blank')
            })
        })
        context('Behance link', () => {
            it('has a href attribute', ()=> {
                cy.get('[data-cy=Behance]').should('have.prop', 'href', 'https://behance.net/lindaokorie')
            })
            it('will open on a new tab', ()=> {
                cy.get('[data-cy=Behance]').should('have.prop', 'target', '_blank')
            })
        })
    })
})
