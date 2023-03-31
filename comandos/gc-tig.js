let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*▪𝐌𝐨𝐫𝐠𝐚𝐧𝐁𝐨𝐭:* ${pesan}`
let teks = `*⺀𝐀𝐂𝐓𝐈𝐕𝐄𝐍𝐒𝐄 𝐏𝐈𝐍𝐆𝐎𝐍𝐄𝐒⺀*\n\n▪ ${oi}\n\n▪ *𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚 𝐠𝐞𝐧𝐞𝐫𝐚𝐥:*\n`
for (let mem of participants) {
teks += `┣👑 @${mem.id.split('@')[0]}\n`}
teks += `└𝐌𝐨𝐫𝐠𝐚𝐧𝐁𝐨𝐭`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tig <mesaje>','tati <mesaje>']
handler.tags = ['group']
handler.command = /^(tig|tati)$/i
handler.admin = true
handler.group = true
export default handler
