function submitForm() 
{
    $("#btnSubmit").on("click", function() {
        var $this           = $("#btnSubmit"); //кнопка отправки с использованием идентификатора
        var $caption        = $this.html();//html-содержимое кнопки отправки
        var form            = "#form"; 
        var formData        = $(form).serializeArray(); //сериализуем форму в массив
        var route           = $(form).attr('action'); 

        // Ajax 
        $.ajax({
            type: "POST", //метод POST для отправки данных на сторону сервера
            url: route, 
            data: formData, //сериализованный массив данных для серверной части
            beforeSend: function () {//добавляем это перед отправкой, чтобы отключить кнопку после ее отправки, чтобы предотвратить многократный щелчок
                $this.attr('disabled', true).html("Processing...");
            },
            success: function (response) {//как только запрос будет успешно обработан на стороне сервера, он вернет результат здесь
                $this.attr('disabled', false).html($caption);

                //результат в сплывающем окне
                alert(response);

                //Форма сброса
                resetForm();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert("Ошибочка вышла...");
            }
        });
    });
}

function resetForm() 
{
    $('#form')[0].reset();
}


$(document).ready(function() {

    // Отправить форму с помощью AJAX
    submitForm();

});