const randomPositionGenerator = (arr) => {
	let randomIndex = Math.floor(arr.length * Math.random());
	return arr[randomIndex];
};
