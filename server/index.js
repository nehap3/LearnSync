// Suggested code may be subject to a license. Learn more: ~LicenseLog:1438614570.
// docker run -d --name my-postgres   -e POSTGRES_PASSWORD=mysecurepassword   -e POSTGRES_DB=mydatabase   -p 5432:5432 postgres

// curl -X POST http://localhost:3001/auth/signup \
// -H "Content-Type: application/json" \
// -d '{"username":"JohnDoe", "email":"john@example.com", "password":"1234"}'

// curl -X POST http://localhost:3001/auth/login \
// -H "Content-Type: application/json" \
// -d '{"email":"john@example.com", "password":"1234"}'



const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const authRoutes = require("./routes/authRoutes");

const port = 3001;

// used by body parser to parse the user posted data in json format
app.use(bodyParser.json());
app.use("/auth",authRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
