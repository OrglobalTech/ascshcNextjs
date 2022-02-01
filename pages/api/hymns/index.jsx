import {hymnData} from "../../../HymnData"

export default function handler(req,res){
    res.status(200).json(hymnData)
}