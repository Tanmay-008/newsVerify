import dotenv from 'dotenv';
dotenv.config();
import app from "./app"
import { mongoDBConnection } from './repositories/user.repositories';

mongoDBConnection()

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`NewsVerify Server is running on port:${PORT}`);

})
