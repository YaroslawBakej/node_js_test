let data = document.querySelector(".getData")
let arr = []

data.addEventListener("click", () => {
    arr = []
    let url = 'https://fe.it-academy.by/Examples/words_tree/root.txt'
    getData(url)
})

function getData(url) {
    let x
    fetch(url)
        .then(response => {
            let data = response.text()
            return data
        })
        .then(data => {
            try {
                x = data
                let jsonData = JSON.parse(data)
                for (let i = 0; i < jsonData.length; i++) {
                    getData(`https://fe.it-academy.by/Examples/words_tree/${jsonData[i]} `)
                }
            } catch (error) {
                if (typeof x == "string") arr.push(x)
                let result = document.querySelector('.result')
                result.textContent = arr.join(` `)
            }
        })
}

