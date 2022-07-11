function makeRequest (method, url, data?, extraHeaders?) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, `https://ya-praktikum.tech/api/v2${url}`);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

        xhr.withCredentials = true;
        // credentials: 'include', // Нужно подставлять куки
        //     mode: 'cors', // Работаем с CORS
        //     headers: {
        //     'content-type': 'application/json', // Данные отправляем в формате JSON
        // }

        xhr.addEventListener('load', () => {
            let { response, status } = xhr;
            let res = null
            if(response) {
                res = JSON.parse(response);
            }
            if(status >= 200 && status < 400){
                resolve({ response: res, status });
            } else{
                reject({ response: res , status });
            }
        });
        xhr.send(JSON.stringify(data));
    });
}

function xhr(method, url, data) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

        xhr.addEventListener('load', () => {
            let { response, status } = xhr;
            let res = JSON.parse(response);
            if(status >= 200 && status < 400){
                resolve({ response: res, status });
            } else{
                reject({ response: res , status });
            }
        });

        if(data){
            xhr.send(JSON.stringify(data));

        } else {
            xhr.send();
        }

    });

}

export { makeRequest, xhr };