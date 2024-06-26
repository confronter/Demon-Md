import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption =  `
╭─[𝔇𝔢𝔪𝔬𝔫 𝔪𝔡]
 | 
│╭────────────────────
┴│👋 Hey there, ${conn.getName(m.sender)}!
⬡│🤖 I\'m 🐸𝔇𝔢𝔪𝔬𝔫 𝔪𝔡\n⬡│ I\'m up and running! 🚀
│╰────────────────────
┠───[ *BOT INFO* ]────╮
│╭────────────────────
┴│    𝙳𝙴𝙼𝙾𝙽 𝙼𝙳🦇
⬡│💻 A WhatsApp bot created by:
⬡│👨‍💻 𝙲𝙾𝙽𝙵𝚁𝙾𝙽𝚃𝙴𝚁🪓
⬡│📞 For any inquiries, contact:
⬡│📱 wa.me/254796283064
⬡│🙅‍♂️ Don't call the owner or you\'ll be
⬡│ ignored or blocked! 😬
│╰────────────────────
 
││ 📲𝔣𝔬𝔩𝔩𝔬𝔴 𝔣𝔬𝔯 𝔲𝔭𝔡𝔞𝔱𝔢𝔰 :‎https://whatsapp.com/channel/0029Vag3MeuGJP8LZb1Okj39
│╰──────────────
╰────────═┅═───────
*Generated by*𝙲𝙾𝙽𝙵𝚁𝙾𝙽𝚃𝙴𝚁🦄
`.trim()
conn.sendMessage(m.chat, { image: { url:'https://telegra.ph/file/046eb341473a27e87d379.jpg' }, caption: caption, footer: `Follow me on instagram:\n\tinstagram.com/confronter._` }, { quoted: m })
  //m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler
