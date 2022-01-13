submit = document.getElementById('sbmit');
submit.addEventListener("click",getAndUpdate)
update(); 

function getAndUpdate(){
    alert("alerting the list");
    console.log("updating list");
    tit=document.getElementById('profile').value;
    first=document.getElementById('first').value;
    dob=document.getElementById('last').value;
    gender=document.getElementById('gender').value;
    address=document.getElementById('address').value;
    skills=document.getElementById('skills').value;
    gmail=document.getElementById('gmail').value;
    mobile=document.getElementById('mobile').value;

    if(localStorage.getItem('itemsJson')==null)
{
     itemJsonArray =[];
     itemJsonArray.push([tit,first,dob,gender,address,skills,gmail,mobile]);
     localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
}
     else{
         itemJsonArraystr = localStorage.getItem('itemsJson');
         itemJsonArray = JSON.parse(itemJsonArraystr);
         itemJsonArray.push([tit,first,dob,gender,address,skills,gmail,mobile]);
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
            <td>
            <a href="./edit.html" class="btn btn-primary btn-sm" onClick="edit1(${index})">Edit</a>
           <button onclick="deleted(${index})" class="btn btn-danger btn-sm" >Delete</button>

        </td>
          </tr>`;

    });
    tbody.innerHTML= str;
    // alert(str);
    }

    function edit1(index){
       alert(index)
        let edit1= document.getElementById('edit1');
        // edit= document.getElementById('edit');
        // itemJsonArraystr = localStorage.getItem('itemsJson[index]');
        // itemJsonArray = JSON.parse(itemJsonArraystr[index]);
        // alert(itemJsonArray);
        // tit=document.getElementById('profile1').value;
        // first=document.getElementById('first1').value;
        // third=document.getElementById('third').value;
        // fourth=document.getElementById('fourth').value;
        // fifth=document.getElementById('fifth').value;
        // sixth=document.getElementById('sixth').value;
        // seven=document.getElementById('seventh').value;
        // eigth=document.getElementById('eigth').value;
        if(localStorage.getItem('itemsJson')==null)
        {
             itemJsonArray =[];
             
             localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
        }
        else{
            itemJsonArraystr = localStorage.getItem('itemsJson');
            itemJsonArray = JSON.parse(itemJsonArraystr);
        }
    
       
        str=[];
    
        itemJsonArray.forEach((element) => {
           str += ` 
           <div class="py-2 row g-3">
            <div class="col">
              <input type="text" class="form-control"  aria-label="First name" id="profile1" name=${element[0]} >
            </div>
            <div class="col">
              <input type="text" class="form-control"  aria-label="Last name" id="first1" name="check">
            </div>
          </div>
          <div class="py-2 row g-3">
            <div class="col">
              <input type="text" class="form-control"  aria-label="First name" id="third">
            </div>
            <div class="col">
              <input type="text" class="form-control"  aria-label="Last name" id="fourth">
            </div>
          </div>

          <div class="py-2 row g-3">
            <div class="col">
              <input type="text" class="form-control"  aria-label="First name" id="fifth">
            </div>
            <div class="col">
              <input type="text" class="form-control"  aria-label="Last name" id="sixth">
            </div>
          </div>

          <div class="py-2 row g-3">
            <div class="col">
              <input type="text" class="form-control"  aria-label="First name" id="seventh">
            </div>
            <div class="col">
              <input type="text" class="form-control"  aria-label="Last name" id="eigth">
            </div>
          </div>
         
          <!-- <label for="title">Date Of Birth</label>
          <input type="text" class="item form-control" id="title" aria-describedby="item">
          <label for="title">Gender</label>
          <input type="text" class="item form-control" id="title" aria-describedby="item"> -->
          <!-- <label for="title">Skills</label>
          <input type="text" class="item form-control" id="title" aria-describedby="item">
          <label for="title">Email</label>
          <input type="text" class="item form-control" id="title" aria-describedby="item">
          <label for="title">Mobile</label>
          <input type="text" class="item form-control" id="title" aria-describedby="item"> -->
          <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
        </div>
        <!-- <div class="form-group">
          <label for="desc">description</label>
          <input type="desc" class="desc" id="desc" aria-describedby="item">
        </div> -->
        <!-- <div class="form-group">
            <label for="validationTextarea">First Name</label>
            <textarea class="form-control " id="description" placeholder="Required example textarea" required></textarea>
            <div class="invalid-feedback">
              Please enter a description here
            </div>
          </div> -->
        <!-- <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> -->
           `;
    
        });
        edit1.innerHTML= str;
        alert(str);
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


