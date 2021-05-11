import merge from "lodash.merge";

export interface IProgressbarOptions {
	full?: string;
	empty?: string;
	seperator?: string;
	start?: string;
	end?: string;
}

export const generate = (
	bar_length: number,
	percentage: number,
	options?: IProgressbarOptions,
): string => {
	percentage = percentage > 100 ? 100 : percentage;
	const defaults = {
		full: "▓",
		empty: "░",
		seperator: "▓",
		start: "[",
		end: "]",
	};
	const { empty, end, full, seperator, start } = merge(defaults, options);
	const length = Math.round((percentage / 100) * bar_length);
	const full_length = length - 1 < 0 ? 0 : length - 1;
	const empty_length = bar_length - length;
	const full_str = full.repeat(full_length);
	const empty_str = empty.repeat(empty_length);
	return start + full_str + seperator + empty_str + end;
};
