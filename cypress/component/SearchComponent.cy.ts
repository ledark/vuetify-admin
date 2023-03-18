import SearchComponent from '../../src/components/SearchComponent.vue'

describe('<SearchComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(SearchComponent)
    cy.get('input').should('be.visible')
    cy.get('button').should('be.visible')
    cy.get('button').should('contain', 'Buscar')
  })
})

describe('SearchComponent.cy.ts', () => {
  it('playground', () => {
    // cy.mount()
  })
})