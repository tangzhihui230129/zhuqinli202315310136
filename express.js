const express=require('express');
//创建web服务器实例对象
const app=express();

//创建请求地址为‘/’的get请求方式的路由
app.get('/',(req,res)=>{
    res.send('<h1>你好，Hello World</h1>');
});
// post请求
app.post('/',(req,res)=>{
    res.send('<h1>你好，Hello World</h1>');
});
// 监听端口3000
app.listen(3000,()=>{
    console.log('服务器已启动');
});

