const database_url = "http://devin.mackwnox.ca:8082/data";

var BOTW_app = angular.module('BOTW_app', []);
BOTW_app.controller('BOTW_Controller', function($scope, $http)
{
    $scope.getItemList = function()
    {
        $http.get(database_url).then(function(res)
        {
            $scope.ItemList = res.data;
        });
    }
});

function refresh()
{
    location.reload();
}

function showEntry()
{
    $("#newEntry").attr('hidden', false);
}

function hideEntry()
{
    $("#newEntry").attr('hidden', true);
    $("#entryError").attr('hidden', true);
}

function submitEntry()
{
    var village = $("#select_village option:selected").text();
    var store = $("#select_store option:selected").text();
    var item = $("#input_item").val();
    var price = $("#input_price").val();

    const settings =
    {
        "async": true,
        "crossDomain": true,
        "url": "http://devin.mackwnox.ca:8082/insert",
        "method": "POST",
        "headers": {
            "Access-Control-Allow-Headers": '*',
            "Content-Type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache"
        },
        "data": {
            "village": village,
            "store": store,
            "item": item,
            "price": price
        }
    }


    if(!village || !store || !item || !price)
    {
        console.log("Village: " + village + "\nStore: " + store + "\nItem: " + item + "\nPrice: " + price);
        $("#entryError").attr('hidden', false).html("Error: Please fill out all forms");
    }
    else
    {
        $.ajax(settings).done(function(response)
        {
            if(response.success == false)
            {
                isError("Something went wrong");
            }
        });
        hideEntry();
        refresh();
    }
    
}