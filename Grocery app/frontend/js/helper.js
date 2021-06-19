$(document).ready(function() {
    var credential = localStorage.getItem('credentialCheck');
    if (credential == 'false' || credential == null){
        location.href="login.html";
    }
    logout();
    getAllGroceries();
});

function logout(){
    $("#logout").click(function(){
        localStorage.setItem('credentialCheck', 'false');
        location.href="index.html";
    });
}

function getAllGroceries(){
    var url = "http://localhost:5555/getAllGroceries/";
    
    $.ajax({url: url, success: function(data){
        var result = data["groceriesInfoJSON"];
        $("#groceries").empty();
        $("#showAllGroceriesInUpdaterocery").empty();
        $("#showAllGroceriesInDeletegrocery").empty();
        for (var i=0; i < result.length; i++){
            if (data["result"] !== null){
                $("#groceries").append(
                    '<div class="col-md-3">' +
                        '<div class="card" style="min-height: 30rem;">' +
                            '<div style="height:20rem">' +
                                '<img src="http://localhost:5555/'+ result[i]["imageName"] +'" class="card-img-top img-fluid" style="height:100%" alt="...">'+
                            '</div>' +
                            '<div class="card-body">' +
                                '<h5 class="card-title">'+ result[i]["groceryName"] +'</h5>' +
                                '<a href="'+ result[i]["Url"] +'" target="_blank">Go to Wallmart</a>'+
                            '</div>'+
                        '</div>' +
                    '</div>');
                
                $("#showAllGroceriesInUpdateGrocery").append(
                    '<tr>' +
                        '<th scope="row">' +  parseInt(i + 1) + '</th>' +
                            '<td>' + result[i]["groceryName"]  +'</td>' +
                            '<td class="text-wrap" style="width: 15px;"><a href="' + result[i]["Url"] + '" target="_blank">' + result[i]["Url"]  +'</a></td>' +
                            '<td><div style="width:15em;"><img src="http://localhost:5555/' + result[i]["imageName"] + '" style="width:100%;" class="img-responsive"></div></td>' +
                            '<td><button id="' + result[i]["id"]  +'" type="button" class="btn btn-primary" onClick="showTableBasedOnId(\''+ result[i]["id"] +'\')">Update Grocery</button></td>' +
                    '</tr>');
                
                $("#showAllGroceriesInDeleteGRocery").append(
                    '<tr>' +
                        '<th scope="row">' +  parseInt(i + 1) + '</th>' +
                            '<td>' + result[i]["GroceryName"]  +'</td>' +
                            '<td class="text-wrap" style="width: 15px;"><a href="' + result[i]["Url"] + '" target="_blank">' + result[i]["Url"]  +'</a></td>' +
                            '<td><div style="width:15em;"><img src="http://localhost:5555/' + result[i]["imageName"] + '" style="width:100%;" class="img-responsive"></div></td>' +
                            '<td><button id="' + result[i]["id"]  +'" type="button" class="btn btn-primary" onClick="deleteGrocery(\''+ result[i]["id"] +'\')">Delete Grocery</button></td>' +
                    '</tr>');
            }
          }      
      }});
}