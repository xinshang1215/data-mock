const router = require('koa-router')()
const login = require( "../mockapi/login")

router.prefix('/ma') //路由分组目录路径


router.post('/login', async (ctx, next) => {
    
    
    ctx.body = login(ctx.request)
})


module.exports = router



