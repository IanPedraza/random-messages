const messages = [
    "Ian",
    "Yael",
    "Jorge",
    "Leonel",
    "Yani",
    "Yus"
];

const randomMsg = () => {
    const index = Math.floor(Math.random() * messages.length);
    const message = messages[index];
    console.log(message);
};

module.exports = { randomMsg };