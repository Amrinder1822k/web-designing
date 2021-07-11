$(document).ready(function() {
    var credential = localStorage.getItem('credentialCheck');
    if (credential == 'false' || credential == null){
        location.href="login.html";
    }
    logout();
    getAllItems();
});

function logout(){
    $("#logout").click(function(){
        localStorage.setItem('credentialCheck', 'false');
        location.href="index.html";
    });
}

function getAllItems(){
    var url = "http://localhost:5555/getAllItems/";
    
    $.ajax({url: url, success: function(data){
        var result = data["itemsInfoJSON"];
        $("#items").empty();
        $("#showAllItemsInUpdateItem").empty();
        $("#showAllItemsInDeleteItem").empty();
        for (var i=0; i < result.length; i++){
            if (data["result"] !== null){
                $("#items").append(
                    '<div class="col-md-3">' +
                        '<div class="card" style="min-height: 40rem;">' +
                            '<div style="height:30rem">' +
                                '<img src="http://localhost:5555/'+ result[i]["imageName"] +'" class="card-img-top img-fluid" style="height:100%" alt="...">'+
                            '</div>' +
                            '<div class="card-body">' +
                                '<h5 class="card-title">'+ result[i]["itemName"] +'</h5>' +
                              '<a href="'+ result[i]["walmartUrl"] +'" target="_blank"> <button class="clr"> Go to Walmart </button> </a>'+
                            '</div>'+
                        '</div>' +
                    '</div>');
                
                $("#showAllItemsInUpdateItem").append(
                    '<tr>' +
                        '<th scope="row">' +  parseInt(i + 1) + '</th>' +
                            '<td>' + result[i]["itemName"]  +'</td>' +
                            '<td class="text-wrap" style="width: 15px;"><a href="' + result[i]["walmartUrl"] + '" target="_blank">' + result[i]["walmartUrl"]  +'</a></td>' +
                            '<td><div style="width:15em;"><img src="http://localhost:5555/' + result[i]["imageName"] + '" style="width:100%;" class="img-responsive"></div></td>' +
                            '<td><button id="' + result[i]["id"]  +'" type="button" class="btn btn-primary" onClick="showTableBasedOnId(\''+ result[i]["id"] +'\')">Update Item</button></td>' +
                    '</tr>');
                
                $("#showAllItemsInDeleteItem").append(
                    '<tr>' +
                        '<th scope="row">' +  parseInt(i + 1) + '</th>' +
                            '<td>' + result[i]["itemName"]  +'</td>' +
                            '<td class="text-wrap" style="width: 15px;"><a href="' + result[i]["walmartUrl"] + '" target="_blank">' + result[i]["walmartUrl"]  +'</a></td>' +
                            '<td><div style="width:15em;"><img src="http://localhost:5555/' + result[i]["imageName"] + '" style="width:100%;" class="img-responsive"></div></td>' +
                            '<td><button id="' + result[i]["id"]  +'" type="button" class="btn btn-primary" onClick="deleteItem(\''+ result[i]["id"] +'\')">Delete Item</button></td>' +
                    '</tr>');
            }
          }      
      }});
}