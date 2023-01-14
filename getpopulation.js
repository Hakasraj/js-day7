let xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v2/all");

xhr.onload = function () {

  if (xhr.status >= 200 && xhr.status < 300) {
    let str = JSON.parse(this.response);
  let data=str.filter(countries =>countries.population <=200000 ).map(countries=>countries.name)    
    console.log(data)

  } else {

    console.log("Error");

  }
};

xhr.send();