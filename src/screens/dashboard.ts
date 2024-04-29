import getProduct from '../services/getProducts';
import Product, { Attribute } from '../components/product/product';
import '../components/index';
import { ApiType } from '../types/products';
import { AttributeCart } from '../components/ShoppingCartItem/ShoppingCartItem';
import { addObserver, appState, dispatch } from '../store/index';

export class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	// como es await es async
	async connectedCallback() {
		const action = await getProduct();
		dispatch(action);
	}

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = '';
		appState.products.forEach((e: ApiType) => {
			const card = this.ownerDocument.createElement('app-product') as Product;
			card.setAttribute(Attribute.titlee, e.title);
			card.setAttribute(Attribute.image, e.image);
			card.setAttribute(Attribute.price, e.price);
			card.setAttribute(Attribute.category, e.category);
			card.setAttribute(Attribute.description, e.description);
			card.setAttribute(Attribute.rating, e.rating.rate);
			this.shadowRoot?.appendChild(card);
		});

	}
}

customElements.define('app-dashboard', Dashboard);
