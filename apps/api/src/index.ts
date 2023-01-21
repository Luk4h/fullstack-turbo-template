import 'dotenv/config';
import 'module-alias/register';
import validateEnv from '@/utils/validateEnv';
import App from './app';

validateEnv();

const app = new App([], Number(process.env.PORT));

app.listen();
