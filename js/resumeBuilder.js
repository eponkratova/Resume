var formattedName = HTMLheaderName.replace("%data%", "Ekaterina Ponkratova");
$("#header").append(formattedName);

// function inName(name) {
// 	name = name.trim().split(" ");
// 	console.log(name);
// 	name[1] =  name[1].toUpperCase();
// 	name[0] =  name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
// 	return name[0] +" " + name[1];
// };
// $("#main").append(internationalizeButton);

var formattedRole = HTMLheaderRole.replace("%data%", "Data Analyst");
$("#header").prepend(formattedRole);

var formattedPic = HTMLbioPic.replace("%data%", "images/EPonkratova.jpg");
$("#header").append(formattedPic);

var bio = {
	"name": "Ekaterina Ponkratova",
	"role": "Data Analyst",
	"contacts": {
		"github": "eponkratova",
		"email": "katya.ponkratova@gmail.com",
		"mobile": "+525539107577",
		"linkedin": "https://www.linkedin.com/in/eponkratova/"
	},	
	"skills": ["Data exploration", "Information delivery (reporting, dashboards & ad hoc queries)", "Business Intelligence", "Knowledge management", "Product management", "Project management"],
	"welcomeMessage": "",
	"biopic": "images/EPonkratova.jpg"
};
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#footerContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#footerContacts").append(formattedEmail);
var formattedLinkedin = HTMLblog.replace("%data%", bio.contacts.linkedin);
$("#footerContacts").append(formattedLinkedin);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkills);	
	formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkills);	
	formattedSkills = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkills);			
};

var work  = {
	"jobs": [
	{
		"dates": "07/2016 – Present",
		"title": "Volunteer",
		"employer": "Instituto Internacional de Ciencia de Datos",
		"location": "Mexico",
		"description": "Serving on its Executive Advisory Group for Knowledge Management; Writing proposals as a response to a prospect's request for proposal.",
		"url": "http://www.i2ds.org/"
	},
	{
		"dates": "06/2016 – 12/2016",
		"title": "Senior Consultant, Data & Analytics",
		"employer": "PricewaterhouseCoopers (PwC México)",
		"location": "Mexico",
		"description": "Led the complete life cycle of an analytics process for external clients, from data extraction from a wide variety of data sources using SQL to data cleansing and development of mockups and visual analytical applications using Power BI, Tableau, Qlik Sense, among others.",
		"url": "http://www.pwc.com/mx/es.html"
	}, 
	{
		"dates": "06/2015 – 06/2016",
		"title": "Senior Consultant, Knowledge Center", 
		"employer": "PricewaterhouseCoopers (PwC México)",
		"location": "Mexico",
		"description": "Designed, developed and maintained interactive dashboards using Qlik Sense for internal PwC stakeholders; Led the entire internal and external research and analytics projects in various industries, starting from a research question formulation to communicating research & analytical findings; Liaised between cross-functional internal and external teams for web development/enhancements.",
		"url": "http://www.pwc.com/mx/es.html"
	}, 
	{
		"dates": "11/2012 – 06/2015",
		"title": "Analyst, Knowledge Center", 
		"employer": "PricewaterhouseCoopers (PwC México)",
		"location": "Mexico",
		"description": "Conducted secondary and primary research for internal stakeholders at different seniority levels on industries and companies; Oversaw and contributed to PwC's territory knowledge management activities.",
		"url": "http://www.pwc.com/mx/es.html"
	}
	]
};

function displayWork() {
	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

	var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDate + formattedLocation + formattedDescription;

	$(".work-entry:last").append(formattedEmployerTitle);
}
};

displayWork();

var education = {
	"schools": [
	{
		"dates": "06/2008 – 06/2012",
		"majors": "MSc in International Management",
		"name":  "SibFU (Russia)",
		"location": "Russia",
		"url": "http://www.sfu-kras.ru/en"
	},
	{
		"dates": "06/2004 – 06/2008",
		"majors": "BSc in Management",
		"name":  "SibFU (Russia)",
		"location": "Russia",	
		"url": "http://www.sfu-kras.ru/en"
	}
	],	
	"onlineCourses": [
	{
		"dates": "02/2016 – Present",
		"title": "Data Warehousing for Business Intelligence Specialization",
		"school": "University of Colorado",
		"url": "https://www.coursera.org/specializations/data-warehousing"
	}, 
	{
		"dates":"04/2016 – Present",
		"title": "Data Science Specialization",
		"school": "Johns Hopkins University",
		"url": "https://www.coursera.org/specializations/jhu-data-science"		
	},
	{
		"dates":"01/2016 – 06/2016",
		"title": "Statistics",
		"school": "UC Berkeley Extension",
		"url": "http://extension.berkeley.edu/search/publicCourseSearchDetails.do?method=load&courseId=27584459"		
	},
	{
		"dates": "11/2015 – 11/2015",
		"title": "Data Science Dojo, the US",
		"school": "Data science & Engineering boot camp",
		"url":	"https://datasciencedojo.com/"	
	},
	{
		"dates":"10/2014 – 11/2015",
		"title":"Data-Driven Journalism",
		"school": "Tableau",
		"url":	"http://datadrivenjournalism.net/resources/tableau_public"	
	}
	]
};

function displaySchools() {
	for (school in education.schools) {
	$("#education").append(HTMLschoolStart);
	var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
	var formattedMajor = HTMLschoolDegree.replace("%data%", education.schools[school].majors);
	var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	var formattedSchoolEntry =  formattedDates + formattedSchool + formattedMajor;
	$(".education-entry:last").append(formattedSchoolEntry);
}
};
displaySchools();

function displayOnlineCourse() {
	for (course in education.onlineCourses) {
	var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
	var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
	var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
	var formattedCourseEntry = formattedDates + formattedTitle + formattedSchool;
	$(".education-entry:last").append(formattedCourseEntry);
}
};
displayOnlineCourse();