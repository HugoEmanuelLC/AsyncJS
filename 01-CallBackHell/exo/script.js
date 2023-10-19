let body = document.querySelector('body')

body.style.backgroundColor = 'blue'
setTimeout(() => {
    body.style.backgroundColor = 'yellow'
    setTimeout(() => {
        body.style.backgroundColor = 'red'
        setTimeout(() => {
            body.style.backgroundColor = 'cyan'
            setTimeout(() => {
                body.style.backgroundColor = 'violet'
                setTimeout(() => {
                    body.style.backgroundColor ='green'
                    setTimeout(() => {
                        body.style.backgroundColor = 'purple'
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);