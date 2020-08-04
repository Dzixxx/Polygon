export const createPrefix = (obj, prefix) =>{
    const prefixed = Object.keys(obj)
        .reduce((actionTypes, key) => {
            actionTypes[key] = `[${prefix}] ${obj[key]}`;
            return actionTypes;
        },{});

    return new Proxy(prefixed, {
        get(obj, prop) {
            if (obj[prop]) {
                return prop;
            } else {
                throw new TypeError(`${prop} is not a valid action type`);
            }
        }
    });
}
    