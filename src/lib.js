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
