

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v2/all");

xhr.onload = function () {

  if (xhr.status >= 200 && xhr.status < 300) {
    let str = JSON.parse(this.response);
    let ans=str.filter(asia =>asia.region=="Asia").map(asia =>asia.name)
    console.log(ans)
    
  } else {

    console.log("Error");

  }
};

xhr.send();