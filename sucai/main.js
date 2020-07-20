getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 400) {
                console.log(request.response)
                const object = JSON.parse(request.response)
                myName.textContent = object.age
            }
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get', '4.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }
        }
    }
    request.send()
}
getCss.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'style.css');
    request.onload = () => {
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
    };
    request.onerror = () => {
        console.log('失败了')
    };

    request.send();
}

getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get', '2.js');
    request.onload = () => {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    };
    request.onerror = () => { }
    request.send();
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '3.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4)
            if (request.status >= 200 && request.status < 300) {
                const Html = document.createElement('html')
                Html.innerHTML = request.response
                document.body.appendChild(Html)
            } else {
                alert('加载失败')
            }

    }
    request.send();
}

