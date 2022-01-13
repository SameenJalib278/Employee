submit = document.getElementById('sbmit');
submit.addEventListener("click",getAndUpdate)
update(); 

function getAndUpdate(){
    alert("alerting the list");
    console.log("updating list");
    tit=document.getElementById('profile').value;
    first=document.getElementById('first').value;
    

    if(localStorage.getItem('itemsJson')==null)
{
     itemJsonArray =[];
     itemJsonArray.push([tit,first]);
     localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
}
     else{
         itemJsonArraystr = localStorage.getItem('itemsJson');
         itemJsonArray = JSON.parse(itemJsonArraystr);
         itemJsonArray.push([tit,first]);
         localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
     }
     update();
    }  
    //  populate the table
    function update(){
        if(localStorage.getItem('itemsJson')==null)
        {
             itemJsonArray =[];
             
             localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
        }
        else{
            itemJsonArraystr = localStorage.getItem('itemsJson');
            itemJsonArray = JSON.parse(itemJsonArraystr);
        }
    

    let tbody= document.getElementById('tbody');
    str=[];

    itemJsonArray.forEach((element, index) => {
       str += ` 
       <tr>
            <th scope="row">${index+1}</th>
            <td >${element[0]}</td>
            <td >${element[1]}</td>
            <td >${element[2]}</td>
            <td >${element[3]}</td>
            <td >${element[4]}</td>
            <td >${element[5]}</td>
            <td >${element[6]}</td>
            <td >${element[7]}</td>
           
          </tr>`;

    });
    tbody.innerHTML= str;
    // alert(str);
    }

  



function deleted(itemIndex){
console.log("deleted");
itemJsonArraystr = localStorage.getItem('itemsJson');
itemJsonArray = JSON.parse(itemJsonArraystr);

itemJsonArray.splice(itemIndex,1);
localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
update();
}
function cleared(){
    if(confirm("Do you really want to clear")){
    console.log("clearing the list");
    localStorage.clear();
    update();
}
}




