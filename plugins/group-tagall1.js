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
  const oi = `𝗠𝗘𝗡𝗖𝗜𝗢𝗡 𝗚𝗘𝗡𝗘𝗥𝗔𝗟:*  ${pesan}`;
  let teks = `*𝙎𝙊𝙔 𝙇𝘼 𝙈𝙀𝙅𝙊𝙍 𝘼𝙐𝙉𝙌𝙐𝙀 𝙏𝙀 𝘼𝙍𝘿𝘼 𝙀𝙎𝙀 𝙉̃𝙊𝘾𝙊🍑*\n\n *${oi}\n\n➥ _*𝙎𝙠𝙮𝙘𝙞𝙩𝙖 𝙞𝙣𝙫𝙤𝙘𝙖𝙣𝙙𝙤 𝙖 𝙡𝙖𝙨 𝙢𝙖́𝙨 𝙗𝙚𝙡𝙡𝙖𝙨 𝙙𝙚 𝙡𝙖 𝙧𝙚𝙜𝙞𝙤́𝙣*_\n`;
  for (const mem of participants) {
    teks += `*💗.ᐟ* @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└SᴋʏᴄɪᴛxBᴏᴛ ★ ɪɢ : @xskycita.7*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall1|invocar1|marcar1|todos1|invocación1|ta1)$/i;
handler.admin = true;
handler.group = true;
export default handler;