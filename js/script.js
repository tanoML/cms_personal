$("#bas").on('change', function() {

    if ($(this).is(':checked')) {
        //alert("su we");
        $("#bas_sa").prop("disabled", false);
    } else {
        $("#bas_sa").val('');
        $("#bas_sa").prop("disabled", true);
    }

});