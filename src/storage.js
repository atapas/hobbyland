const saveToLS = (key, value) => {

    if (typeof(Storage) !== "undefined") {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

const readFromLS = (key) => {

    if (typeof(Storage) !== "undefined") {
        return localStorage.getItem(key);
    }
}

export { saveToLS, readFromLS };
