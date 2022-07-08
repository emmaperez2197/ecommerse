const  {hashSync, compareSync} = require('bcryptjs');

const hash = payload => hashSync(payload, 12)

const anHash = (payload, hashPayload) => compareSync(payload, hashPayload) 


module.exports = {
    hash,
    anHash
}