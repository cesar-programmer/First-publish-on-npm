/* eslint-disable no-console */
const messages = [
  'cesar',
  'rene',
  'diego',
  'andre',
  'ariana',
  'leilani',
  'alejandro',
];

const ramdomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { ramdomMsg };
