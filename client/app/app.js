let data = document.querySelector(".getData")
let arr = []

data.addEventListener("click", async () => {
    arr=[]
    let url = 'https://fe.it-academy.by/Examples/words_tree/root.txt'
    await getData(url)
    
})

async function getData(url) {
    let x
    try {
        let response = await fetch(url)
        let data = await response.text()
        x = data
        let jsonData = JSON.parse(data)
        for (let i = 0; i < jsonData.length; i++) {
            getData(`https://fe.it-academy.by/Examples/words_tree/${jsonData[i]} `)
        }
    } catch (error) {
        if (typeof x == "string") arr.push(x)
    }
    
    let result = document.querySelector('.result')
    result.textContent = arr.join(` `)
}