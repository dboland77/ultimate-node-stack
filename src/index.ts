import express from 'express';
import morgan from 'morgan';
import db from './modules/db';

const app = express();
app.use(morgan('dev'));

app.get('/', async (req, res) => {
  // debugger;
  const posts = await db.post.findMany({
    where: { publishedAt: { not: null } },
  });

  res.json(posts);
});

const port = Number(process.env.PORT || 8080);

// The host 0.0.0.0 is docker-specific localhost
app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});
