import 'dotenv/config';
import express from 'express';
import { routes } from './routes';
import db from '@/models';
async function bootstrapApp() {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  const PORT = process.env.APP_PORT || 3000;
  db.sequelize
    .sync()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    })
    .catch((error) => {
      console.error('Unable to connect to the database:', error);
    });
}

export default bootstrapApp;
