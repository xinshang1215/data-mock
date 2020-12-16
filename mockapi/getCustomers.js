const customers = require('../mockdata/customers')
const usersData = require("../mockdata/users")

const getCustomers = cfg => {
    let token = cfg.authorization
    let customersList = customers
    let betw = usersData.data.map(res => {
        if (token === res.token) {
            return true
        } else {
            return false
        }
    })
    if(token && betw){
        record = {
            code: 200,
            data:customersList 
        }
    }else{
        record = {
            code: -1,
            data: {
                msg: "用户名或密码错误"
            }
        }
    }
    return record
}

module.exports = getCustomers