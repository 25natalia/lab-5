import getProduct from '../services/getProducts';
import { Attribute } from '../components/product/product';
import '../components/index';
import { ApiType } from '../types/products';
import { AttributeCart } from '../components/ShoppingCartItem/ShoppingCartItem';

class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	// como es await es async
	async connectedCallback() {
		const data = await getProduct();
		console.log(data);

		this.render(data);
	}

	render(data: any) {
		if (this.shadowRoot) this.shadowRoot.innerHTML = '';
		data.forEach((e: ApiType) => {
			const card = this.ownerDocument.createElement('app-product');
			card.setAttribute(Attribute.titlee, e.title);
			card.setAttribute(Attribute.image, e.image);
			card.setAttribute(Attribute.price, e.price);
			card.setAttribute(Attribute.category, e.category);
			card.setAttribute(Attribute.description, e.description);
			card.setAttribute(Attribute.rating, e.rating);
			this.shadowRoot?.appendChild(card);
		});
	}
}

customElements.define('app-dashboard', Dashboard);
