var form=document.getElementById('addForm');
form.addEventListener('submit',saveLocal);
 
function saveLocal(e)
{
    e.preventDefault();
    // var name=;
    // var email=document.getElementById('email').value;
    let myObj={
        name:document.getElementById('amount').value,
        email:document.getElementById('description').value,
        phone:document.getElementById('category').value
    };
    var ul=document.getElementById('items');
    var li=document.createElement('li');
    li.className="item";
    var myJSON=JSON.stringify(myObj);
    localStorage.setItem(myObj.email,myJSON);
    var text=localStorage.getItem(myObj.email);
    var obj=JSON.parse(text);
    //console.log(obj.name);
    var btn=document.createElement('button');
    var editBtn=document.createElement('button');
    editBtn.className="btn btn-dark btn-sm float-right edit";
    btn.className="btn btn-danger btn-sm float-right delete";
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(document.createTextNode(obj.name+" "+obj.email+" "+obj.phone));
    btn.appendChild(document.createTextNode('Delete'));
    
    li.appendChild(btn);
    li.appendChild(editBtn);
    ul.appendChild(li);
    btn.addEventListener('click',removeIt);
    editBtn.addEventListener('click',editIt);
    function editIt(e)
    {
        e.preventDefault();
        var nameEdit=document.getElementById('amount');
        var emailEdit=document.getElementById('description');
        var phoneEdit=document.getElementById('category');
        nameEdit.value=obj.name;
        emailEdit.value=obj.email;
        phoneEdit.value=obj.phone;
        var par=editBtn.parentElement;
        par.childNodes[0].remove();
        par.childNodes[0].remove();
        par.childNodes[0].remove();
        localStorage.removeItem(obj.email);
        

    }
    function removeIt(e)
    {
    e.preventDefault();
     var par=btn.parentElement;
     localStorage.removeItem(obj.email);

     par.childNodes[0].remove();
     par.childNodes[0].remove();
     par.childNodes[0].remove();
     
     
    }
    

    
    
    console.log(document.getElementsByTagName('li'));
}

