import {hymnData} from "../../../HymnData"

export default function handler({query:{id}},res){
    
    const filtered = hymnData.filter(hymn => hymn.id ===id
        )
    if (filtered.length >0){
        res.status(200).json(filtered[0])
    }else{
            res.status(404).json({message:`Hymn ${id} is not found`})

        }
    }
