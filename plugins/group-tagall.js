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
  const oi = `𝗠𝗘𝗡𝗖𝗜𝗢𝗡 𝗚𝗘𝗡𝗘𝗥𝗔𝗟:* ${pesan}`;
  let teks = `*‼𝗜𝗚𝗡𝗢𝗥𝗔𝗥 𝗘𝗦 𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘𝗥 𝗖𝗢𝗡 𝗜𝗡𝗧𝗘𝗟𝗜𝗚𝗘𝗡𝗖𝗜𝗔 ‼*\n\n *${oi}\n\n➥ _*𝙎𝙠𝙮𝙘𝙞𝙩𝙖 𝙞𝙣𝙫𝙤𝙘𝙖𝙣𝙙𝙤 , 𝙡𝙚𝙫𝙖𝙣𝙩𝙚𝙣 𝙥𝙚𝙧𝙨𝙤𝙣𝙞𝙩𝙖𝙨 𝙙𝙚𝙡 𝙢𝙪𝙣𝙙𝙤*_\n`;
  for (const mem of participants) {
    teks += `*🧃 ⇝* @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└SᴋʏᴄɪᴛxBᴏᴛ ★ ɪɢ : @xskycita.7*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación|ta)$/i;
handler.admin = true;
handler.group = true;
export default handler;