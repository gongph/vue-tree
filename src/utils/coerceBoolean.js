/**
 * String转换成Boolean类型，否则Vue会报类型错误：Expected Boolean, got String
 */
module.exports = (val) => (typeof val !== 'string' ? val :
	val === 'true' ? true :
	val === 'false' ? false :
	val === 'null' ? false :
	val === 'undefined' ? false : val);