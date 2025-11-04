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


  it.only('User Info fill - sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.ckeckDashboardPage()
    menuPage.accessMyInfo()
    myinfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.last())
    myinfoPage.fillEmployeeDetails('empdId', 'otherId', 'DriverLicense','2025-12-12')
    myinfoPage.fillStatusDetails('bbbbbbbbbbbbbb', 'm', '1999-12-22')
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