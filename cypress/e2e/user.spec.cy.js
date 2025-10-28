import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: ".oxd-alert",
    myInfoButton: ":nth-child(6) > .oxd-main-menu-item",
    firstNameField: '.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input',
    middleNameField: ':nth-child(2) > :nth-child(2) > .oxd-input',
    lastnameField: ':nth-child(3) > :nth-child(2) > .oxd-input',
    employeeField: ':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    otheridField: ':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    driverlicenseField: ':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    dateField: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon',
    dateCloseButton: '.--close',
    nacionalityField: ':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
    maritalField: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon',
    datebirthField: ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon',
    datebirthclose: ".oxd-date-wrapper",
    submitButton: ".orangehrm-left-space"
  }


  it.only('User Info Update - sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index")
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type("Junior")
    cy.get(selectorsList.middleNameField).clear().type("Silva")
    cy.get(selectorsList.lastnameField).clear().type("Andrade")
    cy.get(selectorsList.employeeField).clear().type("327")
    cy.get(selectorsList.otheridField).clear().type("5327")
    cy.get(selectorsList.driverlicenseField).clear().type("182025")
    cy.get(selectorsList.dateField).type('{selectall}{backspace}')
    cy.get(selectorsList.dateField).type("2025-03-10")
    cy.get(selectorsList.dateCloseButton).eq(0).click()
    cy.get(selectorsList.nacionalityField).type("bbbbbbbbbbbbbb")
    cy.get(selectorsList.maritalField).type("m")
    cy.get(selectorsList.datebirthField).type('{selectall}{backspace}')
    cy.get(selectorsList.datebirthField).type("1999-22-12")
    cy.get(selectorsList.datebirthclose).eq(1).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get("body").should("contain", "Successfully Updated")
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})