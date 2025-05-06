import express from 'express';
import path from 'path';
import remindersRouter from './routers/reminder'; 

const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For form submissions
app.use('/views', express.static('./views'));

app.use('/reminders', remindersRouter);

app.get('/', function(req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  });

app.listen(8000, () => console.log('Server started'));