import  { addnewProduct } from '../controllers/controllers';

const routes = (app) => {
app.routes('/products')

.post(addnewProduct);

}
export default routes;