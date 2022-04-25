const express = require('express');
const checkListRouter = require('./src/routes/checklist')


const app = express();
app.use(express.json());


app.use('/checklists', checkListRouter);


app.listen(5000, () => {
    console.log('servidor foi iniciado!');
});



