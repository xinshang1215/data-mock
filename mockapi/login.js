const usersData = require("../mockdata/users")

 const login=cfg=>{

        let data = cfg.body
        let token = ""
        let user = {}
        let record={}
        let betw = usersData.data.map(res => {
            if(data.username === res.username && data.password === res.password){
                user = res.userdata
                token = res.token
                return true
            }else{
                return false
            }
        })
        if(betw.includes(true)){
            record =  {
                code:200,
                data:{
                    user:user,
                    token:token
                }
            }
        }else{
            record = {
                code:-1,
                data:{
                    msg:"用户名或密码错误"
                }
            }
        }
        return record

    }

    module.exports = login