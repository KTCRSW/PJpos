const express = require('express');
const { readdirSync } = require('fs');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

const connectDB = require('./Config/DatabaseConfig')

app.use(morgan('dev'));
app.use(cors());
app.use(bodyparser.json({ limit: '10mb' }));
connectDB();

readdirSync('./Routes')
    .map((r) => app.use('/api', require('./Routes/' + r)));

app.listen(PORT, () => {
    console.log(`Server on Port ${PORT}`)
})