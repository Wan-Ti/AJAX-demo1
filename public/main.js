let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", `/page${n + 1}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response);
            array.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n += 1
        }
    };
    request.send();
};
getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/5.json");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(typeof request.response);
            console.log(request.response);
            const bool = JSON.parse(request.response);
            console.log(typeof bool);
            console.log(bool);
        }
    };
    request.send();
}
getXML.onclick = () => {
    const request = new XMLHttpRequest;
    request.open("GET", "/4.xml");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName("warning")[0].textContent;
            console.log(text.trim());
        }
    };
    request.send();
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/3.html");
    request.onload = () => {
        const div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
    };
    request.onerror = () => { };
    request.send();
};
getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/2.js")
    request.onload = () => {
        const script = document.createElement("script");
        script.innerHTML = request.response;
        document.body.appendChild(script);
    };
    request.onerror = () => { }
    request.send();
};

getCSS.onclick = () => {
    //创建HttpRequest对象
    const request = new XMLHttpRequest();
    //调用对象的open方法
    request.open("GET", "/style.css");
    //监听对象的onload或者onerror事件
    request.onreadystatechange = () => {
        console.log(request.readyState);
        //下载完成，但不知道是成功2XX还是失败4XX 5XX
        if (request.readyState === 4) {//这一行代码不太理解
            if (request.status >= 200 && request.status < 300) {
                //创建一个style标签
                const style = document.createElement("style");
                //填写style内容
                style.innerHTML = request.response;
                //这个样式给谁呢？给头部
                document.head.appendChild(style);
            } else {
                alert("加载 CSS 失败")
            }
        }
    };
    //调用对象的send方法
    request.send();//readyState = 2
};
