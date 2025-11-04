import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyinfoPage from '../pages/myinfoPage'
import AdminPage from '../pages/adminPage'

const Chance = require('chance');

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyinfoPage()
const adminPage = new AdminPage()

describe('Orange HRM Tests', () => {


  it.only('User Info Update - sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.ckeckDashboardPage()
    menuPage.accessMyInfo()
    myinfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.last())
    myinfoPage.fillEmployeeDetails(chance.integer({ min: 100, max: 200 }), chance.integer({ min: 300, max: 400 }), chance.integer({ min: 10, max: 20 }), "2025-11-03")
    myinfoPage.fillStatusDetails('1999-22-12')
    myinfoPage.saveForm()

  })

  it('User Admin fill - sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.ckeckDashboardPage()
    menuPage.accessAdmin()
    adminPage.adminfill()

  })

})