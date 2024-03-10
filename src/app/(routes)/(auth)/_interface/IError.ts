export default interface IError {
	status: string | null;
	name: string;
	message: string;
	details: any | null;
	stack: string | null;
}
