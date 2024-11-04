const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command}) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
    var sum = member.length;
  } else {
    var sum = 0;
    const total = 0;
    var member = 0;
  }
  const pesan = args.join` `;
  const oi = `*𝗠𝗜 𝗖𝗥𝗘𝗔𝗗𝗢𝗥𝗔 𝗟𝗘𝗦 𝗠𝗔𝗡𝗗𝗔 𝗕𝗘𝗦𝗢𝗦 𝗘𝗡 𝗟𝗔 𝗖𝗢𝗟𝗔, 𝗟𝗜𝗡𝗗𝗨𝗥𝗔𝗦*`;
  let teks = `*𝗕𝗔𝗥𝗕𝗜𝗖𝗜𝗧𝗔 𝗕𝗢𝗧 🫦.*\n\n *${oi}\n\n➥ _*𝗠𝗘𝗡𝗖𝗜𝗢𝗡 𝗚𝗘𝗡𝗘𝗥𝗔𝗟: ${pesan}*_\n`;
  for (const mem of participants) {
    teks += `*ʚ💗ɞ* @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└𝙱ᴀʀʙɪᴇ𝙱ᴏᴛ ★ ɪɢ : @xbarbicita.7*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall1|invocar1|marcar1|todos1|invocación1|ta1)$/i;
handler.admin = true;
handler.group = true;
export default handler;