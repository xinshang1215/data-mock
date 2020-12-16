const login = require('./login')
const getmenus = require('./getmenu')
const getcustomers = require('./getCustomers')

const api = {
    login:login,
    getmenus:getmenus,
    getcustomers:getcustomers
}

module.exports = api