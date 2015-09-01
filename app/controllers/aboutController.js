app.controller('aboutController', function ($scope) {
    'use strict';
    $scope.officers = [
		{ "ImgName": "KATIE", "Position": "President", "Name": "Katie Picchione", "Major": "Mechanical Engineering, Society, Technology and Policy", "ClassYear": "2016", "Email": "krpicchione@wpi.edu"},
		{ "ImgName": "CAMDEN", "Position": "Vice President", "Name": "Camden Knoff", "Major": "Mechanical Engineering", "ClassYear": "2016", "Email": "cmknoff@wpi.edu"},
		{ "ImgName": "EVELYN", "Position": "Project Lead", "Name": "Evelyn Grainger", "Major": "Mechanical Engineering", "ClassYear": "2018", "Email": "emgrainger@wpi.edu"},
		{ "ImgName": "THERESA", "Position": "Fundraising Chair", "Name": "Theresa Inzerillo", "Major": "Computer Science", "ClassYear": "2017", "Email": "tkinzerillo@wpi.edu"},
		{ "ImgName": "BRANDON", "Position": "Treasurer", "Name": "Brandon Clark", "Major": "Chemical Engineering", "ClassYear": "2018", "Email": "bclark2@wpi.edu"},
		{ "ImgName": "HOLLY", "Position": "Secretary", "Name": "Holly Nguyen", "Major": "Computer Science", "ClassYear": "2018", "Email": "hanguyen@wpi.edu"},
		{ "ImgName": "JESSIE", "Position": "Member Development Chair", "Name": "Jessie Ciulla", "Major": "Mechanical Engineering", "ClassYear": "2016", "Email": "jmciulla@wpi.edu"},
		{ "ImgName": "AMANDA", "Position": "Public Relations Chair", "Name": "Amanda Gatz", "Major": "Electrical and Computer Engineering", "ClassYear": "2017", "Email": "amgatz@wpi.edu"}
	];
    $scope.appointed = [
		{ "ImgName": "PLACEHOLDER", "Position": "Events Coordinator", "Name": "TBA", "Major": "TBD", "ClassYear": "TBD", "Email":  "tbd@wpi.edu"},
		{ "ImgName": "THERESA", "Position": "Webmaster", "Name": "Theresa Inzerillo", "Major": "Computer Science", "ClassYear": "2017", "Email": "tkinzerillo@wpi.edu"}
	];
});