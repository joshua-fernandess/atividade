const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.headers('authorization')?.split('')[1];
    if (!token) return res.sendStatus(403).json({ message: 'Nenhum token encontrado.'});
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err) return res.status(401).json({ message: 'Não autorizado!'});
        req.userId = decoded.id;
        next();
    });
}

module.exports = authenticate;