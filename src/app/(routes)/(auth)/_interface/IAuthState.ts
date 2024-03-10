import IError from './IError';
import ISuccessData from './ISuccessData';

export default interface IAuthState {
	loading: boolean;
	data: ISuccessData | null;
	error: IError | null | any;
	status: number | null;
}
