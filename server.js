//处理前端发送过来的请求
const express=require('express');
const path=require('path');

const app=express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.send('GET请求已被处理');
});
app.post('/',(req,res)=>{
    res.send('POST请求已被处理');
});

app.listen(3000,()=>{
    console.log('服务器已启动');
})