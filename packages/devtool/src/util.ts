export function flatten<T>(arr: T[][]): T[] {
	return [].concat.apply([], arr);
}