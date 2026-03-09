const crypto = require("crypto")

module.exports = async(sock,jid)=>{

const password = crypto.randomBytes(8).toString("hex")

await sock.sendMessage(jid,{
text:`🔑 Generated Password:\n${password}`
})

}
