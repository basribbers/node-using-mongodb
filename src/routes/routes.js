import  { addnewProduct } from '../controllers/controllers';
import { getProducts } from '../controllers/controllers';
import { getProductWithID } from  '../controllers/controllers';

const routes = (app) => {
app.route('/products')
// Post endpoint
.post(addnewProduct)
.get(getProducts);

app.route('/products/:ProductID')
.get(getProductWithID);

}
export default routes;