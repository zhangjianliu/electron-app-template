# electron-app-template
 electron app template
 
# 说明

同时支持web端和桌面端的应用程序，主要是通过js注入的机制，然后IPC通讯的机制实现桌面端的一些功能开发。

## app/main 目录

app目录下主要是存放的是electron 应用程序。

## render 目录
主要是渲染window 的页面，同时支持，web 桌面 
 

# 运行

### web (首先执行)
> 必须在render 目录下执行。
1. cd render
2. npm run dev

### electron

当前目录 执行

npm run dev



 
# 变量

## WEBPACK_DEV_SERVER_PORT
webpack dev server port

dev server port


## NODE_ENV
node env

- development
- other


## DISABLE_LOG_REMOTE
disable log remote

禁止日志上传。

## CONSOLE_LOGGER 

console logger

同步控制台输出日志。
 
# 调试 



# 已经实现功能

- 本地数据库
- 自动升级
- 网络检查(window)
- 主进程http请求客户端
- 下载文件
- http请求客户端
- IPC 通讯（渲染window 发送消息给主进程）
- IPC 通讯（主进程发送消息给渲染window）
- 设置开机启动项
- 其他应用唤醒客户端
- 全局快捷键
- 托盘
- 应用菜单(mac)
- 国际化
- TouchBar
- 硬件加速（mac）
- 模式(development、production)
- 崩溃日志发送
- 单例模式
- 白屏
- electron bridge
- 代理设置（还没）

 
 
 
# Fix 
 
## install electron dependencies 

安装electron 报错解决方案。
 
1. sudo npm install -g cross-env 
2. cross-env npm_config_electron_mirror="https://npm.taobao.org/mirrors/electron/" npm_config_electron_custom_dir="9.4.0" npm install
