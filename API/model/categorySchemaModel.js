import mongoose from "mongoose";
import UniqueValidator from "mongoose-unique-validator";

const CategorySchema = mongoose.Schema({
    _id:Number,
    catnm:{
        type:String,
        required:[true,"Category Name is Required"],
        lowercase:true,
        unique:true,
        trim:true,
    },
    caticonnm:{
        type:String,
        required:[true,"Category icon is required"],
        trim:true,
    }
});

CategorySchema.plugin(UniqueValidator);

const CategorySchemaModel = mongoose.model('cat_collection',CategorySchema);

export default CategorySchemaModel;