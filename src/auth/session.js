const getSession = (key) => {
    return localStorage.getItem(key);
};

const setSession = (key, value) => {
    localStorage.setItem(key, value);
};

const removeSession = (key) => {
    localStorage.removeItem(key);
};

export {getSession, setSession, removeSession};