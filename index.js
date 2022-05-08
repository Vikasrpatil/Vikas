require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString, {
    useUnifiedTopology:true,
    useNewUrlParser: true,
  
 });
const database = mongoose.connection;

const routes = require('./routes/userroutes');

const teamroutes = require('./routes/teamroutes');

const coachprofileroutes = require('./routes/coachprofileroute');

const playerprofileroutes = require('./routes/playerprofileroute');

const activityroutes = require('./routes/activityroutes');


database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at 3000`)
})

app.use('/user', routes);

app.use('/team',teamroutes);
app.use('/coachprofile',coachprofileroutes);
app.use('/playerprofile',playerprofileroutes);
app.use('/activity',activityroutes);
