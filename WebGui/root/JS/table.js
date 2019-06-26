// $(document).ready( function () {
//     $('#datatable').DataTable({
//         "processing": true,
//         "serverSide": true,
//         "ajax": "http://devin.mackwnox.ca:8082/data"
//     });
// } );



// Credit to: 
// http://jsfiddle.net/9hGym/602/

function searchTable()
{
    const fnd = $("#search").val().toLowerCase();

    $.each($("#content tr"), function()
    {
        if($(this).text().toLowerCase().indexOf(fnd) === -1)
        {
            $(this).hide();
        }
        else
        {
            $(this).show();
        }
    });
}

function clearTable()
{
    $("#search").val('');
    searchTable();
}