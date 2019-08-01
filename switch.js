function months() {
    let Month=parseInt(document.getElementById('month').value);
   switch (Month) {
       case 1:
       case 3:
       case 5:
       case 7:
       case 8:
       case 10:
       case 12:
           alert('Tháng '+ Month +' có 31 ngày');

           break;
       case 2:
           alert('Tháng '+ Month +' có 28 hoac 29 ngày');
           break;
       default:
           alert('Tháng '+ Month +' có 30 ngày');
           break;
   }
}