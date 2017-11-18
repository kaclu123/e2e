//for(var i = 0; i<10; i++){
//    console.log(i);
//}




function printFullAge(years){
var ages = [];

for(var i = 0; i<years.length; i++){
    ages[i] = 2017 - years[i];
 }

for(i = 0; i<ages.length; i++){
    if(ages[i]>=18){
     console.log(ages[i]);   
    }
}
}
var years = [1992, 2000, 1990, 1950,1974];
printFullAge(years);

var object = {
    name: 'Hello'
}



