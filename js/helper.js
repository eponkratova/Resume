var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span id="role">%data%</span><hr>';

var HTMLcontactGeneric = '<span class="orange-text">%contact%</span><span class="white-text">%data%</span>';
var HTMLmobile = '<p><span class="orange-text">mobile</span><span class="white-text">%data%</span></p>';
var HTMLemail = '<span class="orange-text">email</span><span class="white-text">%data%</span>';
var HTMLtwitter = '<span class="orange-text">twitter</span><span class="white-text">%data%</span>';
var HTMLgithub = '<span class="orange-text">github</span><span class="white-text">%data%</span>';
var HTMLblog = '<span class="orange-text">linkedin</span><span class="white-text">%data%</span>';
var HTMLlocation = '<span class="orange-text">location</span><span class="white-text">%data%</span>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Areas of expertise:</h3><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '</br><p id="other">%data%';
var HTMLworkTitle = ' - %data%</p>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<p>, %data%';
var HTMLschoolDegree = ', %data%</p>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<p>, %data%';
var HTMLonlineSchool = ', %data%</p>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function(){};
    $name.html(iName);
  });
});