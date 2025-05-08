/* 
Base : @ky6taka
*/
process.on('uncaughtException', console.error)
require('./lib/herta-list')
require('./setting')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageContent, generateWAMessage, downloadContentFromMessage, areJidsSameUser, getContentType } = global.baileys
const { default: makeWASocket, makeWALegacySocket, BufferJSON, Browsers, initInMemoryKeyStore, extractMessageContent, makeInMemoryStore, proto, WAProto, DisconnectReason, useMultiFileAuthState, AnyMessageContent, fetchLatestBaileysVersion, prepareWAMessageMedia, getBinaryNodeChild, jidDecode, generateForwardMessageContent, generateWAMessageFromContent, jidNormalizedUser, WAMessageStubType, relayMessage, makeCacheableSignalKeyStore } = require("@whiskeysockets/baileys")
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const speed = require('performance-now')
const axios = require('axios')
const fsx = require('fs-extra')
const mark = `0@s.whatsapp.net`
const dns = require('dns')
const FormData = require('form-data')
const gtts = require('node-gtts')
const fetch = require("node-fetch")
const ytdl = require("ytdl-core")
const cheerio = require('cheerio')
const ms = require("ms")
const crypto = require('crypto')
const https = require('https')
const yts = require("yt-search")
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const moment = require('moment-timezone')
const YT = require('./lib/ytdl.js')
const uploadFile = require("./lib/uploadFile")
const { stickQC } = require('./lib/qc-stick')
const { sswebDesktop, sswebTablet, sswebPhone } = require('./lib/ssweb')
const Func = require('./lib/functions')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, formatp, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const prem = require("./lib/premium")
const { handleAntiLink } = require('./lib/antilink')
const ntilink = JSON.parse(fs.readFileSync("./hertaai/database/antilink.json"))
const antivirtexHandler = require('./lib/antivirtex')
const thumb = fs.readFileSync('./hertaai/media/image/thumb.jpg')
const vnnye = JSON.parse(fs.readFileSync('./hertaai/media/vn.json'))
const docunye = JSON.parse(fs.readFileSync('./hertaai/media/docs.json'))
const zipnye = JSON.parse(fs.readFileSync('./hertaai/media/zip.json'))
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'))
const apknye = JSON.parse(fs.readFileSync('./hertaai/media/apk.json'))
const vidnye = JSON.parse(fs.readFileSync('./hertaai/media/vid.json'))
const pengguna = JSON.parse(fs.readFileSync('./hertaai/database/database.json'))
let premium = JSON.parse(fs.readFileSync('./hertaai/database/premium.json'))
const banned = JSON.parse(fs.readFileSync('./hertaai/database/banned.json'))

const { setWelcome, setLeft, setWelcomeStatus, setLeftStatus, welcomeHandler } = require('./lib/welcome')

module.exports = ky6taka = async (ky6taka, m, chatUpdate, store) => {
  try {
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
    var budy = (typeof m.text == 'string' ? m.text : '')
    const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
   
//===============================//
const ctext = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('')
  var xyz = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  }
  var replacer = []
  abc.map((v, i) =>
    replacer.push({
      original: v,
      convert: xyz[style].split('')[i]
    })
  )
  var str = text.toLowerCase().split('')
  var output = []
  str.map((v) => {
    const find = replacer.find((x) => x.original == v)
    find ? output.push(find.convert) : output.push(v)
  })
  return output.join('')
}

const pushName = m.pushName || "No Name"
function getFormattedDate() {
  var currentDate = new Date()
  var day = currentDate.getDate()
  var month = currentDate.getMonth() + 1
  var year = currentDate.getFullYear()
  var hours = currentDate.getHours()
  var minutes = currentDate.getMinutes()
  var seconds = currentDate.getSeconds()
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
}

const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const botNumber = await ky6taka.decodeJid(ky6taka.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false
const groupMetadata = m.isGroup ? await ky6taka.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const Jpm = m.isGroup ? ntilink.includes(from) : false 
const isBan = banned.includes(m.sender)
const isPrem = isCreator ? true : prem.checkPremiumUser(m.sender, premium)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){
  var stime = ctext(`Good Night`)
}
if(time2 < "19:00:00"){
  var stime = ctext(`Good Evening`)
}
if(time2 < "18:00:00"){
  var stime = ctext(`Good Evening`)
}
if(time2 < "15:00:00"){
  var stime = ctext(`Good Afternoon`)
}
if(time2 < "11:00:00"){
  var stime = ctext(`Good Morning`)
}
if(time2 < "05:00:00"){
  var stime = ctext(`Good Morning`)
}
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const tanggal2 = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const qtod = m.quoted? "true":"false"
const bii = JSON.parse(fs.readFileSync('./hertaai/database/database.json').toString())
const isSeler = [botNumber, ...bii].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const jangan = m.isGroup ? ntilink.includes(m.chat) : false	
//===============================//
try {
  pplu = await ky6taka.profilePictureUrl(m.sender, 'image')
} catch {
  pplu = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}

const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}
const herta = {
  key: {
    participant: `0@s.whatsapp.net`,
    ...(m.chat ? {
      remoteJid: `status@broadcast`
    } : {})
  },
  message: {
    "contactMessage": {
      'displayName': `${pushName}`,
      'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;herta,;;;\nFN: herta Ai\nitem1.TEL;waid=${m.sender.split("@")[0]}:+${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      'jpegThumbnail': pplu,
      thumbnail: pplu,
      sendEphemeral: true
    }   
  }
}

const floc = {
  key: {
    participant : '0@s.whatsapp.net',
    ...(m.chat ? { 
      remoteJid: `status@broadcast`
    } : {})
  },
  message: {
    locationMessage: {
      name: `hertaix ${versions}`,
      thumbnailUrl: pplu
    }
  }
}

const reply = async(teks) => {ky6taka.sendMessage(from, {text: teks, mentions: await ments(teks)},{quoted:m})}

ky6taka.autoshalat = ky6taka.autoshalat ? ky6taka.autoshalat : {}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? ky6taka.user.id : m.sender
let id = m.chat 
if(id in ky6taka.autoshalat) {
  return false
}
let jadwalSholat = {
  shubuh: '04:03',
  terbit: '05:28',
  dhuha: '05:53',
  dzuhur: '11:41',
  ashar: '15:07',
  magrib: '17:55',
  isya: '19:10',
}
const datek = new Date((new Date).toLocaleString("en-US", {
  timeZone: "Asia/Jakarta"  
}))
const hours = datek.getHours()
const minutes = datek.getMinutes()
const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
  if(timeNow === waktu) {
    let caption = `Hai kak ${pushName},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah Jakarta dan sekitarnya._`
    ky6taka.autoshalat[id] = [
      reply(caption),
      setTimeout(async () => {
        delete ky6taka.autoshalat[m.chat]
      }, 57000)
    ]
  }
}

const totalFitur = () =>{
  var mytext = fs.readFileSync("./herta.js").toString()
  var numUpper = (mytext.match(/case '/g) || []).length;
  return numUpper
}     

async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}

//===============================//
if (!ky6taka.public) {
if (!m.key.fromMe) return
}
function getRandomColor() {
  return Math.floor(Math.random() * 256); // Menghasilkan warna acak dari 0-255
}
const randomColor1 = getRandomColor(); 
const randomColor2 = getRandomColor(); 
const randomColor3 = getRandomColor(); 
const randomBgColor1 = getRandomColor(); 
const randomBgColor2 = getRandomColor(); 
const randomBgColor3 = getRandomColor(); 
const randomBgColor4 = getRandomColor(); 
const randomBgColor5 = getRandomColor(); 

let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
ky6taka.sendPresenceUpdate('available', m.chat)
console.log(
  `\x1b[48;5;${randomBgColor1}m|\x1b[1;37m${botname}\x1b[0m|\n` +  // Latar belakang acak untuk hertaai dengan teks putih tebal di dalam tanda | |
  `\x1b[48;5;${randomBgColor2}m\x1b[1;37m|Time| ${time}\x1b[0m\n` +  // Latar belakang acak untuk |Time| dengan teks putih tebal
  `\x1b[48;5;${randomBgColor3}m\x1b[1;36m|Cmd| \x1b[38;5;${randomColor1}m${budy || m.mtype}\x1b[0m\n` +  // Latar belakang acak untuk |Cmd| dengan warna cyan untuk teks, warna acak untuk budy || m.mtype
  `\x1b[48;5;${randomBgColor4}m\x1b[38;5;${randomColor2}m|From| ${pushName}\x1b[0m\n` +  // Latar belakang acak untuk |From| dengan warna acak untuk teks pushName
  `\x1b[48;5;${randomBgColor5}m${groupName ? `\x1b[38;5;${randomColor3}m|In| ${groupName}` : `\x1b[38;5;${randomColor3}m|In| Private Chat`}\x1b[0m`  // Latar belakang acak untuk |In| dengan warna acak untuk teks groupName atau Private Chat
);
}
//===============================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: ky6taka.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, ky6taka.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
ky6taka.ev.emit('messages.upsert', msg)
}

if (budy.startsWith('!')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
//===============================//
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
ky6taka.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
ky6taka.sendMessage(m.chat, {
  image: await getBuffer(get_data_respon.image_url),
  caption: get_data_respon.response, // Gantilah dengan teks yang sesuai
}, {
  quoted: m
})
}
}

try {
ppuser = await ky6taka.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

try {
    let isNumber = x => typeof x === 'number' && !isNaN(x)
    let limitUser = isPrem ? 1000 : 15
    let dbUser = global.db.data.users[m.sender]
    
    if (typeof dbUser !== 'object') global.db.data.users[m.sender] = {}
    
    if (dbUser) {
        if (!isNumber(dbUser.afkTime)) dbUser.afkTime = -1
        if (!('afkReason' in dbUser)) dbUser.afkReason = ''
        if (!isNumber(dbUser.limit)) dbUser.limit = limitUser
    } else global.db.data.users[m.sender] = {
        afkTime: -1,
        afkReason: '',
        limit: limitUser,
    }
} catch (err) {
    console.log(err)
}

let isNumber = x => typeof x === 'number' && !isNaN(x)
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
    if (!isNumber(setting.status)) setting.status = 0
    if (autobio) {
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        await ky6taka.updateProfileStatus(`I am ${botname} | Aktif Selama ${uptime} ⏳ | Mode : ${ky6taka.public ? 'Public-Mode' : 'Self-Mode'}`).catch(_ => _)
    }

    if (autoread) {
        ky6taka.readMessages([m.key])
    }
} else global.db.data.settings[botNumber] = {
    status: 0,
    autobio: false,
    autoread: false
}

function pickMoji(emojiArray) {
  return emojiArray[Math.floor(Math.random() * emojiArray.length)];
}

async function loading() {
  var loadingEmojis = [
    pickMoji(['🙄','🤯','🗿','💬','🤨','🥴','😐','👆','😔','👀','👎','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙']),
    pickMoji(['😨','😅','😂','😳','😎','🥵','😱','🐦','🙄','🐤','🗿','💬','🤨','🥴','😐','👆','😔','👀','👎','🥶','💯','🔥','♻️','〽️','⚠️']),
    pickMoji(['😨','😅','😂','😳','💭','🗯','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙']),
    pickMoji(['😳','💭','🗯','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙']),
    pickMoji(['😨','😅','😂','😳','😎','🥵','😱','🐦','🙄','🐤','💣','😔','👀','👎','🥶','💯','💤','💨','🔥','👍','❓️','⏳️','💥','🤙'])
  ]
  
  let { key } = await ky6taka.sendReact(m.chat, pickMoji(['😨','😅','😂','😳','😎','🥵','😱','🐦','🙄','🐤','🗿','💬','🤨','🥴','😐','👆','😔','👀','👎','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙']), m.key)

  for (let i = 0; i < loadingEmojis.length; i++) {
    await sleep(65)
    await ky6taka.sendReact(m.chat, loadingEmojis[i], m.key)
  }
}

function hertaixbot(jid) {
    let normalizedJid = jid.includes('@s.whatsapp.net') ? jid : `${jid}@s.whatsapp.net`;
    return normalizedJid === global.bottz;
}

async function getUserName(jid) {
    try {
        if (!ky6taka?.getName) return 'User';
        return await ky6taka.getName(jid);
    } catch (error) {
        console.error('Error getting user name:', error);
        return 'User';
    }
}

// Handle mentions
if (m.mentionedJid?.length > 0) {
    for (let jid of m.mentionedJid) {
        if (hertaixbot(jid)) continue;
        
        let mentionedUser = global.db.data.users[jid];
        if (!mentionedUser || mentionedUser.afkTime <= 0) continue;

        const pushname = await getUserName(jid);
        m.reply(`🚩 *${pushname}* is now AFK!`);
    }
}

// Handle user returning from AFK
const currentUser = global.db.data.users[m.sender];
if (currentUser && currentUser.afkTime > 0 && !m.key.fromMe) {
    m.reply(`🏷️ *Welcome Back!*

*User* : ${pushName}
${currentUser.afkReason ? '📝 *Reason* : ' + currentUser.afkReason : ''}
⏰ *Duration* : ${clockString(new Date - currentUser.afkTime)}`.trim());
    
    currentUser.afkTime = -1;
    currentUser.afkReason = '';
}
//—————「 MAIN MENU 」—————//
switch(command) {
	
case "menu": {
    let owned = `${global.owner}`
    let statususer = isCreator ? 'Owner 🎴' : isPrem ? 'Premium 💎' : 'Gratisan 😺';
    let limitz = db.data.users[m.sender].limit;

    wek = `${gris}「 I N F O  B O T 」${gris}
    
   𖦹 ᴄʀᴇᴀᴛᴏʀ : *@${owned.split("@")[0]}*
   𖦹 ʀᴜɴᴛɪᴍᴇ : *${runtime(process.uptime())}*
   𖦹 ᴍᴏᴅᴇ ʙᴏᴛ : *${ky6taka.public ? `ᴘᴜʙʟɪᴄ` : `sᴇʟғ`}*
   𖦹 ꜱᴛᴀᴛᴜꜱ : *${statususer}*

${gris}「 L I S T  M E N U 」${gris}`

    const caption = `${wek}\n\n${readmore}\n\n${menuai(prefix)}\n\n\n${menuanime(prefix)}\n\n\n${global.menufun(prefix)}\n\n\n${menudatabase(prefix)}\n\n\n${menudownload(prefix)}\n\n\n${menugame(prefix)}\n\n\n${menugroup(prefix)}\n\n\n${menuother(prefix)}\n\n\n${menuowner(prefix)}\n\n\n${menusearch(prefix)}\n\n\n${menustickanim(prefix)}\n\n\n${menutools(prefix)}\n\n\n${menustore(prefix)}`;

    if (args[0] === "all") {
        let userInfo = `
${gris}「 I N F O  U S E R 」${gris}

   𖦹 ɴᴀᴍᴇ : *${pushName}*
   𖦹 ɴᴜᴍʙᴇʀ : *${m.sender.split('@')[0]}*
   𖦹 sᴛᴀᴛᴜs : *${statususer}*
   𖦹 ʟɪᴍɪᴛ : *${limitz}*`;

        const allCaption = `${wek}${userInfo}\n\n${readmore}\n\n${menuai(prefix)}\n\n\n${menuanime(prefix)}\n\n\n${global.menufun(prefix)}\n\n\n${menudatabase(prefix)}\n\n\n${menudownload(prefix)}\n\n\n${menugame(prefix)}\n\n\n${menugroup(prefix)}\n\n\n${menuother(prefix)}\n\n\n${menuowner(prefix)}\n\n\n${menusearch(prefix)}\n\n\n${menustickanim(prefix)}\n\n\n${menutools(prefix)}\n\n\n${menustore(prefix)}`;

        await ky6taka.sendMessage(m.chat, {
            document: fs.readFileSync("./package.json"),
            fileName: `© Redzone`,
            mimetype: "application/pdf",
            fileLength: 00000111,
            pageCount: 2024,
            caption: allCaption,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: saluran,
                    newsletterJid: idch,
                },
                externalAdReply: {  
                    title: `${time}`, 
                    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
                    thumbnailUrl: 'https://i.ibb.co.com/KhWV0G2/IMG-20241118-WA0324-1.png',
                    sourceUrl: '', 
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: floc });
    } else if (args[0]) {
        const menuMap = {
            'ai': menuai,
            'store': menustore,
            'anime': () => `${menuanime(prefix)}\n\n${menustickanim(prefix)}`,
            'database': menudatabase,
            'download': menudownload,
            'game': menugame,
            'group': menugroup,
            'other': menuother,
            'owner': menuowner,
            'search': menusearch,
            'tools': menutools
        };

        if (menuMap[args[0]]) {
            await ky6taka.sendMessage(m.chat, {
                document: fs.readFileSync("./package.json"),
                fileName: `© Redzone`,
                mimetype: "application/pdf",
                fileLength: 00000111,
                pageCount: 2024,
                caption: menuMap[args[0]](prefix),
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterName: saluran,
                        newsletterJid: idch,
                    },
                    externalAdReply: {  
                        title: `${time}`, 
                        body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
                        thumbnailUrl: 'https://i.ibb.co.com/KhWV0G2/IMG-20241118-WA0324-1.png',
                        sourceUrl: '', 
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: floc });
        }
    } else {
        const sentMsg = await ky6taka.sendMessage(m.chat, { 
            text: caption, 
            contextInfo: {
                externalAdReply: {
                    title: `Herta Bot ${versions}`,
                    body: '',
                    thumbnailUrl: 'https://i.ibb.co.com/KhWV0G2/IMG-20241118-WA0324-1.png',
                    sourceUrl: 'https://chat.whatsapp.com/D1YnuAKeVui8yreEWOBJRr',
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });

        await ky6taka.sendMessage(from, { 
            text: `Hai Kak @${sender.split("@")[0]}. Bot ini masih ditahap BETA ya... Kalo mau support bisa langsung ketik *.donasi*`, 
            contextInfo: {
                forwardingScore: 777, 
                isForwarded: true,
                mentionedJid: [sender]
            }
        }, { quoted: null });
    }
}
break	
//=====
case 'wm': {
    if (isBan) return reply(mess.bann);
    if (!args.join(" ")) return reply(`Text mana?\n\nExample : ${prefix + command} herta|ky6taka`);
    
    const swn = args.join(" ");
    const pcknm = swn.split("|")[0];
    const atnm = swn.split("|")[1];
    
    try {
        if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`);
        
        if (/image/.test(mime)) {
            let media = await quoted.download();
            let encmedia = await ky6taka.sendImageAsSticker(from, media, m, { packname: pcknm, author: atnm });
            await fs.unlinkSync(encmedia);
        }
    } catch (e) {
        await reply(mess.errorF);
    }
}
break

case 'smeme': case 'stickermeme': case 'stickmeme': {
    if (!/webp/.test(mime) && /image/.test(mime)) {
        if (!quoted && !text) return reply(`Text mana?\n\nExample : ${prefix + command} teks atas|teks bawah`);
        
        reply(mess.wait);
        const uploadImage = require('./lib/uploadImage');
        let teks = text.split('|');
        let atas = teks[0] ? teks[0] : '-';
        let bawah = teks[1] ? teks[1] : atas;
        
        if (teks.length === 1) {
            atas = '_';
            bawah = teks[0];
        }
        
        let mee = await quoted.download();
        let mem = await uploadImage(mee);
        let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`;
        
        let memek = await ky6taka.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author });
    } else {
        reply(`Send/reply image with caption ${prefix + command} atas|bawah`);
    }
}
break

case 'sticker': case 's': case 'stickergif': case 'sgif': {
    if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`);
    
    if (/image/.test(mime)) {
        await loading();
        let media = await quoted.download();
        let encmedia = await ky6taka.sendImageAsStickerAV(from, media, fcall, { packname: global.packname, author: global.author });
        await fs.unlinkSync(encmedia);
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!');
        let media = await quoted.download();
        let encmedia = await ky6taka.sendVideoAsSticker(from, media, fcall, { packname: global.packname, author: global.author });
        await fs.unlinkSync(encmedia);
    } else {
        return reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`);
    }
}
break

//===============================//
default:
  if (budy.startsWith('=>')) {
    if (!isCreator) return false
    function Return(sul) {
      sat = JSON.stringify(sul, null, 2)
      bang = util.format(sat)
      if (sat == undefined) {
        bang = util.format(sul)
      }
      return reply(bang)
    }
    try {
      reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
    } catch (e) {
      reply(String(e))
    }
  }
  
  if (budy.startsWith('>')) {
    if (!isCreator) return false
    try {
      let evaled = await eval(budy.slice(2))
      if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
      await reply(evaled)
    } catch (err) {
      await reply(String(err))
    }
  }
  
  if (budy.startsWith('$')) {
    if(!isCreator) return false
    exec(budy.slice(2), (err, stdout) => {
      if(err) return reply(err)
      if (stdout) return reply(stdout)
    })
  }

  if ((budy.match) && ["Assalamualaikum", "assalamualaikum", "Assalamu'alaikum"].includes(budy) && !isCmd) {
    reply(`*Waalaikummussalam warahmatullahi wabarokatuh*\n\n\n_ðŸ“š Baca yang dibawah ya!_
"Orang yang mengucapkan salam seperti ini maka ia mendapatkan 30 pahala, kemudian, orang yang dihadapan atau mendengarnya membalas dengan kalimat yang sama yaitu "Wa'alaikum salam warahmatullahi wabarakatuh atau ditambah dengan yang lain (waridhwaana). Artinya selain daripada do'a selamat juga meminta pada Allah SWT`)
  }
  
  if (isCmd && budy.toLowerCase() != undefined) {
    if (from.endsWith('broadcast')) return
    if (m.isBaileys) return
    let msgs = global.db.data.database
    if (!(budy.toLowerCase() in msgs)) return
    ky6taka.copyNForward(from, msgs[budy.toLowerCase()], true)
  }
}
} catch (err) {
  m.reply(util.format(err))
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})
