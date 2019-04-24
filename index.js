require('dotenv').config()
const app = require("./api/app");

const port = process.env.PORT || 2000;

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
