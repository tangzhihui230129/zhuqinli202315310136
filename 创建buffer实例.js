//创建一个长度为10且用0x1填充的Buffer实例
const buf1 = Buffer.alloc(10, 1);
console.log(buf1.toString('hex'));

//创建一个包含数组[0x1,0x2,0x3]的Buffer实例
const buf2=Buffer.from([0x1,0x2,0x3]);
console.log(buf2.toString('hex'));

//创建一个包含UTF-8字节[0xe4,0xbd,0xa0,0xe5,0xa5,0xbd]的Buffer实例
const buf3=Buffer.from('你好','utf-8');
console.log(buf3.toString('hex'));

//将Buffer实例按指定的编码格式还原成字符串
// const buf=

//将Buffer实例按指定的编码格式还原成字符串
console.log(buf.toString('utf8'));

//将Buffer实例转换成JSON对象
const buf = Buffer.from([0x01,0x02,0x03,0x04]);
const jsin = buf.toJSON();
console.log(JSON);