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

	async connectedCallback() {
		const data = await getProduct();
		console.log(data);

		this.render(data);
	}

	render(data: any) {
		if (this.shadowRoot) this.shadowRoot.innerHTML = '';
		data.forEach((e: ApiType) => {
			const card = this.ownerDocument.createElement('app-card');
			card.setAttribute(Attribute.titlee, e.titlee);
			card.setAttribute(Attribute.price, e.price);
		this.shadowRoot?.appendChild(card)});
	}
}

customElements.define('app-dashboard', Dashboard);
