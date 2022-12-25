
const apiurl = "";
const fetch = require("node-fetch")
async function request(endpoint , input=''){
    const res = `${apiurl}${endpoint}${input}`
    return res
}
module.exports.meme = async function() {
    const res = await fetch(`${apiurl}/meme`)
    const json = await res.text()
    const obj = JSON.parse(json);
    return obj;
} //endpoint for meme
module.exports.quote = async function() {
    const res = await fetch(`${apiurl}/quote`)
    const json = await res.text()
    const obj = JSON.parse(json);
    return obj;
}
//endpoint for quote





//Template for new api endpoint
/*
module.exports.endpointname = async function(){
    const res = await fetch(`${apiurl}/endpointname`)
    const json = await res.text()
    const obj = JSON.parse(json);
    return obj;
}
*/
