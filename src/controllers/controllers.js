import mongoose from 'mongoose';
import schema from 'models';


let Product = mongoose.model('Products',schema);


export const addnewProduct = (req, res) => { let new_product = new Product(req.body);

    new_product.save(function(err, Product) {
        if (err)
          res.send(err);
        res.json(product);
      });



}





