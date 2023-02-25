import '../model/connection.js';
import CategorySchemaModel from '../model/categorySchemaModel.js';
import url from "url";
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.',import.meta.url)); 

export const save = async(req,res,next)=>{
    let catDetails=req.body;
    // var catName = req.body.catName
    var  caticon = req.files.caticon;
    // console.log(caticon)
    let catIconName = Date.now()+"-"+caticon.name;
    let uploadPath = path.join(__dirname,"../../myapp/public/assets/uploads/catIcons",catIconName);
    caticon.mv(uploadPath);
    let catList = await CategorySchemaModel.find();
    let l = catList.length;
    let _id=l==0?1:catList[l-1]._id+1;
     catDetails={...catDetails,"_id":_id,"caticonnm":catIconName};
    let category=await CategorySchemaModel.create(catDetails);
    if(category)
    {
        return res.status(201).json({"msg":"Category added Successfully"})
    }
    else 
    {
        return res.status(500).json({"result":"Server Error"})
    }
}

export const fetch=async(req,res)=>{
    let catObj = url.parse(req.url,true).query;
    let catList = await CategorySchemaModel.find(catObj);
    let l = catList.length;
    if(l!=0)
    {
        return res.status(201).json(catList);
    }
    else
    {
        return res.status(501).json({"result":"server error"});
    }
}

 export const deleteCategory = async(req,res)=>{
    let id = req.params.id;
    let cat = await CategorySchemaModel.find({_id:id});
    if(cat.length!=0)
    {
        let result= await CategorySchemaModel.deleteMany({_id:id})
        if(result)
        {
          return res.status(201).json({"msg":"success"});
        }
    else 
        {
            return res.status(201).json({"error":"server Error"});
        }
    }
    else
    {
        return res.status(201).json({"error":"Resource Not Found"});
    }
}

export const updateCategory = async (req,res)=>{
     let catDetails = await CategorySchemaModel.findOne({_id:req.body._id});
     if(catDetails)
     {
        let id = req.body._id;
        delete req.body._id;
        let c = await CategorySchemaModel.updateOne({_id: id},{$set :req.body});
        if(c)
        return res.status(201).json({"msg":"success"});
        else
        return res.status(501).json({error:"Server Error"});
     }
     else 
     {
        return res.status(404).json({error:"Requested resource Not Found"});
     }
}