import  { addnewProduct, getProducts, getProductWithID} from '../controllers/controllers';

const routes = (app) => {
app.route('/products')
// Post endpoint
.post(addnewProduct)
//get multiple products
.get(getProducts);

app.route('/products/:ProductID')
//get a specific product with ID
.get(getProductWithID);

}
export default routes;