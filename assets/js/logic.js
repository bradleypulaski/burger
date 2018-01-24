$(function () {
    $("#burger-form").submit(function (e) {
        e.preventDefault();
        var name = $("#burger-name-form").val();
        var devoured = 0;
        var burger = { burger_name: name, devoured: devoured };
        console.log(burger);
        $.ajax("/create", { type: "POST", data: burger })
            .then(function (result) {
                console.log(result);
                resetUI();
            });
    });

    $('body').on('click', '.devour', function () {
        var c = confirm("are you sure you want to devour the burger? ¯\_(ツ)_/¯");
        if (c !== false) {
            var id = $(this).attr("data-id");
            var devoured = 1;
            $.ajax("/update/" + id, { type: "POST", data: { devoured: 1 } })
                .then(function (result) {
                    resetUI();
                });
        }
    });
});

function resetUI() {
    $(".devoured").html("");
    $("#non-devoured").html("");
    $.post("/getAll", { send: 1 })
        .then(function (result) {
            for (var key in result) {
                var burger = result[key];
                if (burger.devoured === 0) {
                    var html = '<div class="non-devoured"><textarea disabled data-id="' + burger.id + '">' + burger.id + '. ' + burger.burger_name + ' </textarea><button data-id="' + burger.id + '" class="devour">Devour it!</button></div>'
                    $("#non-devoured").append(html);
                } else {
                    var html = '<li>' + burger.id + '. ' + burger.burger_name + '</li>';
                    $(".devoured").append(html);
                }
            }
        });
}