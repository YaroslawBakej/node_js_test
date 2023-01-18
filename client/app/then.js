

let data = document.querySelector(".getData")
let arr = []

data.addEventListener("click", () => {
    let url = 'https://fe.it-academy.by/Examples/words_tree/root.txt'
    arr = []
    fetch(url)
        .then(response => response.text())
        .then(responsedata => createRequestTurn(responsedata))
    setTimeout(() => {
        useRequestTurn(arr)
    }, 1000);
})

function createRequestTurn(responsedata) {
    let x
    try {
        x = responsedata
        let jsonData = JSON.parse(responsedata)
        for (let i = 0; i < jsonData.length; i++) {
            arr.push(`https://fe.it-academy.by/Examples/words_tree/${jsonData[i]} `)
            fetch(`https://fe.it-academy.by/Examples/words_tree/${jsonData[i]} `)
                .then(response => response.text())
                .then(responsedata => createRequestTurn(responsedata))
        }
    } catch (error) {
        console.log(arr);

    }
}

function useRequestTurn(arr) {
    // for (let i = 0; i < arr.length; i++) {
    //     fetch(arr[i])
    //         .then(response => response.text())
    //         .then(data => console.log(data))
    }

// }\





