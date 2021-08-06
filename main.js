nameofthestudentarray=[];
function submit(){
    var displaystudentarray=[];
    for (var j=1; j<=4;j++){
    var nameofthestudent=document.getElementById("name_of_the_student_"+j).value;

console.log (nameofthestudent);
nameofthestudentarray.push(nameofthestudent);

}
console.log (nameofthestudentarray);

var lengthofnameofstudentarray=nameofthestudentarray.length;
console.log (lengthofnameofstudentarray);

for (var k=0; k<lengthofnameofstudentarray;k++){
    displaystudentarray.push("<h4>NAME-"+nameofthestudentarray[k]+"</h4>");
    console.log (displaystudentarray);

}
console.log (displaystudentarray);
document.getElementById("display_name_with_commas").innerHTML=displaystudentarray;
var removecommas=displaystudentarray.join(" ");
console.log (removecommas);

document.getElementById("display_name_without_commas").innerHTML=removecommas;
document.getElementById("submit_button").style.display="none";
document.getElementById(sort_button).style.display="inline-block";
}
function sorting(){
    nameofthestudentarray.sort();
    console.log (nameofthestudentarray);

    var displaystudentarraysorting=[];

    var lengthofnameofstudentarray=nameofthestudentarray.length;
console.log (lengthofnameofstudentarray);

for (var k=0; k<lengthofnameofstudentarray;k++){
    displaystudentarraysorting.push("<h4>NAME-"+nameofthestudentarray[k]+"</h4>");
    console.log (displaystudentarraysorting);

}
var removecommas=displaystudentarraysorting.join(" ");
console.log (removecommas);

document.getElementById("display_name_without_commas").innerHTML=removecommas;
}
function update_button(){
    document.getElementById("display_name_without_commas").innerHTML="<h1>"+nameofthestudentarray+"</h1>";
}