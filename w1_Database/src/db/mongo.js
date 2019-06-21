const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

// 引入配置文件
let {mongourl:url,dbname} = require('../config.json');

const connect = ()=>{
    return new Promise((resolve,reject)=>{
        MongoClient.connect(url, (err, client) =>{
            if(err) throw err;
        
            // 连接数据库，无则自动创建
            let db = client.db(dbname);
            
            resolve({db,client})
        });
    })
    
}


// @增：插入数据库
exports.insert = (colName,data)=>{
    return new Promise(async (resolve,reject)=>{
        // await: 等待promise对象的返回结果
        // await必须放在async函数中
        let {db,client} = await connect();

        // 获取集合
        let col = db.collection(colName);

        // 把数据写入集合
        let res = col.insertOne(data);

        resolve(res);

        client.close();
    })
}

exports.delete = (colName,query)=>{
    return new Promise(async (resolve,reject)=>{
        // await: 等待promise对象的返回结果
        // await必须放在async函数中
        let {db,client} = await connect();

        // 获取集合
        let col = db.collection(colName);

        // 把数据写入集合
        col.deleteMany(query);

        client.close();
    })
}