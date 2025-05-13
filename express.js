//处理带有请求参数的Ajax请求
const express=require('express');
const path=require('path');

const app=express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/user',(req,res)=>{
    let params=req.query;//express框架要拿到get参数需要用req.query获取
    for(let i in params){
        console.log(`参数：${i} 参数值：${params[i]}`);
    }
    res.send('GET请求参数已被处理');
});

app.listen(3000,()=>{
    console.log('服务器已启动');
})
