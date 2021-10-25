$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const item1Input = $("input#item1").val();
    const item2Input = $("input#item2").val();
    const item3Input = $("input#item3").val();
    const item4Input = $("input#item4").val();
    const item5Input = $("input#item5").val();
    const item6Input = $("input#item6").val();

    $(".item1").text(item1Input);
    $(".item2").text(item2Input);
    $(".item3").text(item3Input);
    $(".item4").text(item4Input);
    $(".item5").text(item5Input);
    $(".item6").text(item6Input);

    $(".form-group").hide();
    $(".list").show();
    $(".btn").hide();
  });
});