let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let vn = './media/Invocar.mp3'
let pesan = args.join` `
let oi = `*ʚ🐰ɞ* ${pesan}`
let teks = `╭┄〔 *${wm}* 〕┄⊱\n 𝑩𝒐𝒕 𝑩𝒖𝒏𝒏𝒚 *\n┆\n┆❏ ${oi}\n┆\n┆❏ *• 𝖬𝖤𝖭𝖢𝖨𝖮𝖭𝖤𝖲*\n`
for (let mem of participants) {
teks += `ʚ🐰ɞ @${mem.id.split('@')[0]}\n`}
teks += `└ ╰➤ @comunidad_bunny \n\n`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
conn.sendFile(m.chat, vn, 'Invocar.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
