"use strict"
const { segment } = require("oicq")
const { bot } = require("./index")


bot.on("message", function (e) {
	if (e.raw_message === "image")
		e.reply(segment.image("https://sqimg.qq.com/qq_product_operations/im/qqlogo/imlogo.png"))
})


bot.on("message", function (e) {
	if (e.raw_message === "face")
		e.reply([
			segment.face(101),
			segment.face(102),
			segment.text("\ntwo faces")
		])
})
