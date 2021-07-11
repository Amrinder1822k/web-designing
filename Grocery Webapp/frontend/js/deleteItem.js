$( document ).ready(function() {
    var credential = localStorage.getItem('credentialCheck');
    if (credential == 'false' || credential == null){
        location.href="login.html";
    }
    getAllItems();
});

function deleteItem(id){
    console.log("ID :>", id)
    var url = "http://localhost:5555/deleteItem/" + id;
    $.ajax({url: url, success: function(data){
        var result = data["result"];
        console.log("result :>", result)
        if(result == true){
            location.href="deleteGrocery.html";
        }else{
            alert("Deletion Unsuccessful!");
        }
    }});
}