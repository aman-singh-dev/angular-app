const express = require('express');

//including db config file
const connectDB = require('./config/db')

//intialize express method
const app = express();

//connecting to DB
connectDB();

const PORT = process.env.PORT || 4550;
app.use(express.json({ extended: false }))


app.get('/', (req, res) => res.send(`Running on port ${PORT}`))
app.use('/api/user', require('./routes/api/user'))
app.use('/api/role', require('./routes/api/role'))

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));











// const memeberRoutes = require('./routes/member');
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(memeberRoutes);

// app.get('/', function(req, res) {
//     res.send('<h1>Welcome to Node js</h1><br><br> <script> function myFunction() { window.open("/member-add", "_self"); }</script > <button onClick =  "myFunction()" > Add Member</button > ');

// });