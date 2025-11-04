class MyinfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input",
            middleNameField: ":nth-child(2) > :nth-child(2) > .oxd-input",
            lastnameField: ":nth-child(3) > :nth-child(2) > .oxd-input",
            employeeField: ":nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
            otheridField: ":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
            driverlicenseField: ":nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
            dateField: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon",
            dateCloseButton: ".--close",
            nacionalityField: ":nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text",
            maritalField: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon",
            datebirthField: ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon",
            datebirthclose: ".oxd-date-wrapper",
            submitButton: ".orangehrm-left-space"  
        }
        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastnameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, DriverLicense, DriverLicenseDate) {
        cy.get(this.selectorsList().employeeField).eq(0).clear().type(employeeId)
        cy.get(this.selectorsList().otheridField).clear().type(otherId)
        cy.get(this.selectorsList().driverlicenseField).clear().type(DriverLicense)
        cy.get(this.selectorsList().dateField).type('{selectall}{backspace}')
        cy.get(this.selectorsList().dateField).type(DriverLicenseDate)
        cy.get(this.selectorsList().dateCloseButton).eq(0).click({ force: true })
     
    }

    fillStatusDetails(nacionality, marital, dateBirth) {
        cy.get(this.selectorsList().nacionalityField).type(nacionality)
        cy.get(this.selectorsList().maritalField).type(marital)
        cy.get(this.selectorsList().datebirthField).type('{selectall}{backspace}')
        cy.get(this.selectorsList().datebirthField).type(dateBirth)
        cy.get(this.selectorsList().datebirthclose).eq(1).click({ force: true })
        
     
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
        cy.get("body").should("contain", "Successfully Updated")

    }

} 

export default MyinfoPage