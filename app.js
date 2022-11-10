const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (euro)=>{
    let dollar = euro*oneEuroIs.USD;
    return dollar;
}

const fromDollarToYen = (dollar)=>{
    let euro = dollar/oneEuroIs.USD;
    let yen = euro *oneEuroIs.JPY;
    return yen;

}

const fromYanToPound = (yan)=>{
    let euro = yan/oneEuroIs.JPY;
    let pound = euro*oneEuroIs.GBP
    return pound;
}
module.exports = { sum,fromEuroToDollar, fromDollarToYen,fromYanToPound };
