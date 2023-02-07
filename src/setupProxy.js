const { createProxyMiddleware} = require("http-proxy-middleware")

module.exports =app=>{
    app.use(
        createProxyMiddleware('/api/v1.0/Employees',{
            target: 'http://examination.24x7retail.com',
            changeOrigin:true
        })
    )

    

   
}