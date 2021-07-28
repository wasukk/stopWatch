var minutes = 0;
var seconds = 0;
var miliSeconds = 0;

var interval ;
var minutesValue = document.getElementById('minutes');
var secondsValue = document.getElementById('seconds');
var miliSecondsValue= document.getElementById('miliSeconds');
var lapValue = document.getElementById('demo')

function timer(){
    miliSeconds++;
    miliSecondsValue.innerHTML = miliSeconds;
    if(miliSeconds >=100){
        seconds++;
        secondsValue.innerHTML = seconds;
        miliSeconds = 0;
    }
    else if(seconds >=60){
        minutes++;
        minutesValue.innerHTML = minutes;
        seconds = 0;
    }
}
function start(){
interval = setInterval(timer,10);
document.getElementById("start").disabled = true;
}
var lapCount = 0;
function lap(){
//  var lapValue1 = document.getElementById('demo');
//  lapValue1.innerHTML = "1: <i class='fab fa-font-awesome-flag'></i>" + " " + minutesValue.innerHTML+":"+ secondsValue.innerHTML +"."+miliSecondsValue.innerHTML;   
var table = document.getElementById("lapTable");
// var headRow = table.insertRow(0);
// var headCell = headRow.insertCell(0);
//     headCell.innerHTML = " <i class='fab fa-font-awesome-flag'></i> "+ ++lapCount+ ": ";
var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
        cell1.innerHTML = ++lapCount +  '-               '  +  minutesValue.innerHTML;
    var cell3 = row.insertCell(1);
        cell3.innerHTML = ": "+secondsValue.innerHTML ;
    var cell2 = row.insertCell(2);
        cell2.innerHTML = ". "+ miliSecondsValue.innerHTML;

}

function pause(){
    clearInterval(interval)
    document.getElementById("start").disabled = false;
}
function reset(){
    minutes = 0;
    seconds = 0;
    miliSeconds = 0;
    minutesValue.innerHTML = minutes;
    secondsValue.innerHTML = seconds;
    miliSecondsValue.innerHTML = miliSeconds;
    pause();
}
