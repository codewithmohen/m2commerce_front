import { SortDirection } from './ISortDirection';

export interface SortColumn {
	readonly columnKey: string;
	readonly direction: SortDirection;
}
