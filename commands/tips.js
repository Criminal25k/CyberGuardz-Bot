module.exports = async(sock,jid)=>{

const tips = [

"Enable 2FA on accounts",
"Use password managers",
"Avoid unknown links",
"Keep software updated",
"Do not reuse passwords"

]

const tip = tips[Math.floor(Math.random()*tips.length)]

await sock.sendMessage(jid,{
text:`💡 Cyber Tip:\n${tip}`
})

}
