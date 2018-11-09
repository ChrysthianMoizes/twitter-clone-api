const express = require('express');
const Database = require('./database/settings');
const cors = require('cors');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.json());
app.use(cors());

Database.connect();

app.use((req, res, next) => {
    req.io = io;
    return next();
});

app.use(require('./routes'));

server.listen(3000, () => {
    console.log('Server started on port 3000');
});
