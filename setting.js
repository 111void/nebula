/* 
Creator : @ky6taka
*/
const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')
const version = require("@whiskeysockets/baileys/package.json").version 
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const herta = packageJson.version

const ctext = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var xyz = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  abc.map((v, i) =>
    replacer.push({
      original: v,
      convert: xyz[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
global.baileysVersion = `${version}`
global.baileys = require('@whiskeysockets/baileys')
global.usePairingCode = true
global.sessionName = 'herta'
global.gris = '`'
global.wm = `Copyright © 2024`
global.autobio = false
global.autoread = false
global.chatgpt = true

global.urlch = 'https://whatsapp.com/channel/0029Vaulhq9JP21DhOe08u47'
global.idch = '120363361409999782'
global.botname = 'Herta Bot'
global.bottz = '6281233304409'
global.packname = '@'
global.author = `Herta Bot`
global.prefa = ['','!','.',',','🐤','🗿']
global.versions = `${herta}`

global.ownername = 'Void'
global.owner = ['62857947105870']
global.ownermail = ['kiy6taka@gmail.com']
global.ptrakteer = 'https://trakteer.id/ky6taka'

global.mess = {
    ban: ctext('*[ System Access Failed ]* you are banned by the owner'),
    badm: ctext('*[ System Notice ]* please add bot *admin*'),
    regis: ctext(`*[ System Access Failed ]*\n\nKamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur*`),
    premium: ctext('*[ System Notice ]* this only premium user'),
    limit: ctext('Limit anda habis'),
    search: ctext('🔍 *Search for server. . .*'),
    done: ctext('Done Ga Bang?? Done...'),
    success: ctext('*[ Loaded Success ]*'),
    admin: ctext('*[ System Notice ]* for *admin!* not *npc*'),
    owner: ctext('*[ System Access Failed ]* Access Denied'),
    group: ctext('*[ System Notice ]* Use this in group chat!'),
    private: ctext('*[ System Notice ]* Use this in private chat!'),
    bot: ctext('*[ System Notice ]* Only Bot user'),
    wait: ctext('*[ Loading ]* Please Wait'),
    getdata: ctext('Scraping metadata . . .'),
    fail: ctext('Can\'t get metadata!'),
    error: ctext('*[ System Failed ]* Error, please contact the owner'),
    errorF: ctext('*[ System Failed ]* Sorry this feature is in error.'),
}

global.limitawal = {
    premium: "10000000",
    free: 15
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})