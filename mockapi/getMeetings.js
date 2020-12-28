const meetings = require('../mockdata/meetings')
const usersData = require("../mockdata/users")

const getMeetings = cfg =>{
    let token = cfg.authorization.substr(7)
    let meetingList = meetings
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
            data:meetingList 
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

module.exports = getMeetings