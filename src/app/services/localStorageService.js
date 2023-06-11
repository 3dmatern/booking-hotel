export function setTokens({ _id }) {
    localStorage.setItem("userId", _id);
}

export function getUserId() {
    return localStorage.getItem("userId");
}

export function removeAuthData() {
    localStorage.removeItem("userId");
}

const localStorageService = {
    setTokens,
    getUserId,
    removeAuthData,
};

export default localStorageService;
