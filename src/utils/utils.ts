import { Tag } from "@/store/tags";


// 随机字符串
export const getRandomString = (num: number) => {
	return Math.random().toString(36).slice(-num);
};

// 随机数字 6位
export const getRandomNumber = (num: number) => {
	return Math.floor(Math.random()*(999999-100000))+100000
}

// 判断路由是否相等
export const identical: (obj1: Tag, obj2: Tag) => boolean = (obj1: Tag, obj2: Tag) => {
	delete obj1.close
	var o1 = obj1 instanceof Object
    var o2 = obj2 instanceof Object

	// 如果不是对象
    if (!o1 || !o2) {
		return o1 === o2
	}

	// 对象情况下先已双方的数量是否相同作比较
	if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
	let attr: keyof Tag
	// 剩下的开始进行循环对比 for in
	for(attr in obj1) {
		let a1 = obj1[attr] instanceof Object
		let a2 = obj2[attr] instanceof Object
		// 再次比较字段是否为对象 是否相同
		if (a1 && a2) {
		  return identical(obj1[attr], obj2[attr])
		} else if (obj1[attr] !== obj2[attr]) {
		  return false
		}
	  }
	  // 如果完全相同返回 true
	  return true
}