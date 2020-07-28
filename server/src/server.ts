import express, { request, response } from 'express';
import routes  from './routes'
import path  from 'path'

const app = express();
app.use(express.json());
app.use(routes)
app.use('/uploads', express.static(path.resolve(__dirname, '..' , 'uploads')));


/*
    GET: Busca uma ou mais informações no back-end
    POST: Cria uma noca informação no back-end
    PUT: Atualiza informação existente no back-end
    DELETE: Deleta uma informação existente no back-end
*/

const users = [
        'diego',
        'cleiton',
        'robson',
        'daniel'
    ];



app.listen(3333);

