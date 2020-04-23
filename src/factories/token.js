const jwt = require('jsonwebtoken');

const generateToken = (now, privateKey, clientID) => {
    const expireAt = now.add(5, "minute");
    const token = jwt.sign(
        {exp: expireAt.unix()},
        privateKey,
        {algorithm: 'RS256'}
    );

    return {
        'Authorization': `${token}`,
        'X-Client-ID': clientID,
    };
};

export {generateToken};