const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const dolar = 5.2
const euro = 6.2
const bitcoin = 139.053

const convertValues = () => {
    const inputReais = document.getElementById("input-real").value
    const realTextValue = document.getElementById("real-text-value")
    const currencyValueText = document.getElementById("currency-value-text")

    realTextValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if (select.value === "US$ Dólar americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)
    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)
    }

    if (select.value === "₿ Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC",
        }).format(inputReais / bitcoin)
    }

}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (select.value === "US$ Dólar americano") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/eua.png"
    }

    if (select.value === "₿ Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    convertValues()
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)

/*
        if (select.value === "Bitcoin") {
            currencyValueText.innerHTML = new Intl.NumberFormat("btc",
                { style: 'currency', currency: 'BTC' }
            ).format(inputReais / bitcoin)
        }

        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)

        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)

    }
    */

