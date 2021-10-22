const express = require('express');
const initRoutes = require('./routes');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors())

app.use(express.json());

app.use((req, res, next) => {
  console.log('req method=====>', req.method);
  console.log('req method=====>', req.path);
  console.log('req body=====>', req.body);
  next();
})

initRoutes(app);
app.use('*', (req, res) => {
  res.status(404).send({ error: 'Not Found!' });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
