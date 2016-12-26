import { Product } from './product';

export interface Category {
	id: number;
	title: string;
	image: string;
	products: Product[];
}
