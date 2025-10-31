class AdminPage {

    selectorsList() {
        const selectors = {
            usernameAdmin: "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(1) > div > div:nth-child(2) > input",
            roleAdmin: "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div.oxd-select-text-input",
            roleAdminselect: ".oxd-select-dropdown > :nth-child(2)",
            employeenameAdmin: "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(3) > div > div:nth-child(2) > div > div",
            statusAdmin: "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(4) > div > div:nth-child(2) > div > div",
            statusAdminselect: ".oxd-select-dropdown > :nth-child(2)",
            AddButton: ".orangehrm-header-container > .oxd-button"

        }
        return selectors

    }
    
    adminfill() {
        cy.get(this.selectorsList().usernameAdmin).type("Junior Andrade")
        cy.get(this.selectorsList().roleAdmin).click()
        cy.get(this.selectorsList().roleAdminselect).click()
        //cy.get(this.selectorsList().employeenameAdmin).type("")
        cy.get(this.selectorsList().statusAdmin).click()
        cy.get(this.selectorsList().statusAdminselect).click()
        cy.get(this.selectorsList().AddButton).click()


    }


}

export default AdminPage