

const traerCompras = async(req, res) =>{
    
    res.status(200).json('todas tus compras')
};

module.exports = {
    traerCompras
}
