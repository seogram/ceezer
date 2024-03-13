export const setLocalStorage = <T>(name: string, value: T): void => {
    window.localStorage.setItem(name, JSON.stringify(value));
};

export const getLocalStorage = (key: string) => {
    const keyValue = window.localStorage.getItem(key);
    if (keyValue && keyValue !== "undefined") {
        return JSON.parse(keyValue)
    }
    return null;
};
