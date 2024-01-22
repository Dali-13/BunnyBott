let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let vn = './media/Invocar.mp3'
let pesan = args.join` `
let oi = `*🦋* ${pesan}`
let teks = `╭┄〔 *${wm}* 〕┄⊱\n┆ 🦋 '𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗔 𝗚𝗘𝗡𝗘𝗥𝗔𝗟  ᡴꪫ*\n┆\n┆❏ ${oi}\n┆\n┆❏ *• 𝖬𝖤𝖭𝖢𝖨𝖮𝖭𝖤𝖲*\n`
for (let mem of participants) {
teks += `🪽ʚ @${mem.id.split('@')[0]}\n`}
teks += `└ ╰➤ 𝖡᥆𝗍 ᥣ᥆yᥲᥣ𝗍𝗍y 🇨🇱 \n\n`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
conn.sendFile(m.chat, vn, 'Invocar.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
