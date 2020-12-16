const router = require('koa-router')()
const api = require("../mockapi")

router.prefix('/ma') //路由分组目录路径

router.post('/login', async (ctx, next) => {
    ctx.body = api.login(ctx.request)
})

router.get('/getmenus', async (ctx, next) => {
    ctx.body = api.getmenus(ctx.request.header)
})

router.get('/getcustomers', async (ctx, next) => {
    ctx.body = api.getcustomers(ctx.request.header)
})

module.exports = router