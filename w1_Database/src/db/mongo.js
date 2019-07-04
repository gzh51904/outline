const mongodb = require('mongodb');

const {MongoClient,ObjectId} = mongodb;//{_id:ObjectId(id)}

// 引入配置文件
let {mongourl:url,dbname} = require('../config.json');

const connect = ()=>{
    return new Promise((resolve,reject)=>{
        MongoClient.connect(url, {useNewUrlParser: true},(err, client) =>{
            if(err) {
                return reject(err);
            }
        
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

// @删 : 删除一条或多条数据
exports.delete = (colName,query)=>{
    return new Promise(async (resolve,reject)=>{

        let {db,client} = await connect();

        // 获取集合
        let col = db.collection(colName);

        // 把数据写入集合
        let res = col.deleteMany(query);

        resolve(res);

        client.close();
    })
}



// @改 : 修改一条数据
exports.update = (colName,query,data)=>{
    return new Promise(async (resolve,reject)=>{

        let {db,client} = await connect();

        // 获取集合
        let col = db.collection(colName);

        // 把数据写入集合
        let res = col.updateOne(query,{$set:data});

        resolve(res);

        client.close();
    })
}


// @查 : 查询一条或多条数据
exports.find = (colName,query,{limit,skip,sort}={})=>{
    return new Promise(async (resolve,reject)=>{

        let {db,client} = await connect();

        // 获取集合
        let col = db.collection(colName);

        // 把数据写入集合
        let res = col.find(query);

        // 跳过的数量
        if(skip){
            res = res.skip(skip);
        }

        // 限制数量
        if(limit){
            res = res.limit(limit);
        }

        if(sort){
            res = res.sort(sort);
        }

        res = await res.toArray();
        
        resolve(res);

        client.close();
    })
}