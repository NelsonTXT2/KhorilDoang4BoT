/*
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '1a2a0614b9', // Masukin apikey kalian disini
}

// Other
global.owner = ['6285273104129'] 
global.premium = ['6285273104129','6281241100804','6281381685954','6281242432747','6289514712995','6285946057947'] 
global.ownernomer = '6285273104129'
global.ownername = 'KHORIL AKBAR'
global.botname = 'KhorilDoang4-BoT'
global.footer = 'KHORIL AKBAR'
global.youtube = 'http://tiktok.com/@khorildoang4'
global.ig = 'https://instagram.com/nelson_randanan'
global.mygc = 'https://chat.whatsapp.com/Hsko5DkvORYGCOSJNXMVo0'
global.myweb = 'https://www.instagram.com/Khorildoang4'
global.email = 'Khoirilakbarakbar@gmail.com'
global.region = 'Indonesia'
global.packname = 'KhorilDoang4-BoT'
global.author = 'By KHORIL AKBAR'
global.santuy = '𝗗𝗶 𝗯𝗮𝘄𝗮 𝘀𝗮𝗻𝘁𝘂𝘆 𝗮𝗷𝗮 😎'
global.sessionName = 'Nelson'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
	toxic: '',
	kartun: '𝐇𝐮𝐮 𝐈𝐬𝐭𝐫𝐢 𝐤𝐨 𝐤𝐚𝐫𝐭𝐮𝐧',
	pedo: '𝐓𝐜𝐡, 𝐃𝐚𝐬𝐚𝐫 𝐏𝐞𝐝𝐨𝐟𝐢𝐥',
    success: '*✓ 𝐒𝐮𝐜𝐜𝐞𝐬𝐬*',
    admin: '𝐅𝐢𝐭𝐮𝐫 𝐊𝐡𝐮𝐬𝐮𝐬 𝐀𝐝𝐦𝐢𝐧 𝐆𝐫𝐨𝐮𝐩!',
    botAdmin: '𝐁𝐨𝐭 𝐇𝐚𝐫𝐮𝐬 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 𝐓𝐞𝐫𝐥𝐞𝐛𝐢𝐡 𝐃𝐚𝐡𝐮𝐥𝐮!',
    owner: '𝐅𝐢𝐭𝐮𝐫 𝐊𝐡𝐮𝐬𝐮𝐬 𝐎𝐰𝐧𝐞𝐫 𝐁𝐨𝐭',
    group: '𝐅𝐢𝐭𝐮𝐫 𝐃𝐢𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐇𝐚𝐧𝐲𝐚 𝐔𝐧𝐭𝐮𝐤 𝐆𝐫𝐨𝐮𝐩!',
    private: '𝐅𝐢𝐭𝐮𝐫 𝐃𝐢𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐇𝐚𝐧𝐲𝐚 𝐔𝐧𝐭𝐮𝐤 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭!',
    bot: '𝐅𝐢𝐭𝐮𝐫 𝐊𝐡𝐮𝐬𝐮𝐬 𝐏𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐍𝐨𝐦𝐨𝐫 𝐁𝐨𝐭',
    wait: '*𝐋𝐨𝐚𝐝𝐢𝐧𝐠...*',
    error: '𝐅𝐢𝐭𝐮𝐫 𝐬𝐞𝐝𝐚𝐧𝐠 𝐞𝐫𝐫𝐨𝐫!',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
    global.limitawal = {
    premium: "Infinity",
    free: 15,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.thumb = fs.readFileSync('./image/chika.jpg')
global.asek = fs.readFileSync('./image/velo.mp4')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
