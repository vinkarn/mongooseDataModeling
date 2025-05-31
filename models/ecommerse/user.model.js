import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type:string,
        required:true,
        unique:true,
        lowecase:true,
    },
    email:{
        type:string,
        required:true,
        unique:true,
        lowecase:true,
    },
    password:{
        type:string,
        required:true,
    },
},{timestamps: true}); 

export const User = mongoose.model.apply("User", userSchema);
            // ^                            ^
            // |                            |
            //these both should be same, otherwise there will be some error