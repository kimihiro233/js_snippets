/**
 * @description 判断当前页面是否在最外层（不在iframe中）
 * @return {Boolean}
 * */
export const isTop = function () {
	return self === top
}

/**
 * @description 判断当前页面是否在iframe中
 * @return {Boolean}
 * */
export const isIframe = function () {
	return self !== top
}

/**
 * @description 日期格式化
 * @param {Date} date 日期
 * @param {String} [fmt='yyyy-MM-dd'] 格式(默认'yyyy-MM-dd')
 *
 * @return {String} 格式化后的时间
 * */
export function dateFormatter (date, fmt = 'yyyy-MM-dd') {
	let o = {
		'M+': date.getMonth() + 1, // 月份
		'd+': date.getDate(), // 日
		'h+': date.getHours(), // 小时
		'm+': date.getMinutes(), // 分
		's+': date.getSeconds(), // 秒
		'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
		'S': date.getMilliseconds(), // 毫秒
	}
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
	for (let k in o) { if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
	return fmt
}
