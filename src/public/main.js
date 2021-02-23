//this code is just a start up
//this code might not be used in further updates

MainHeaderContent=["D","e","l","i","た","ち"];

function FillsHeader(i){
    document.getElementById("MainHeader").innerText += MainHeaderContent[i];
    console.log("FillsHeader Finalized");
}

function LetsGo(){
  i=0;
  for(let i=0;i<6;i++){
    setTimeout(function(){
      FillsHeader(i)
    },i * 1000);
  }

  console.log("LetsGo Finalized");
}
