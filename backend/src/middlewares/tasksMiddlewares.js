const validadeBody = (request, response, next) => { 
    const {body} = request; 

    if(body.title === undefined){
        return response.status(400).json({message: 'O titulo e necessario'})
    }

    if(body.title === ""){
        return response.status(400).json({message: 'O titulo nao pode ser vazio'})
    }
    
    next(); 
}

module.exports = { 
    validadeBody,
}