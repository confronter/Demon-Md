
let handler = async (m, { conn, args, usedPrefix, command }) => {
	let pp = imagen4
  
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
   m.reply(`╭────[ *𝔇𝔢𝔪𝔬𝔫 𝔪𝔡* ]
│𝔇𝔢𝔪𝔬𝔫 𝔞𝔠𝔱𝔦𝔳𝔢 𝔡𝔲𝔯𝔞𝔱𝔦𝔬𝔫🦇
│ 🦇ℭ𝔥𝔞𝔫𝔫𝔢𝔩:‎https://whatsapp.com/channel/0029Vag3MeuGJP8LZb1Okj39 
│ℭ𝔯𝔢𝔞𝔱𝔬𝔯: 𝔠𝔬𝔫𝔣𝔯𝔬𝔫𝔱𝔢𝔯
│𝔴𝔥𝔞𝔱𝔰𝔞𝔭𝔭 𝔫𝔲𝔪𝔟𝔢𝔯 = wa.me/254796283064
╰────────────────\n\n${muptime}`) 
}
handler.help = ['runtime']
handler.tags = ['main']
handler.command = ['runtime', 'uptime']
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm ', s, 's '].map(v => v.toString().padStart(2, 0)).join('')
}
