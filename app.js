var order = prompt("what do you want tea or coffee?");


while(order !== "tea" && order !== "coffee")
{
    order = prompt("what do you want tea or coffee?");
}

var itemOrder = '';

if(order == "tea")
{
    itemOrder = '<img src="images/tea.jpg" />';
}
else if(order == "coffee")
{
    itemOrder = '<img src="images/coffee.jpg" />';
}

var numOfCups = prompt("what is the number of cups?");

var result = '';
for(var i= 0; i<numOfCups; i++)
{
    result = result + itemOrder;
}

document.write(result);
