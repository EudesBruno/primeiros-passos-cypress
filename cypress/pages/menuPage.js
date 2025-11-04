class MenuPage {

    selectorsList() {
        const selectors = {
            myInfoButton: ":nth-child(5) > .oxd-main-menu-item",
            PerformanceButton: "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(7) > a:nth-child(1)",
            adminPage: ":nth-child(1) > .oxd-main-menu-item"
        }
        return selectors
    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }
    
    accessPerformance() {
        cy.get(this.selectorsList().PerformanceButton).click()
    }

    accessAdmin() {
        cy.get(this.selectorsList().adminPage).click()

    }
}

export default MenuPage





