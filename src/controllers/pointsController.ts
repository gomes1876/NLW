import {Request, Response} from 'express'
import knex from '../database/connection'

class PointsController{

    async show(request: Request, response: Response){
        const { id } = request.params;
        
        const point = await knex('points').where('id', id).first(); 

        if(!point){
            return response.status(400).json({message: "point not found"});
        }
        
        return response.json(point)
    }


    async create(request: Request, response: Response) {
    const {
        name, 
        email, 
        whatsapp, 
        latitude,
        longitude,
        city,
        uf, 
        items
    } = request.body;

    //trx = transation
    const trx = await knex.transaction();
    
    const point = {
        image: 'image-fake',
        name, 
        email, 
        whatsapp, 
        latitude,
        longitude,
        city,
        uf,
    };

    // console.log(point);

    // console.log(JSON.parse(String(point)));

    const insertedIds = await trx('points').insert(point);

    const point_id = insertedIds[0];
    console.log(point_id);

    const pointItems = items.map( (item_id: number) => {
        return {
            item_id,
            point_id: point_id
        }
    });

    await trx('point_items').insert(pointItems);

    return response.json({ 
        id: point_id,    
        ...point,

    });

};
}

export default PointsController;