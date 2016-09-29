app.controller('aboutController', function ($scope) {
    'use strict';
    $scope.officers = [
		{ "ImgName": "EVELYN", "Position": "President", "Name": "Evelyn Grainger", "Major": "Civil Engineering, International Studies", "ClassYear": "2018", "Email": "emgrainger@wpi.edu"},
		{ "ImgName": "KAREN", "Position": "Vice President", "Name": "Karen Orton", "Major": "Robotics Engineering, Mechanical Engineering", "ClassYear": "2017", "Email": "kcorton@wpi.edu"},
		{ "ImgName": "KERRY", "Position": "Project Lead", "Name": "Kerry Muenchow", "Major": "Chemical Engineering", "ClassYear": "2019", "Email": "kemuenchow@wpi.edu"},
		{ "ImgName": "PLACEHOLDER", "Position": "PMEL Lead", "Name": "Alana Sher", "Major": "Civil Engineering", "ClassYear": "2019", "Email": "amsher@wpi.edu"},
        { "ImgName": "HOLLY", "Position": "Fundraising Chair", "Name": "Holly Nguyen", "Major": "Computer Science", "ClassYear": "2018", "Email": "hanguyen@wpi.edu"},
		{ "ImgName": "HEATHER", "Position": "Treasurer", "Name": "Heather Bourassa", "Major": "Management Engineering, Biomedical Engineering", "ClassYear": "2019", "Email": "hlbourassa@wpi.edu"},
		{ "ImgName": "MATT", "Position": "Secretary", "Name": "Matt Eaton", "Major": "Mechanical Engineering", "ClassYear": "2018", "Email": "mkeaton@wpi.edu"},
		{ "ImgName": "AARON", "Position": "Member Development Chair", "Name": "Aaron Pepin", "Major": "Mechanical Engineering", "ClassYear": "2017", "Email": "ajpepin@wpi.edu"},
		{ "ImgName": "KATIE", "Position": "Public Relations Chair", "Name": "Katie Dunphy", "Major": "Industrial Engineering, Biomedical Engineering", "ClassYear": "2019", "Email": "kddunphy@wpi.edu"}
	];
    $scope.appointed = [
		{ "ImgName": "PLACEHOLDER", "Position": "Events Coordinator", "Name": "Andrew Petit", "Major": "Computer Science", "ClassYear": "2018", "Email":  "apetit@wpi.edu"},
		{ "ImgName": "PLACEHOLDER", "Position": "Webmaster", "Name": "Trevor Valcourt", "Major": "Computer Science", "ClassYear": "2018", "Email": "tjvalcourt@wpi.edu"},
        { "ImgName": "CAMDEN", "Position": "Historian", "Name": "Camden Knoff", "Major": "Mechanical Engineering", "ClassYear": "Graduate Student", "Email": "cmknoff@wpi.edu"}
	];
});