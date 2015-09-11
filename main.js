document.body.onload=function(){

  var now = new Date();
  var header = document.createElement('h1');

  if(now.getDay() == 5 ){
    // :)
    header.innerHTML = 'YES';
    document.body.appendChild(header);
  } else {
    // :(
    header.innerHTML = 'NO';
    document.body.appendChild(header);
  }

};
