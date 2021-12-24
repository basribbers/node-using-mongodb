import  { addnewProduct, getProducts, getProductWithID,updateProduct,deleteProduct} from '../controllers/controllers';

const routes = (app) => {
    app.route('/products')
// Post endpoint
.post(addnewProduct);
//get multiple products
//.get(getProducts);

app.route('/products/:ProductID')
//get a specific product with ID
.get(getProductWithID)
.put(updateProduct)
.delete(deleteProduct);

}
export default routes;