import mongoose from 'mongoose';
import schema from 'models';


let Product = mongoose.model('Products',schema);


export const addnewProduct = (req, res) => { let newProduct = new Product(req.body);

    newProduct.save(function(err, Product) {
        if (err)
          res.send(err);
        res.json(product);
      });



}





