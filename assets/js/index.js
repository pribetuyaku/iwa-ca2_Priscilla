


$("#add_user").submit(function(event){
    alert("Staff Inserted Successfully!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `https://3000-pribetuyaku-iwaca2prisc-ql5kpideae5.ws-eu45.gitpod.io/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Staff Updated Successfully!");
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `https://3000-pribetuyaku-iwaca2prisc-ql5kpideae5.ws-eu45.gitpod.io/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you want to delete this staff?")){
            $.ajax(request).done(function(response){
                alert("Staff Deleted Successfully!");
                location.reload();
            })
        }

    })
}