import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.botnumber = "254111728536"
global.confirmcode = ""

global.owner = [
  ['254796283064', '𝔇𝔢𝔪𝔬𝔫 𝔪𝔡 𝔠𝔯𝔢𝔞𝔱𝔬𝔯👑', true],
  ['254111728536', '𝔇𝔢𝔪𝔬𝔫 𝔪𝔡', true],
  ['254796283064', '𝔇𝔢𝔪𝔬𝔫 𝔪𝔡', true],
  ['254111728536', '𝙳𝙴𝙼𝙾𝙽 𝙼𝙳', true],
  ['254796283064', '𝙳𝙴𝙼𝙾𝙽 𝙼𝙳', true],
];

global.suittag = ['254111728536'];
global.prems = ['254111728536'];

global.packname = 'ℭ𝔬𝔫𝔣𝔯𝔬𝔫𝔱𝔢𝔯';
global.author = '𝔇𝔢𝔪𝔬𝔫 𝔪𝔡';
global.wm = '𝔇𝔢𝔪𝔬𝔫 𝔪𝔡';
global.igfg = '𝔇𝔢𝔪𝔬𝔫 𝔅𝔬𝔱';
global.wait = '*[❗] 𝔇𝔢𝔪𝔬𝔫 𝔩𝔬𝔞𝔡𝔦𝔫𝔤...*';

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');

global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `▸ ${dia} ${fecha}\n▸ 𝔇𝔢𝔪𝔬𝔫 𝔪𝔡`;
global.gt = '𝔇𝔢𝔪𝔬𝔫 𝔪𝔡';
global.mysticbot = '𝔇𝔢𝔪𝔬𝔫 𝔪𝔡';
global.md = 'https://github.com/confronter';
global.mysticbot = 'https://github.com/confronter';
global.waitt = '*[❗] 𝔇𝔢𝔪𝔬𝔫 𝔪𝔡 𝔦𝔰 𝔩𝔬𝔞𝔡𝔦𝔫𝔤...*';
global.waittt = '*[❗] 𝔇𝔢𝔪𝔬𝔫 𝔪𝔡 𝔦𝔰 𝔩𝔬𝔡𝔦𝔫𝔤..*';
global.waitttt = '*[❗]𝔇𝔢𝔪𝔬𝔫 𝔪𝔡 𝔦𝔰 𝔩𝔬𝔡𝔦𝔫𝔤...*';
global.nomorown = '2547111728536';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; // Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;// America/Los_Angeles
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
