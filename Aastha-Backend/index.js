const express = require('express');
const DB = require('./Config/db');
const cors = require('cors'); // Import cors
const app = express();

app.use(express.json());
app.use(cors());

const router = require('./Router/user.router');
app.use("/user",router);

const adminRouter = require('./Router/admin.router');
app.use('/admin',adminRouter);

const PORT = 5000;
app.listen(PORT, async () => {
    await DB();
    console.log(`Server is running on http://localhost:${PORT}`);
});