const menus = require('../mockdata/menu')
const usersData = require("../mockdata/users")

const getMenus = cfg =>{
    let token = cfg.authorization
    let menuList = menus
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
            data:menuList 
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

module.exports = getMenus