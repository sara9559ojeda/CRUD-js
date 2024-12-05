let data =[{id:1, name:"Ana"}, {id:2, name:"Ellie"}];
function read() {
    let list0="";
    if(data.length==0){
        document.getElementById("list1").innerHTML="No data";
    }else{
        data.forEach(element => {
            list0+=`<li>${element.id} ${element.name}</li>
            <button onclick="Delete(${element.id})">Delete</button>
            <button onclick="Edit(${element.id})">Edit</button>`

            document.getElementById("list1").innerHTML=list0;
        });
        
        
    }
    
}
read();
function Create() {
    let id = document.getElementById("id").value*1;
    let name = document.getElementById("name").value;
    data.push({id:id, name:name});
    read();
    document.getElementById("id").value=" ";
    document.getElementById("name").value=" ";
}
function Delete(id) {
    data=data.filter(item=>item.id!=id);
    read();
}
ES=false;
function Edit(id) {
    if(ES==false){
        let dataform={};
        let Ans=data.filter(item=>item.id==id);

        document.getElementById("id").value=Ans[0].id;
        document.getElementById("name").value=Ans[0].name;
        ES=true;
        document.getElementById("btns").innerHTML=`<button onclick="Update()">Update</button>`
    }else{
        let id = document.getElementById("id").value*1;
        let name = document.getElementById("name").value;
        data.filter(z=>z.id==document.getElementById("id").value).map(x=>{
            x.id=id
            x.name=name
        });
       
        read();
        ES=true;
        document.getElementById("btns").innerHTML=`<button onclick="Create()">save</button>`
        document.getElementById("id").value=" ";
        document.getElementById("name").value=" ";
        
        

}
}