console.log('Ajax - Pobierz dane programisty po kliknięciu przycisku');

$(document).ready(function(){

       
        $('#data-programisty').click(function(){
            $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
                .done(function(data){

                    let name = $('<p></p>').text(`Imie: ${data.imie}`);
                    let lastName = $('<p></p>').text(`Nazwisko: ${data.nazwisko}`);
                    let occupation = $('<p></p>').text(`Zawód: ${data.zawod}`);
                    let concern = $('<p></p>').text(`Firma: ${data.firma}`);
    
                    let jgDiv = $('<div id="dane-programisty"></div>');

                    $('body').append(jgDiv);

                    jgDiv.append(name).append(lastName).append(occupation).append(concern);
                    
                })
                .fail(function(error){
                    console.log(error);
                });
        });
});