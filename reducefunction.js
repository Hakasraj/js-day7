
let xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v2/all");

xhr.onload = function () {

  if (xhr.status >= 200 && xhr.status < 300) {
    let str = JSON.parse(this.response);

    let data=str.filter((d)=>{
      return d.population;
    }).map((d)=> {
     return d.population;
    }).reduce((sum,d)=>{
      return sum+d;
    })
    console.log(`Total Population of Countries:${data}`);
  } else {

    console.log("Error");

  }
};

xhr.send();