interface Product {
  id: number;
  name: string;
}

class ProductService {
  // #httpAdapter

  getProduct(id: number) {
    console.log('Producto: ', { id, name: 'OLED Tv' });
  }

  saveProduct(product: Product) {
    // Realiza una petición para salvar en base de datos
    console.log('Guardando en base de datos', product);
  }
}

class Mailer {
  #masterEmail = 'example@';

  sendEmails(emailList: string[], template: string) {
    console.log('Enviando correo a los clientes', template);
  }

  // notifyClients() {
  //   console.log('Enviando correo a los clientes');
  // }
}

// Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
// Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
class ProductBloc {
  private readonly productService: ProductService;
  private readonly mailer: Mailer;

  constructor() {
    this.productService = new ProductService();
    this.mailer = new Mailer();
  }

  loadProduct(id: number) {
    this.productService.getProduct(id);
  }

  saveProduct(product: Product) {
    this.productService.saveProduct(product);
  }

  notifyClients() {
    this.mailer.sendEmails(['example@'], 'Nuevo producto en stock');
  }
}

class CartBloc {
  onAddToCart(productId: number) {
    // Agregar al carrito de compras
    console.log('Agregando al carrito ', productId);
  }
}

const productBloc = new ProductBloc();
const cartBloc = new CartBloc();

productBloc.loadProduct(10);
productBloc.saveProduct({ id: 10, name: 'OLED TV' });
productBloc.notifyClients();
cartBloc.onAddToCart(10);
