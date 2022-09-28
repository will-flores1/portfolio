export const getAge = () => {
	let date = new Date();
	let time = date.valueOf() - new Date(914290179349).valueOf();
	let age = time / (1000 * 60 * 60 * 24 * 365.25);
	let formatTime = age.toString().substring(0, 12);
	return formatTime;
};
