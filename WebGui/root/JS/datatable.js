$(document).ready( function () {
    $('#datatable').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": "http://devin.mackwnox.ca/BOTW-Item-Database/backend/MongoDB-Collection.json"
    });
} );
