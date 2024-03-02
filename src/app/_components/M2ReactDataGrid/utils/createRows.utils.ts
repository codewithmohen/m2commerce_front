import { faker } from '@faker-js/faker';
function createRow(index: number) {
	return {
		id: index,
		title: faker.commerce.productName(),
		variant: faker.commerce.product(),
		img: faker.image.nature(),
		retailPrice: faker.commerce.price(),
		empPrice: faker.commerce.price(),
		size: faker.random.word(),
		stock: faker.datatype.number(),
		sku: faker.datatype.uuid(),
		vat: Math.floor(Math.random() * 10),
	};
}
export const createRows = (count: number) => {
	let arr = new Array(count);
	return [...arr[count].keys()].map((i: any) => createRow(i));
};
