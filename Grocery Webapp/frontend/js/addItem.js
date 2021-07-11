$( document ).ready(function() {
    var credential = localStorage.getItem('credentialCheck');
    if (credential == 'false' || credential == null){
        location.href="login.html";
    }
    addItem();
});

function addItem(){
    $("#uploadItem").click(function(){
        var itemName = $("#itemName").val();
        var walmartUrl = $("#walmartUrl").val();
        if(itemName !== '' &&  walmartUrl !== ''){
            data = {"itemName": itemName, "walmartUrl": walmartUrl}
            var url = "http://localhost:5555/addItem/";
            $.post({url: url, data: data, success: function(data){
                if(data.result == true){
                    alert("Item is added successfully!");
                    location.href="home.html";
                }else{
                    alert("There is some error while adding new item.");
                }
            }});
        }else{
            alert("ItemName and WalmartUrl are mandatory fields!");
        }
        
    });
}
