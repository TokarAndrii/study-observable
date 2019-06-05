const app = require('express')();
const cors = require('cors');
app.use(cors());

const PORT = process.env.port || 3003;
app.listen(PORT, () => console.log(`node server started at port - ${PORT}`));