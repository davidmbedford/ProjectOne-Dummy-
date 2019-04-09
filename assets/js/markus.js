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
  venue = $('#venue').val().trim();
  zipcode = $('#zipCode').val().trim();
  console.log('before createTable')
  createTable();

}

$('#submit-btn').on('click', retrieveForm);

function createTable(event) {

  console.log('clicked')
  // $("#tableZone").empty();
  // //tier 3
  // var newCard = $("<div class='card'>");
  // $("#tableZone").append(newCard);
  // //tier 4
  // var siteName = "Bands In Town"; //this will be grabbed from api
  // var newCardHeader = $("<div class='card-header'>" + siteName + "</div>");
  // $("#tableZone > .card").append(newCardHeader);
  // //tier 4
  // var newCardBody = $("<div class='card-body'>");
  // $("#tableZone > .card").append(newCardBody);
  // //tier 5
  // var table = $("<table class='table'>");
  // $(".card-body").append(newCardHeader);
  // //tier 6
  // var tableHead = $("<thead>");
  // $(".table").append(tableHead);
  // //tier 7
  // var topRow = $("<tr>").append(
  //   //tier 8
  //   $("<td>").text("Date"),
  //   $("<td>").text("Event"),
  //   $("<td>").text("Venue Name"),
  //   $("<td>").text("City/Town"),
  //   $("<td>").text("Buttons")
  // );
  // //tier 6
  // $("<thead>").append(topRow);
  // //tier 5
  // table.append(tableHead);
  //tier 6


  // var button = $("<button>");
  // button.attr("type", "button");
  // button.attr("class", "btn btn-primary");
  // button.attr("data-toggle", "modal");
  // button.attr("data-target", "#exampleModal");
  // button.text("test");

  //tier 7
  // var resultRow = $("<tr>").append(
  //   //tier 8
  //   $("<td>").text(date),
  //   $("<td>").text(mainInput),
  //   $("<td>").text(venue),
  //   $("<td>").text(zipcode),
  //   $("<td>").text("Add-to-Profile Button"),
  //   $("<td>").html(button),


  // );
  // //tier 6
  // tableBody.append(resultRow);
  // //tier 5
  // table.append(tableBody);
  // //tier 4
  // newCardBody.append(table);


  //zipcode variable to make it dynamic, concatnate
  var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?zipCode" + zipcode + "&apikey=IOLEuwOBaextS3XP3HR0L3NUcF3eaFqf";
  //   // Performing an AJAX request with the queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    //After data comes back from the request
    .then(function (response) {
      // console.log(queryURL);
      var results = response._embedded.events;
      console.log(response);

      //     var newCardBody = $("<div class='card-body'>");
      //     //tier 4
      //     var table = $("<table class='table'>");
      //     newCardBody.append(table);

      //     table.append(tableBody);
      // var tableBody = $("<tbody>");
      //tier 5
      var xyz = `
      <tr>
      <td>Test 1 </td>
      <td>Test 2 </td>
      <td>Test 3 </td>
      <td>Test 4 </td>
      </tr>
    `;

    var tbody = $("#tableBody");
    console.log(tbody)
    //tbody.text("hi there")
    //console.log('hiiiiiiii')


      for (var i = 0; i < results.length; i++) {
        var date = results[i].dates.start.localDate
        var venue = results[i]._embedded.venues[0].name
        var name = results[i].name

        var button = $("<button>");
        button.attr("type", "button");
        button.attr("class", "btn btn-primary");
        button.attr("data-toggle", "modal");
        button.attr("data-target", "#exampleModal");
        button.text("Modal");
        // var table = $("<table class='table'>");
        // var newCardBody = $("<div class='card-body'>");
        // var tableBody = $("<tbody>");

        var resultRow = $("<tr>").append(
          //tier 8
          $("<td>").text(date),
          $("<td>").text(name),
          $("<td>").text(venue),
          $("<td>").text(zipcode),
          $("<td>").html(button),
        );
        //tier 6
        tbody.append(resultRow);
      };

      //  $("#eventName").empty();
      // //Looping through each result item
      //  for (var i = 0; i < results.length; i++) {
      //   // Creating and storing a div tag
      // var eventName = $("<div class='col-sm-12 col-md-4'>");
      // //   // Creating a paragraph tag with the result item's rating
      // var p = $("<p>").text("artistName: " + results[i].artistName);
      // //  Creating and storing an image tag
      // var results = $("<img>");

      // };

    });
  //   if
};

//   else
