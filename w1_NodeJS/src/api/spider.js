const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const express = require('express');

const Router = express.Router();

Router.get('/', (req, res) => {
    // 爬取数据
    request('http://shop.jiuxian.com/brand-382/activity-3376.htm?area=6', (err, response, body) => {
        const $ = cheerio.load(body);

        let goodslist = [];

        $('.shopComBox li').each((idx, ele) => {
            let $ele = $(ele);

            let name = $ele.find('.sCom-name').text();
            let price = $ele.find('.sCom-price em').text();
            let imgurl = $ele.find('.sComPic img').attr('src');//prop

            

            // 获取图片名
            let filename = path.basename(imgurl);

            goodslist.push({
                name,
                price,
                imgurl:'uploads/'+filename
            });

            // 把图片下载到本地
            request(imgurl) // 返回一个文件流stream
            .pipe(fs.createWriteStream(`uploads/${filename}`))
        });


        // let filepath = path.join(__dirname,'login.js');

        // 小文件的读取
        // fs.readFile(filepath,(err,data)=>{
        //     if(err){
        //         console.log('err',err)
        //     }
        //     console.log('data:',data.toString())
        // })

        // try{
        //     let data = fs.readFile(filepath);
        //     console.log(data.toString())
        // }catch(err){
        //     console.log('err',err)
        // }

        // 大文件的读取：stream
        // 读取streamm
        // let readerStream = fs.createReadStream(filepath);

        //  // 处理流事件 --> data, end, and error
        // let data = ''
        // readerStream.on('data', function(chunk) {console.log('chunk:',chunk.toString())
        //     // chunk：没读取一次的数据
        //     data += chunk;
        // });
        
        // // 读取文成后执行end事件
        // readerStream.on('end',function(){
        //     console.log('end:',data);
        // });

        // // 写入stream
        // let writerStream = fs.createWriteStream('uploads/output.txt');
        // writerStream.write('hello thankyou','UTF8');
        // writerStream.write('are you ok','UTF8');
        // writerStream.end();

        res.send(goodslist)
    })

})


module.exports = Router;

