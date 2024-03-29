const selectors = {
    cursor: '[data-cy="cursor"]',
    heroText: '[data-cy="heroText"]',
    scrollIcon: '[data-cy="scroll"]',
    projectSection: '[data-cy="projectSection"]',
    project: '[data-cy="project"]',
    projectImage: '[data-cy="image"]',
    projectTitle: '[data-cy="title"]',
    articlesSection: '[data-cy="articlesSection"]',
    article: '[data-cy="article"]',
    tools: '[data-cy="tools"]',
    linkedIn: '[data-cy=LinkedIn]',
    github: '[data-cy=Github]',
    twitter: '[data-cy=Twitter]',
    dribbble: '[data-cy=Dribbble]',
    behance: '[data-cy=Behance]'
}



describe('Portfolio Page', ()=> {
    before(()=> {
        //ARRANGE
        cy.visit("http://localhost:3000/")
    })

    context('Cursor', ()=> {
        it('should not render on small screens', ()=> {
            cy.viewport('iphone-8')
                .get(selectors.cursor).should('have.css', 'display', 'none')
        })
        it('should render on large screens', ()=> {
            cy.viewport('macbook-15')
            .get(selectors.cursor).should('not.have.css', 'display', 'none')
        })
        it('should change style when hover on project image', ()=> {
            //ACT
            cy.get(`${selectors.project} img`).first().scrollIntoView().trigger('mouseover')

            //ASSERT
            cy.get(selectors.cursor).should('have.css', 'background-color', 'rgb(146, 254, 157)')
            cy.get(selectors.cursor).contains('View Project')
        })
        it('should change style when hover on project title', ()=> {
            cy.get(selectors.projectTitle).first().scrollIntoView().trigger('mouseover')

            //ASSERT
            cy.get(selectors.cursor).should('have.css', 'background-color', 'rgb(146, 254, 157)')
            cy.get(selectors.cursor).contains('View Project')
        })
        it('should change style when hover on article', ()=> {
            //ACT
            cy.get(selectors.article).first().scrollIntoView().trigger('mouseover')

            //ASSERT
            cy.get(selectors.cursor).should('have.css', 'background-color', 'rgb(0, 201, 255)')
            cy.get(selectors.cursor).contains('Read Article')
        })
    })

    context('Hero',()=> {
        it('should render', ()=> {
            //ASSERT
            cy.get(`${selectors.heroText} span`).should('have.css', 'opacity', '1')
            cy.get(selectors.scrollIcon).should('be.visible')
        })
        it('mouse icon should scroll to projects section when clicked', ()=> {
            //ACT
            cy.get(selectors.scrollIcon).click()

            //ASSERT
            cy.url().should('include', '#projects')
        })
    })

    context('Projects', ()=> {
        it('should render projects', ()=> {
            //ACT
            cy.get(selectors.projectSection).scrollIntoView()
            
            //ASSERT
            cy.get(selectors.project).should('have.length', 3);
            cy.get(selectors.project).first().should('be.visible')
        })
        it('should open project links on new tab', ()=> {
            //ACT
            cy.get(selectors.projectSection).scrollIntoView()

            //ASSERT
            cy.get(selectors.projectImage).first().should('have.prop', 'target', '_blank')
            cy.get(selectors.projectTitle).first().should('have.prop', 'target', '_blank')
        })
    })

    context('Articles', ()=> {
        it('should render articles', ()=> {
            //ACT
            cy.get(selectors.articlesSection).scrollIntoView()
            
            //ASSERT
            cy.get(selectors.article).should('have.length', 3);
            cy.get(selectors.article).first().should('be.visible')
        })
        it('should open article links on new tab', ()=> {
            //ACT
            cy.get(selectors.articlesSection).scrollIntoView()

            //ASSERT
            cy.get(`${selectors.article} a`).first().should('have.prop', 'target', '_blank')
        })
    })

    context('Tools Used Section', ()=> {
        it('should render images', ()=> {
            //ACT
            cy.get(selectors.tools).scrollIntoView()

            //ASSERT
            cy.get(`${selectors.tools} img`).should('be.visible');
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
