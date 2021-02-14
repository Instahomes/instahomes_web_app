function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/7854/',
        type:'post',
        data:$("#create-listing-form").serializeArray(),
        success: function(){
            document.getElementById("alert-listing-success").style.display =
              "block";
        },
        error: function(){
            document.getElementById("alert-listing-failure").style.display =
              "block";
        }
    });
}

$(this)
  .closest("." + $(this).attr("data-hide"))
  .hide();
