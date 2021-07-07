function onFormSubmit(){
    var formData=readFormdata();
    insertNewRow(formData);
}

function readFormdata(){
    var formdata={};
    formdata["firstname"]=document.getElementById("firstname").value
    formdata["lastname"]=document.getElementById("lastname").value
    formdata["address"]=document.getElementById("address").value
    formdata["pincode"]=document.getElementById("pincode").value
    formdata["state"]=document.getElementById("state").value
    formdata["country"]=document.getElementById("country").value
    
    return formdata
}

function insertNewRow(data){
    var table = document.getElementById("list").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    
    cell1 = newRow.insertCell(0)
    cell1.inneHTML = data.firstname
    cell2 = newRow.insertCell(1)
    cell2.inneHTML = data.lastname
    cell3 = newRow.insertCell(2)
    cell3.inneHTML = data.address
    cell4 = newRow.insertCell(3)
    cell4.inneHTML = data.pincode
    cell5 = newRow.insertCell(4)
    cell5.inneHTML = data.state
    cell6 = newRow.insertCell(5)
    cell6.inneHTML = data.country
}
