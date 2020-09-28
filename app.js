/*
 * @Author: M.M
 * @Date:   2020-09-21 11:36:50
 * @Last Modified by:   M.M
 * @Last Modified time: 2020-09-28 11:15:52
 */
'use strict';

//引入koa
const Koa = require("koa");
const Router = require("koa-router");
const static_ = require("koa-static")
const path = require("path")


//实例化koa对象
const app = new Koa();
const router = new Router();

app.use(static_(
    path.join(__dirname, './static')
))

//接口方法
class api {
    static async enrollContent (ctx){
        ctx.response.body = "<div><img src='/1.png'<div>"
    }
}


//路由
router.get("/enrollContent", api.enrollContent)


app.use(router.routes()) //启动路由
app.use(router.allowedMethods()) //只允许当前设置的方法请求通过

app.listen(8088)

console.log("服务已启动")