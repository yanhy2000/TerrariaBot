"use strict"
const { bot } = require("./index")

bot.on("system.online", function () {
	console.log(`来自plugin-online: 我是${this.nickname}(${this.uin})，我有${this.fl.size}个好友，${this.gl.size}个群`)
})
