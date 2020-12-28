const login = require('./login')
const getmenus = require('./getmenu')
const getcustomers = require('./getCustomers')
const getmeetings = require('./getmeetings')

const api = {
    login:login,
    getmenus:getmenus,
    getcustomers:getcustomers,
    getmeetings:getmeetings
}

module.exports = api