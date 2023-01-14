let xhr = new XMLHttpRequest()

xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")

xhr.onload = function () {
    
    if (xhr.status >= 200 && xhr.status < 300) {
        let data = JSON.parse(this.response)
        let str = data.filter((u) => {
            return u.currencies[0].code==="USD";
        });
        console.log(str)
        
    }
}
xhr.send()