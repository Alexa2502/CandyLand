let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*▪𝐂𝐚𝐧𝐝𝐲𝐋𝐚𝐧𝐝:* ${pesan}`
let teks = `*⺀𝐄𝐓𝐈𝐐𝐔𝐄𝐓𝐀 𝐃𝐄 𝐂𝐚𝐧𝐝𝐲𝐋𝐚𝐧𝐝⺀*\n\n▪ ${oi}\n\n▪ *𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚 𝐠𝐞𝐧𝐞𝐫𝐚𝐥:*\n`
for (let mem of participants) {
teks += `┣🍬 @${mem.id.split('@')[0]}\n`}
teks += `└𝐂𝐚𝐧𝐝𝐲𝐋𝐚𝐧𝐝`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tog <mesaje>','jenta <mesaje>']
handler.tags = ['group']
handler.command = /^(tog|jenta)$/i
handler.admin = true
handler.group = true
export default handler
