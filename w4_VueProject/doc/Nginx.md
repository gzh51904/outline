# Nginx

## 安装
1. 下载：http://nginx.org/en/download.html
2. 解压到某个位置

## 使用

### 运行nginx
* 双击打开nginx.exe（黑窗口一闪而过，启动完毕）
* 命令行切换到进入解压目录
```bash
    # 锁定命令行启动nginx（无任何提示，窗口被锁定）
    nginx

    # 不锁定命令行启动
    start nginx
```
> 启动成功通过 http://localhost 打开服务器

### 关闭nginx
```bash
    # 快速停止
    nginx -s stop

    #或 完整有序的停止
    nginx -s quit
```

### 测试配置是否成功
```bash
    nginx -t
```

### 重启
> 当配置信息修改，需要重新载入这些配置时使用此命令。

```bash
    nginx.exe -s reload
```


## 常用配置
> 打开`安装目录->conf->nginx.conf`进行配置

### 代理服务器
反向代理（Reverse Proxy）方式是指以代理服务器来接受客户端请求，然后将请求转发给内部网络上的服务器（目标服务器），并将从目标服务器上得到的结果返回给客户端得行为
```confg
    # 通过8020端口代理真实服务地址（8080）
    server {
        listen       8020;
        server_name  localhost;

        location / {
            proxy_pass http://127.0.0.1:8080;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

    }

```


### 反向代理与负载均衡
> HTTP重定向实现负载均衡，把请求次数按照权重分配给每台服务器罢了

```
    upstream test{ 
        server 10.3.133.168:1000 weight=1; 
        server 10.3.133.168:2000 down; 
        server 10.3.133.123:2000 backup;
        server 10.3.133.168:3000 weight=2; 
    }
```
* down      不参与负载.
* weight    权重，weight越大，负载的权重就越大
* backup    其它非backup服务器down或忙的时候，请求backup机器（这台机器压力会最小）