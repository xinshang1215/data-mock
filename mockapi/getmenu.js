const menus = require('../mockdata/menu')
const usersData = require("../mockdata/users")

const getMenus = cfg =>{
    let token = cfg.authorization.substr(7)
    let menuList = menus
    let betw = usersData.data.map(res => {
        if (token === res.token) {
            return true
        } else {
            return false
        }
    })
    if(token && betw.includes(true)){
        record = {
            code: 200,
            data:menuList 
        }
    }else{
        record = {
            code: -1, 
            data: {  
                msg: "请先登录"
            }
        } 
    }
    return record
}

module.exports = getMenus