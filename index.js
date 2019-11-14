// the inputs will be cleared after page navigation/refresh
//to prevent that everything will be stored in cookies
//and then calculated at the end on the results page
var ROI = {
    time: 0,
    dollars: 0,
    cdr: 0,
    clients: 0
}



//Collecting Time
function time(){
    var hours = [$('#timeQ1').val(), $('#timeQ2').val(), $('#timeQ3').val(), $('#timeQ4').val()];
    //sum values
    ROI.time = hours.reduce((a,b) => parseInt(a)+parseInt(b),0);
    sessionStorage.setItem("inputs", JSON.stringify(ROI));
  
}
//Collecting Money
function money(){
    var dollars = [$('#moneyQ1').val(), $('#moneyQ2').val(), $('#moneyQ3').val()];
    ROI.money = dollars.reduce((a,b) => parseInt(a)+parseInt(b),0);
    sessionStorage.setItem("inputs", JSON.stringify(ROI));
}

// CDR
