async function getProduct() {
	try {
		const data = await fetch('https://fakestoreapi.com/products').then((res) => res.json());
		console.log(data);
		return data;
	} catch (error) {
		console.error(error);
	}
}
export default getProduct;
