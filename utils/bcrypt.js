const  {hashSync, compareSync} = require('bcrypt');

const hash = (payload) =>{
    return hashSync(payload, 12)
    }

const anHash = (payload, hashPayload) =>{ 
    return compareSync(payload, hashPayload)
 }


module.exports = {
    hash,
    anHash
}