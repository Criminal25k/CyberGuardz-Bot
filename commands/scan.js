const virustotal = require("../apis/virustotal")

module.exports = async(sock,jid,text)=>{

const url = text.split(" ")[1]

if(!url){
return sock.sendMessage(jid,{text:"Usage: /scan <url>"})
}

const result = await virustotal.scan(url)

await sock.sendMessage(jid,{
text:`🔎 Scan Result:\n${result}`
})

}
