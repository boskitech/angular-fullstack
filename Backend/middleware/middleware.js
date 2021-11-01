export const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
  }else{
        res.sendStatus(403);
    }
}

// export const verifyToken = (req, res, next) => {
//     if(!req.headers.authorization){
//     	return res.status(401).send('Unauthorized request')
//     }
//     let token = req.headers.authorization.split(' ')[1]
//     if(token === 'null'){
//     	return res.status(401).send('Unauthorized request')
//     }
//     let payload = jwt.verify(token, 'secretKey')
//     if(!payload){
//     	return res.status(401).send('Unauthorized request')
//     }
//     req.userId = payload.subject
//     next()
// }
