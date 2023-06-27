import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
  // debugger;
  res.json({ hello: 'world' });
});

const port = Number(process.env.PORT || 8080);

// The host 0.0.0.0 is docker-specific localhost
app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});
