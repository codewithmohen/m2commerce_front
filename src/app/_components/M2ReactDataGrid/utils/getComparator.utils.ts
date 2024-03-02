import { IRow } from '../interfaces/IRow';
type Comparator = (a: IRow, b: IRow) => number;
export const getComparator = (sortColumn: string): Comparator => {
	switch (sortColumn) {
		case 'variant':
		case 'title':
		case 'img':
		case 'size':
		case 'sku':
			return (a: any, b: any) => {
				return a[sortColumn].localeCompare(b[sortColumn]);
			};
		case 'id':
		case 'retailPrice':
		case 'empPrice':
		case 'stock':
		case 'vat':
			return (a: any, b: any) => {
				return a[sortColumn] - b[sortColumn];
			};
		default:
			throw new Error(`unsupported sortColumn: "${sortColumn}"`);
	}
};
