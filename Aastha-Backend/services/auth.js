const sessionIdToUserMap = new map();

const setUser = (id, user) => {
    sessionIdToUserMap(id, user);
}


const getUser = (id) => {
    return sessionIdToUserMap(id);
}

module.exports = { setUser, getUser }