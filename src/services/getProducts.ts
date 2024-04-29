async function getProduct() {
	try {
		const data = await fetch('https://fakestoreapi.com/products').then((res) => res.json());
		console.log(data.results);
		return data.results;
	} catch (error) {
		console.error(error);
	}
}
export default getProduct;
