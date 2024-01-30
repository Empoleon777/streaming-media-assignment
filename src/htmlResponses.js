const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const page3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

const getIndex = (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(index);
    response.end();
}

module.exports.getIndex = getIndex;