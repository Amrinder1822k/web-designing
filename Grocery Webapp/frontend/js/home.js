$( document ).ready(function() {
    var credential = localStorage.getItem('credentialCheck');
    if (credential == 'false' || credential == null){
        location.href="login.html";
    }
    getItemName();
    getAllItems();
});

function getItemName(){
    $("#itemSearch").keyup(function(){
        var itemToSearch = $("#itemSearch").val();
        if( itemToSearch.length != 0){
            var url = "http://localhost:5555/getItemInfo/" + itemToSearch;
            $("#items").empty();
            $.ajax({url: url, success: function(data){
                if (data["result"] !== null){
                    $("#items").append(
                        '<div class="col-md-3">' +
                            '<div class="card">' +
                                '<div style="width:15rem;">' +
                                    '<img src="http://localhost:5555/'+ data["result"]["imageName"] +'" class="card-img-top img-responsive" alt="...">'+
                                '</div>' +
                                '<div class="card-body">' +
                                    '<h5 class="card-title">'+ data["result"]["itemName"] +'</h5>' +
                                    '<a href="'+ data["result"]["walmartUrl"] +'" target="_blank">Go to Walmart</a>'+
                                '</div>'+
                            '</div>' +
                        '</div> ');
                }
            }});
        }else{
            getAllItems();
        }
        
    });
}

