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
  const oi = `*𝗠𝗘𝗡𝗖𝗜𝗢𝗡 𝗚𝗘𝗡𝗘𝗥𝗔𝗟: * ${pesan}`;
  let teks = `*𝗣𝗘𝗥𝗦𝗜𝗚𝗨𝗘 𝗧𝗨𝗦 𝗠𝗘𝗧𝗔𝗦 , 𝗡𝗢 𝗖𝗔𝗖𝗛𝗢𝗦 𝗠𝗢𝗡𝗚𝗢𝗟@ 🫦*\n\n *${oi}\n\n➥ _*𝗕𝗮𝗿𝗯𝗶𝗰𝗶𝘁𝗮 𝗶𝗻𝘃𝗼𝗰𝗮𝗻𝗱𝗼 , 𝗹𝗲𝘃𝗮𝗻𝘁𝗲𝗻 𝗶𝗻𝘀𝗲𝗿𝘃𝗶𝗯𝗹𝗲𝘀*_\n`;
  for (const mem of participants) {
    teks += `*🎀 ⇝* @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└𝙱ᴀʀʙɪᴇ𝙱ᴏᴛ ★ ɪɢ : @xbarbicita.7*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación|ta)$/i;
handler.admin = true;
handler.group = true;
export default handler;