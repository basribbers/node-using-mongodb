import mongoose from 'mongoose';

let schema = mongoose.schema;

var Products = new schema({
    name     : String
  , description       : String
  , catogery    : String
  ,created_date : {type:date , default: Date.now}
});