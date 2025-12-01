// http://localhost:3000/api/keyserveice?slug=ppcAgency
import * as fs from 'node:fs';

export default function handler (req,res){
    fs.readFile(`data/${req.query.slug}/keyServeice.json`,'utf-8',(err,data)=>{
        if(err){
            res.status(500).json({error: "some error occured"})
        }
      res.status(200).json(JSON.parse(data))
    })
}