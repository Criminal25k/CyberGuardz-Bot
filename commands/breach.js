const breachapi = require("../apis/breachapi")

module.exports = async(sock,jid,text)=>{

const email = text.split(" ")[1]

if(!email){
return sock.sendMessage(jid,{text:"Usage: /breach <email>"})
}

const result = await breachapi.check(email)

await sock.sendMessage(jid,{
text:`📧 Breach Result:\n${result}`
})

}
