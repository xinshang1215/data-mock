//引入koa
const Koa = require("koa")

//实例化koa对象
const app = new Koa()

app.use(async(ctx,next)=>{
    await next();
    ctx.response.type = "text/html";
    ctx.response.body = "<h1>Hellp World</h1>"
})


app.listen(8088)

console.log("服务已启动")