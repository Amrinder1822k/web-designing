$( document ).ready(function() {
    var credential = localStorage.getItem('credentialCheck');
    if (credential == 'false' || credential == null){
        location.href="login.html";
    }
    getAllItems();
    updateItem();
});

function showTableBasedOnId(id){
    $("#updateItemTable").hide();
    $("#updateItemForm").show();
    var url = "http://localhost:5555/getItemInfoBasedOnId/" + id;
    $("#items").empty();
    $.ajax({url: url, success: function(data){
        var result = data["result"];
        if (result !== null){
            $("#updateItemName").val(result['itemName']);
            $("#updateWalmartUrl").val(result['walmartUrl']);
            $("#updateItemFormId").val(result['id']);
        }
    }});
}

function updateItem(){
    $("#uploadItemById").click(function(){
        var itemName = $("#updateItemName").val();
        var walmartUrl = $("#updateWalmartUrl").val();
        var itemId = $("#updateItemFormId").val();
        if(itemName !== '' &&  walmartUrl !== ''){
            var url = "http://localhost:5555/updateItem/" + itemId;
            var data = {"itemName": itemName, "walmartUrl": walmartUrl};
            $.post({url: url, data: data, success: function(data){
                if(data.result == true){
                    alert("Item Updated!");
                    location.href="updateGrocery.html";
                }else{
                    alert("Item Updation Failed!");
                }
            }});
        }else{
            alert("ItemName and WalmartUrl are mandatory fields!");
        }
    });
}