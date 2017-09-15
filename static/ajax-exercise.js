"use strict";


// PART 1: SHOW A FORTUNE

function showFortune() {
    $.get('/fortune', function (results) {
        $('#fortune-text').html(results);
    });
    // TODO: get the fortune and show it in the #fortune-text div
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();

    $.get(url, function (results) {
        $('#weather-info').html(results.forecast);
    });

    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();
    var formInputs = {
        "qty": $('#qty-field').val(),
        "melon_type": $('#melon-type-field').val(),
    };

    $.post('/order-melons.json', formInputs, function(results) { console.log(results)
        $('#order-status').html(results.code + " " + results.msg)

    if (results.result_code === "ERROR") {
        $('#order-status').addClass('order-error')
        }
    });

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


