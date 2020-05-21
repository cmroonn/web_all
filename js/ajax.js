$(document).ready(function() {

    $("#sender").click(function(e){
        e.preventDefault();
        sendAjaxForm('result_form', 'form', '../mail/sender.php');
    });
     
    function sendAjaxForm(result_form, ajax_form, url) {
        $.ajax({
            url:     url, //url страницы 
            type:     "POST", //метод отправки
            dataType: "html", //формат данных
            data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
            success: function(response) { //Данные отправлены успешно
                window.location.href = "/thanks.html"
            },
            error: function(response) { // Данные не отправлены
                $('#result_form').html('Ошибка. Данные не отправлены.');
            }
         });
    };
});