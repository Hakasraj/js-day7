
let xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v2/all");

xhr.onload = function () {

  if (xhr.status >= 200 && xhr.status < 300) {
    let str = JSON.parse(this.response);
  let data = str.forEach(element => {
    console.log("Name: "+element.name)
  console.log("Capital : "+element.capital)
  console.log("Flage : "+element.flag)   
  });

  } else {

    console.log("Error");

  }
};

xhr.send();\