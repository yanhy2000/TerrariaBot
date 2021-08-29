"use strict"

const fs = require('fs');
let qqdata = fs.readFileSync('config.json');
let config = JSON.parse(qqdata);
// console.log(config,config.qq);

const account = config.qq;

const bot = require("oicq").createClient(account)

bot.on("system.login.qrcode", function (e) {
	this.logger.mark("扫码后按Enter完成登录") //通过扫码二维码登录
	process.stdin.once("data", () => {
		this.login()
	})
})
.on("system.login.error", function (e) {
	if (e.code < 0)
		this.login()
})
.login()

exports.bot = bot

require("./plugin-hello") //hello world
require("./plugin-image") //发送图文和表情
require("./plugin-request") //加群和好友
require("./plugin-online") //监听上线事件
