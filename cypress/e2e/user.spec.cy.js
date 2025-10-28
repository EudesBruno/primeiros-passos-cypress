import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    
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
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.ckeckDashboardPage()
    menuPage.accessMyInfo()
  
    cy.get(selectorsList.firstNameField).clear().type("Junior")
    cy.get(selectorsList.middleNameField).clear().type("Silva")
    cy.get(selectorsList.lastnameField).clear().type("Andrade")
    cy.get(selectorsList.employeeField).eq(1).clear().type("327")
    cy.get(selectorsList.otheridField).clear().type("5327")
    cy.get(selectorsList.driverlicenseField).eq(1).clear().type("182025")
    cy.get(selectorsList.dateField).type('{selectall}{backspace}')
    cy.get(selectorsList.dateField).type("2025-03-10")
    cy.get(selectorsList.dateCloseButton).eq(0).click()
    cy.get(selectorsList.nacionalityField).type("bbbbbbbbbbbbbb")
    cy.get(selectorsList.maritalField).type("m")
    cy.get(selectorsList.datebirthField).type('{selectall}{backspace}')
    cy.get(selectorsList.datebirthField).type("1999-12-22")
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