app.controller('conchanTripsController', function ($scope) {
    'use strict';
    $scope.trips = [
		{
            "title": "Jaunary 2017 Assessment Trip",
            "description": "During the first assessment trip to the community of El Cisne de Conchan Ecuador, EWB-USA WPI aims to accomplish goals within the following categories: identify and assess possible projects within Conchan, collect technical data regarding the communities water needs, gain an understanding of the social and educational environment, strengthen communication, and make connections. During technical evaluation, the club will identify the current technical resources and capacity of the community, focusing on water resources, which was indicated as the community's greatest need. Investigation into water resources will include confirming possible water sources, collecting initial flow measurements, and testing the quality of these sources. EWB-USA WPI will later collect water data during the dry season and then analyze all of this collected data to determine the feasibility of a water project within the scope of our resources and technical expertise. Focus groups with community members will be conducted to identify other possible need areas or projects within the program if the water project is determined to be infeasible. EWB-USA WPI will work to establish personal relationships with people in the community and End the Cycle of Poverty (ECP), to help ensure strengthened communication for monitoring and data collection purposes year round, simplify future travel accommodations, and incorporate more contacts and resources into the project. The travel team will work with the leaders in the community to begin introducing the Project Partnership Agreement during the trip as well. In discussions with the community and community leadership, the travel team will emphasize that the feasibility of a water project can only be determined after the dry seasons, thus any construction that might take place regarding the project would not be done until next year, (2017),",
            "forms": [
                {"title": "521 Pre-Assessment Trip Report", "filename": "Assessment Pre-Trip Plan_Jan17_WPI.pdf"}
              ],
            "startdate": "TBD",
            "enddate": "TBD",
            "team": [
                {"name": "Heather Bourassa", "title": "Management Engineering, Biomedical Engineering, Class of 2019"},
				{"name": "Kerry Muenchow", "title": "Mechanical Engineering, Class of 2019"},
                {"name": "Rosa Reynoso", "title": "Mechanical Eningeering, Class of 2020"},
				{"name": "Alana Sher", "title": "Mechanical Eningeering, Class of 2019"}
    ]
        }];
    $scope.selectedTrip = $scope.trips[0];
});
