document.getElementById('container').onchange = function(){
    let bill = Number(document.getElementById('billInput').value);
    let tip = document.getElementById('tipInput').value;
    let split = document.getElementById('splitInput').value;

    let tipValue = bill*(tip/100);
    let newBillEach = (bill+tipValue)/split;
    let tipEach = tipValue/split

    document.getElementById('tipAmount').innerHTML = '$' + tipEach.toFixed(2);
    document.getElementById('newBill').innerHTML = '$' + newBillEach.toFixed(2);

    document.getElementById('tipSpan').innerHTML = tip + '%';
    document.getElementById('splitSpan').innerHTML = split;
}
