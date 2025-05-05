//═══════════════[ ⚙️ معلومات المالك ⚙️ ]═══════════════\\
global.owner = [
  ["962798762364", '𝐀𝐌𝐀𝐃𝐀𝐑 ☠️', true], // الرقم الرسمي للمالك
]
global.official = [
  ["962798762364", '𝐀𝐌𝐀𝐃𝐀𝐑 ☠️ - المطور', 1]
]

//═══════════════[ 🧾 معلومات الملصق 🧾 ]═══════════════\\
global.packname = `╭ 𝐀𝐌𝐀𝐃𝐀𝐑 ☠️\n┃\n┃ » بوت واتساب متعدد الوظائف\n┃ » يعمل على Termux أو VPS\n╰━━━━━━━━•`
global.author = `╭ 𝐀𝐌𝐀𝐃𝐀𝐑 ☠️\n┃\n┃ » المطور:\n┃ AMADAR\n┃\n┃ ⊹ بوت عمليات قوية\n┃ ♡ للدعم:\n┃ » github.com/AMADAR\n╰━━━━━━━━•`

//═══════════════[ 🧠 اللغة والواجهة 🧠 ]═══════════════\\
global.gt = "𝐀𝐌𝐀𝐃𝐀𝐑" // اسم البوت
global.lenguajeGB = ar // اللغة (ar = عربي، es = إسباني، en = إنجليزي)
global.mid = ar
global.country = 'الأردن' // الدولة الافتراضية

//═══════════════[ 🖼️ صور القائمة 🖼️ ]═══════════════\\
global.imagen = fs.readFileSync('./Menu2.jpg') // الصورة الأساسية للقائمة
global.imagen1 = fs.readFileSync('./media/menus/Menu1.jpg')
global.imagen2 = fs.readFileSync('./media/menus/Menu2.jpg')

//═══════════════[ 🌐 APIs & مفاتيحها 🌐 ]═══════════════\\
global.APIs = {
  amel: 'https://api.ameleiro.com',
  violetics: 'https://violetics.pw',
  bx: 'https://bx-hunter.herokuapp.com',
}

global.APIKeys = {
  'https://api.ameleiro.com': 'tuapikey',
  'https://violetics.pw': 'webme',
  'https://bx-hunter.herokuapp.com': 'HunterApiKey',
}

//═══════════════[ ✉️ معلومات التواصل ✉️ ]═══════════════\\
global.mail = 'qsralahmr@gmail.com' // بريد الدعم
global.desc = 'بوت واتساب متعدد الوظائف بإدارة AMADAR'
global.desc2 = '𝐀𝐌𝐀𝐃𝐀𝐑 | نسخة خاصة معدّلة من GataBot-MD'

//═══════════════[ ⚠️ تحذيرات وإعدادات إضافية ⚠️ ]═══════════════\\
// يمكنك لاحقًا إضافة إعدادات إضافية حسب الحاجة مثل:
// - ضبط ردود البوت
// - الحماية من السبام
// - مستوى التحكم بالمجموعات
// - الحماية من الحظر التلقائي

//═══════════════[ ⚡ نهاية الملف ⚡ ]═══════════════\\
module.exports = {
  developer: 'AMADAR-B',
  botName: 'StickerMaster',
  version: '1.0.0',
  commands: {
    // 🎨 أوامر إنشاء وتحويل الملصقات
    '!sticker': 'تحويل صورة أو فيديو إلى ملصق',
    '!sticker resize=512/512': 'تغيير حجم الملصق إلى 512x512',
    '!sticker grayscale': 'تحويل الملصق إلى أبيض وأسود',
    '!sticker blur=5': 'تطبيق تأثير ضبابي على الملصق',

    // 🛠️ أوامر تعديل حقوق الملصقات
    '!setauthor AMADAR-B': 'تعيين اسم المطور على الملصق',
    '!setpackname StickerMaster': 'تعيين اسم الحزمة على الملصق',

    // 🎞️ أوامر تحويل الملصقات إلى فيديو
    '!sticker2video': 'تحويل ملصق متحرك إلى فيديو',
    '!sticker2gif': 'تحويل ملصق إلى ملف GIF',

    // 🎮 أوامر الألعاب
    '!game tictactoe': 'بدء لعبة XO',
    '!game quiz': 'بدء مسابقة أسئلة',
    '!game rps': 'لعب حجر ورقة مقص',
    '!game math': 'حل مسائل رياضية',

    // ℹ️ أوامر معلوماتية
    '!help': 'عرض قائمة الأوامر المتاحة',
    '!about': 'معلومات حول البوت والمطور',
  },
  stickerSettings: {
    defaultAuthor: 'AMADAR-B',
    defaultPack: 'StickerMaster',
    allowCustomMetadata: true
  },
  features: {
    enableStickerConversion: true,
    enableStickerEditing: true,
    enableGames: true,
    enableVideoConversion: true
  }
};module.exports = {
  developer: 'AMADAR-B',
  prefix: '!',
  commands: {
    // فتح/إغلاق المجموعة
    groupOpen: {
      description: 'فتح المجموعة (السماح بالرسائل من الجميع)',
      usage: '!فتح_المجموعة أو !group open',
    },
    groupClose: {
      description: 'إغلاق المجموعة (الرسائل للمشرفين فقط)',
      usage: '!قفل_المجموعة أو !group close',
    },

    // إدارة الأعضاء
    kick: {
      description: 'طرد عضو من المجموعة',
      usage: '!طرد @رقم أو !kick @user',
    },
    promote: {
      description: 'ترقية عضو إلى مشرف',
      usage: '!ترقية @رقم أو !promote @user',
    },
    demote: {
      description: 'إزالة عضو من الإشراف',
      usage: '!تنزيل @رقم أو !demote @user',
    },
    kickAll: {
      description: 'زرف (طرد) جميع أعضاء المجموعة دفعة واحدة (إلا المشرفين)',
      usage: '!زرف_الكل أو !kickall',
    },

    // منشن الكل
    tagAll: {
      description: 'منشن جميع الأعضاء',
      usage: '!منشن أو !tagall',
    },

    // تغيير معلومات المجموعة
    setName: {
      description: 'تغيير اسم المجموعة',
      usage: '!اسم_الجروب الاسم_الجديد أو !setname new name',
    },
    setDesc: {
      description: 'تغيير وصف المجموعة',
      usage: '!الوصف نص_الوصف أو !setdesc description',
    },
    setIcon: {
      description: 'تغيير صورة المجموعة (أرسل صورة مع الأمر)',
      usage: '!seticon (مع إرسال صورة)',
    },

    // معلومات المجموعة
    groupInfo: {
      description: 'عرض معلومات الجروب',
      usage: '!معلومات_الجروب أو !groupinfo',
    },

    // القوانين والترحيب
    welcome: {
      description: 'تفعيل أو تعطيل رسالة الترحيب',
      usage: '!ترحيب on/off أو !welcome on/off',
    },
    rules: {
      description: 'عرض أو تعديل قوانين المجموعة',
      usage: '!قوانين أو !rules أو !setrules النص',
    },
    link: {
      description: 'جلب رابط المجموعة',
      usage: '!رابط أو !link',
    },
  },
};let handler = async (m, { conn, participants, isBotAdmin, isAdmin, groupMetadata, usedPrefix, command }) => {
  if (!m.isGroup) throw '❌ هذا الأمر يعمل فقط في المجموعات.';
  if (!isBotAdmin) throw '❌ يجب أن يكون البوت مشرفاً لتنفيذ الأمر.';
  if (!isAdmin) throw '❌ هذا الأمر للمشرفين فقط.';

  let users = participants.filter(u => !u.admin && u.id !== conn.user.jid).map(u => u.id);

  if (!users.length) throw '❌ لا يوجد أعضاء يمكن طردهم.';

  m.reply(`🚨 جاري طرد ${users.length} عضواً...`);

  for (let user of users) {
    try {
      await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
    } catch (e) {
      m.reply(`⚠️ تعذر طرد @${user.split('@')[0]}`, null, { mentions: [user] });
    }
  }

  m.reply('✅ تم طرد جميع الأعضاء بنجاح (عدا المشرفين).');
};

handler.command = /^(زرف_الكل|kickall)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
let handler = async (m, { conn }) => {
  // تجاهل الرسائل من البوت نفسه
  if (m.fromMe) return;

  // رد تلقائي على كل رسالة
  let replyText = `👋 أهلاً بك، لقد استلمت رسالتك:\n\n"${m.text}"`;

  // مثال على تفاعل ثابت (يمكنك تخصيصه)
  await conn.reply(m.chat, replyText, m);
};

handler.all = true;

export default handler;
const handler = async (m, { conn, args, participants, groupMetadata, usedPrefix, command }) => {
  const allMembers = participants.map(u => u.id).filter(v => v !== conn.user.jid)
  
  switch (command) {
    case 'منشن':
      conn.sendMessage(m.chat, {
        text: `المنشن الجماعي:\n\n${allMembers.map((v, i) => `${i + 1}. @${v.split('@')[0]}`).join('\n')}`,
        mentions: allMembers
      }, { quoted: m })
      break
      
    case 'تسجيل':
      if (!args[0] || !args[1]) throw `اكتب الأمر بهذا الشكل: ${usedPrefix}تسجيل اسمك عمرك`
      global.db.data.users[m.sender].name = args[0]
      global.db.data.users[m.sender].age = args[1]
      m.reply(`تم تسجيلك بنجاح:\n- الاسم: ${args[0]}\n- العمر: ${args[1]}`)
      break

    case 'الملفي':
      const user = global.db.data.users[m.sender]
      m.reply(`معلوماتك:\n- الاسم: ${user.name || 'غير مسجل'}\n- العمر: ${user.age || 'غير مسجل'}`)
      break

    case 'تغيير_الاسم':
      if (!args[0]) throw `اكتب الاسم الجديد بعد الأمر`
      await conn.groupUpdateSubject(m.chat, args.join(" "))
      m.reply('تم تغيير اسم المجموعة!')
      break

    case 'تغيير_الوصف':
      if (!args[0]) throw `اكتب الوصف الجديد بعد الأمر`
      await conn.groupUpdateDescription(m.chat, args.join(" "))
      m.reply('تم تحديث وصف المجموعة!')
      break

    case 'تغيير_الصورة':
      if (!m.quoted || !m.quoted.image) throw 'قم بالرد على صورة لتغييرها كصورة للمجموعة'
      const image = await m.quoted.download()
      await conn.updateProfilePicture(m.chat, image)
      m.reply('تم تغيير صورة المجموعة!')
      break

    case 'طرد_الكل':
      for (let userId of allMembers) {
        await conn.groupParticipantsUpdate(m.chat, [userId], 'remove')
      }
      m.reply('تم طرد جميع الأعضاء (عدا البوت).')
      break

    case 'زواج':
      let mention = m.mentionedJid[0]
      if (!mention) throw 'قم بعمل منشن للشخص الذي تريد الزواج منه'
      conn.reply(m.chat, `تهانينا! @${m.sender.split('@')[0]} تزوج/ت بـ @${mention.split('@')[0]}`, m, { mentions: [m.sender, mention] })
      break

    case 'خمن_الانمي':
      const anime = ['ناروتو', 'ون بيس', 'هجوم العمالقة', 'ديث نوت']
      let randAnime = anime[Math.floor(Math.random() * anime.length)]
      m.reply(`خمن اسم الأنمي: ${randAnime.split('').map(c => c === ' ' ? ' ' : '_').join(' ')}`)
      break

    case 'سبيستون':
      const cartoons = ['الكابتن ماجد', 'المحقق كونان', 'فلة والأقزام', 'الليث الأبيض']
      let rand = cartoons[Math.floor(Math.random() * cartoons.length)]
      m.reply(`خمن اسم كرتون سبيستون: ${rand.split('').map(c => c === ' ' ? ' ' : '_').join(' ')}`)
      break

    default:
      throw false
  }
}

handler.command = [
  'منشن', 'تسجيل', 'الملفي',
  'تغيير_الاسم', 'تغيير_الوصف', 'تغيير_الصورة',
  'طرد_الكل', 'زواج', 'خمن_الانمي', 'سبيستون'
]
handler.group = true
handler.admin = true

export default handler
