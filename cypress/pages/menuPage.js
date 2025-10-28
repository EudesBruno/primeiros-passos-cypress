class MenuPage {

    selectorsList() {
        const selectors = {
            myInfoButton: ":nth-child(6) > .oxd-main-menu-item",
            PerformanceButton: "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(7) > a:nth-child(1)"
        }

        return selectors
    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }
    
    accessorPerformance() {
        cy.get(this.selectorsList().PerformanceButton).click()
    }
}

export default MenuPage





