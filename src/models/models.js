import mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const ProductSchema = new Schema({


    name     : String
  , description       : String
  , catogery    : String
  ,created_date : {type:date , default: Date.now}
});