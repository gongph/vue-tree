/**
 * ajax request
 */
module.exports = (url, param) => {
	var httpRequest = new XMLHttpRequest();
	return new Promise((resolve, reject) => {
		httpRequest.onreadystatechange = () => {
			if(httpRequest.readyState === 4) {
				if(httpRequest.status === 200) {
					resolve(JSON.parse(httpRequest.responseText));
				} else {
					reject(new Error(httpRequest.responseText));
				}
			}
		}

		httpRequest.open('POST', url, true);
		httpRequest.setRequestHeader('Accept', 'application/json');
		httpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");  
		httpRequest.send("pid=" + param);
	});
}