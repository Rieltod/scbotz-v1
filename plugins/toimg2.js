let fs = require('fs')	
const {
    MessageType,
    Mimetype
} = require("@adiwajshing/baileys");
const anu = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: 'Hmm.jpeg', 
                    jpegThumbnail: https://telegra.ph/file/a60af91a1c5b4e12967fd.jpg
                          }
                        }
                      }
let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, usedPrefix, command }) => {
  if (!m.quoted) throw `balas stiker dengan perintah *${usedPrefix + command}*`
  let mime = m.quoted.mimetype || ''
  if (!/webp/.test(mime)) throw `balas stiker dengan perintah *${usedPrefix + command}*`
  let media = await m.quoted.download()
  let out = Buffer.alloc(0)
  if (/webp/.test(mime)) {
    out = await webp2png(media)
  }
  await conn.sendFile(m.chat, out, 'out.png', 'Sudah jadi...', anu, false, { thumbnail: fs.readFileSync('./src/RadBot.png')})
}
handler.help = ['toimg']
handler.tags = ['sticker']
handler.command = ['toimg']
module.exports = handler
