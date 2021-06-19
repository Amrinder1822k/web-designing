$( document ).ready(function() {
    var credential = localStorage.getItem('credentialCheck');
    if (credential == 'false' || credential == null){
        location.href="login.html";
    }
    getGroceryName();
    getAllGroceries();
});

function getGroceryName(){
    $("#grocerySearch").keyup(function(){
        var groceryToSearch = $("#grocerySearch").val();
        if( groceryToSearch.length != 0){
            var url = "http://localhost:5555/getBookInfo/" + groceryToSearch;
            $("#groceries").empty();
            $.ajax({url: url, success: function(data){
                if (data["result"] !== null){
                    $("#groceries").append(
                        '<div class="col-md-3">' +
                            '<div class="card">' +
                                '<div style="width:15rem;">' +
                                    '<img src="http://localhost:5555/'+ data["result"]["imageName"] +'" class="card-img-top img-responsive" alt="...">'+
                                '</div>' +
                                '<div class="card-body">' +
                                    '<h5 class="card-title">'+ data["result"]["groceryName"] +'</h5>' +
                                    '<a href="'+ data["result"]["Url"] +'" target="_blank">Go to Wallmart</a>'+
                                '</div>'+
                            '</div>' +
                        '</div> ');
                }
            }});
        }else{
            getAllGroceries();
        }
        
    });
}