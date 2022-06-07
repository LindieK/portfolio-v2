const selectors = {
    cursor: '[data-cy="cursor"]',
    heroText: '[data-cy="heroText"]',
    scrollIcon: '[data-cy="scroll"]',
    project: '[data-cy="project"]',
    article: '[data-cy="article"]',
    linkedIn: '[data-cy=LinkedIn]',
    github: '[data-cy=Github]',
    twitter: '[data-cy=Twitter]',
    dribbble: '[data-cy=Dribbble]',
    behance: '[data-cy=Behance]'
}



describe('Portfolio Page', ()=> {
    before(()=> {
        //Arrange
        cy.visit("http://localhost:3000/")
    })

    context('Hero',()=> {
        it('should render', ()=> {
            cy.get(`${selectors.heroText} span`).should('have.css', 'opacity', '1')
            cy.get(selectors.scrollIcon).should('be.visible')
        })
        it('mouse icon should scroll to projects section when clicked', ()=> {
            cy.get(selectors.scrollIcon).click()
            cy.url().should('include', '#projects')
        })
    })

    context('Footer', ()=> {
        it('renders links to social pages', ()=> {
            cy.get('footer a').should('have.length', 5)
        })
    
        context('if links work as expected', ()=> {
            context('LinkedIn link', () => {
                it('has a href attribute', ()=> {
                    //Act & Assert
                    cy.get(selectors.linkedIn)
                        .should('have.prop', 'href', 'https://linkedin.com/in/linda-okorie/')
                })
                it('will open on a new tab', ()=> {
                    cy.get(selectors.linkedIn).should('have.prop', 'target', '_blank')
                })
            })
            context('Github link', () => {
                it('has a href attribute', ()=> {
                    cy.get(selectors.github).should('have.prop', 'href', 'https://github.com/LindieK')
                })
                it('will open on a new tab', ()=> {
                    cy.get(selectors.github).should('have.prop', 'target', '_blank')
                })
            })
            context('Twitter link', () => {
                it('has a href attribute', ()=> {
                    cy.get(selectors.twitter).should('have.prop', 'href', 'https://twitter.com/lindaokorie_')
                })
                it('will open on a new tab', ()=> {
                    cy.get(selectors.twitter).should('have.prop', 'target', '_blank')
                })
            })
            context('Dribble link', () => {
                it('has a href attribute', ()=> {
                    cy.get(selectors.dribbble).should('have.prop', 'href', 'https://dribbble.com/lindaokorie')
                })
                it('will open on a new tab', ()=> {
                    cy.get(selectors.dribbble).should('have.prop', 'target', '_blank')
                })
            })
            context('Behance link', () => {
                it('has a href attribute', ()=> {
                    cy.get(selectors.behance).should('have.prop', 'href', 'https://behance.net/lindaokorie')
                })
                it('will open on a new tab', ()=> {
                    cy.get(selectors.behance).should('have.prop', 'target', '_blank')
                })
            })
        })
    })
})
