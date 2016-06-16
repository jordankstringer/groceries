$(document).ready(function() {
  $("form#Veggies").submit(function(event) {
    event.preventDefault();
   var item1 = ($("#input1").val());
   var item2 = ($("#input2").val());
   var item3 = ($("#input3").val());

   var groceries = [item1, item2, item3].sort();
   var sorted = groceries.map(function(food) {
     return food.toUpperCase(); //['input1', 'input2', 'input3',]
   });

   // $("#input1").text(input1Input);
   // $("#input2").text(input2Input);
   // $("#input3").text(input3input);

   $("#input1").show(sorted[0]);
   $("#input2").show(sorted[0]);
   $("#input3").show(sorted[0]);
   $("#result").show();

 });
});
