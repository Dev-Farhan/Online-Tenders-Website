import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import fileUpload from 'express-fileupload';

const app = express();

//to resolve cross origin problem
app.use(cors());

//to extract file content
app.use(fileUpload());

//to extract body data from request (POST , PUT , DELETE , PATCH)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//import api routers
import userRouter from "./routes/userRouter.js"
import categoryRouter from "./routes/categoryRouter.js"
// import subCategoryRouter from "./routes/subCategoryRouter.js"

//route level middleware to load api router
app.use("/user",userRouter);
app.use("/category",categoryRouter);
// app.use("/subcategory",subCategoryRouter);

app.listen(3001);
console.log("Server Running On POrt 3001");