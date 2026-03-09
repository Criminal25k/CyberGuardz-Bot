const { default: makeWASocket } = require("@whiskeysockets/baileys")
const scan = require("./commands/scan")
const breach = require("./commands/breach")
const password = require("./commands/password")
const tips = require("./commands/tips")

async function startBot(){

const sock = makeWASocket()

sock.ev.on("messages.upsert", async ({ messages }) => {

const msg = messages[0]
const text = msg.message?.conversation
if(!text) return

const jid = msg.key.remoteJid

if(text === "/start"){
await sock.sendMessage(jid,{
text:`
🛡 Cyber Security Bot

Commands:

/scan <url>
/breach <email>
/password
/ip <ip>
/whois <domain>
/cve <keyword>
/tip
/news
`
})
}

if(text.startsWith("/scan")) scan(sock,jid,text)
if(text.startsWith("/breach")) breach(sock,jid,text)
if(text.startsWith("/password")) password(sock,jid)
if(text.startsWith("/tip")) tips(sock,jid)

})

}

startBot()
