const jwt = require('jsonwebtoken');

const getUserFromToken = (token, apiPublicKey) => {
    try {
        const payload = jwt.verify(token, apiPublicKey);

        return {
            id: payload.uid,
            username: payload.username,
            name: payload.name,
        };
    } catch (error) {
        return false;
    }
};

export {getUserFromToken};