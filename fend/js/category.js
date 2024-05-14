$("#category").change(() => {
    $("#categoryTitle").text($(category).val())
    $('#categoryModal').modal('show');
});

$('.mcategory').click(() => {
    var i = 0;

    for(; i < 20; i++) {
        $(".first-row").append(`<div><a link class="text-decoration-none action-category">Law Case ` + Math.random() * 100 + `</a></div>`)
        $(".second-row").append(`<div><a link class="text-decoration-none action-category">Law Case ` + Math.random() * 100 + `</a></div>`)
    }

    
    $(".action-category").click((evt) => {
        $('#otherCategory').modal('hide');

        $("#categoryTitle").text(evt.currentTarget.text)
        $('#categoryModal').modal('show');
    })

    $('#otherCategory').modal('show');
})