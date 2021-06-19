$( document ).ready(function() {
    var credential = localStorage.getItem('credentialCheck');
    if (credential == 'false' || credential == null){
        location.href="login.html";
    }
    addGrocery();
});

function addGrocery(){
    $("#uploadgrocery").click(function(){
        var groceryName = $("#groceryName").val();
        var Url = $("#URL").val();
        console.log("groceryname",groceryName)
        console.log("Url",Url)
        if(groceryName !== '' &&  Url !== ''){
            var form_data = new FormData();
            form_data.append("groceryName", groceryName);
            form_data.append("Url",Url);
            var url = "http://localhost:5555/addGrocery/";
            $.post({url: url, data: form_data, contentType: false, processData: false, success: function(data){
                if(data.result == true){
                    alert("Grocery is added successfully!");
                    location.href="home.html";
                }else{
                    alert("There is some error while adding new Grocery.");
                }
            }});
        }else{
            alert("GroceryName and Url are mandatory fields!");
        }
        
    });
}
