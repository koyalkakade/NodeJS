const http=require('http')
const os=require('os')
const path=require('path')
const fs=require('fs')
const colors=require('colors')

const server=http.createServer((req,res)=>{
    res.end('This is my firset server')
})

//server.listen(5003,'127,0,0,1',()=>{
//server.listen(5003,localhoast,()=>{  local laptop asel tr ip address nhi dila tri chalel

console.log('os free memory',os.freemem())
console.log('os home dir',os.homedir())
console.log('os host name',os.hostname())

console.log('dir name',__dirname)

fs.writeFileSync('message.txt','We are learing node')
const filedata=fs.readFileSync('message.txt','utf-8')
console.log('file data:- ',filedata.red)

const filemngrpath=path.join(__dirname,'fileManager')
console.log(filemngrpath,'filemngrpath')
 const fileReactPath=path.join(filemngrpath,'message.txt')
 fs.writeFileSync(fileReactPath,"Learning Node")
 console.log('fileReactPath : ',fileReactPath)
// fs.mkdirSync(filemngrpath,'dataFolder')

//fs.writeFileSync('./fileManager/message.txt',"learn react")
const fileReact=fs.readFileSync('./fileManager/message.txt','utf-8')
console.log('filereact',colors.underline.bgGreen(fileReact))

server.listen(5003,()=>{
console.log('server started...')
})