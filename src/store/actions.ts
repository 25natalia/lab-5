import getProduct from '../services/getProducts';
import { GetFavoritesAction, GetProductsAction, ProductsActions, FavoritesActions } from '../types/store';
import { Observer, AppState, Actions } from '../types/store';

// tipo promesa, tipo get productsaction
// payload dataproducts que es lo que le voy a dar para que se rellene
export const GetProduct = async (): Promise<GetProductsAction> => {
	const dataProduct = await getProduct();
	console.log(dataProduct);
	return {
		action: ProductsActions.get,
		payload: dataProduct,
	};
};

export const GetShoppingCartItems = (payload: any) => {
	return {
		action: 'GetProductsFavorite',
		payload: payload,
	};
};

export const SaveShoppingCartItem = (payload: any) => {
	return {
		action: FavoritesActions.getfavorites,
		payload,
	};
};
