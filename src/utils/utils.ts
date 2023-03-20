// 随机字符串
export const getRandomString = (num: number) => {
	return Math.random().toString(36).slice(-num);
};

// 随机数字 6位
export const getRandomNumber = (num: number) => {
	return Math.floor(Math.random()*(999999-100000))+100000
}