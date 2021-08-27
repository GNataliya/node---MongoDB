const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/myFirstDB';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(url, options);
const db = mongoose.connection;

db.on('error', (err) => {
    console.log('DB err:', err);
});

db.once('open', () => {
    console.log('Coinnected to DB');
});

db.once('close', () => {
    console.log('Close connected to DB');
});

console.log('ok');
