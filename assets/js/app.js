/* eslint-disable */
console.warn('Project One JS Initialized');
/* eslint-enable */

let eventName;
let userLocation;
let userRange;
let formBlock = [];

function retrieveForm(event) {
  event.preventDefault();

  date = $('#date').val().trim();
  mainInput = $('#mainInput').val().trim();
  venue  = $('#venue').val().trim();
  cityState  = $('#cityState').val().trim();

  createTable();

}

$('#submit-btn').on('click', retrieveForm);

function createTable() {
  $("#tableZone").empty();
 //tier 3
  var newCard = $("<div class='card'>");
  $("#tableZone").append(newCard);
 //tier 4
  var siteName = "Bands In Town"; //this will be grabbed from api
  var newCardHeader = $("<div class='card-header'>" + siteName + "</div>");
  $("#tableZone > .card").append(newCardHeader);
 //tier 4
  var newCardBody = $("<div class='card-body'>");
  $("#tableZone > .card").append(newCardBody);
 //tier 5
  var table = $("<table class='table'>");
  $(".card-body").append(newCardHeader);
 //tier 6
  var tableHead = $("<thead>");
  $(".table").append(tableHead);
 //tier 7
  var topRow = $("<tr>").append(
 //tier 8
  $("<td>").text("Date"),
  $("<td>").text("Event"),
  $("<td>").text("Venue Name"),
  $("<td>").text("City/Town"),
  $("<td>").text("Buttons")
    );
 //tier 6
  $("<thead>").append(topRow);
 //tier 5
  table.append(tableHead);
 //tier 6
  var tableBody = $("<tbody>");
 //tier 7
  var resultRow = $("<tr>").append(
 //tier 8
    $("<td>").text(date),
    $("<td>").text(mainInput),
    $("<td>").text(venue),
    $("<td>").text(cityState),
    $("<td>").text("Add-to-Profile Button"),
  );
 //tier 6
  tableBody.append(resultRow);
 //tier 5
  table.append(tableBody);
 //tier 4
  newCardBody.append(table);

}
