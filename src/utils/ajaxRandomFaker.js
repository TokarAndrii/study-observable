const assets = ["", "withError", ""];
const max = assets.length;
const min = 0;

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const randomString = string => {
    let randomNum = getRandomInt(min, max);
    return string + assets[randomNum];
}

export { randomString }


