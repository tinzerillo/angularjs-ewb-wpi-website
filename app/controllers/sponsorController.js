app.controller('sponsorController', function($scope) {
    "use strict";

    $scope.sponsors = [
        { // PLATINUM
            "level":"Platinum",
            "description":"Donated $5000 or more",
            "rewards": [
                {"reward":"Thank You card with club signatures"},
                {"reward":"Name/Logo listed on \"Sponsors\" page under Platinum category with a description of person/organization"},
                {"reward":"Recognition in EWB-USA WPI newsletters and other formal publications"},
                {"reward":"Recognition in EWB-USA WPI presentations"},
                {"reward":"Name/Logo listed in the website footer"},
                {"reward":"Report documenting how the donation was used for the club"},
                {"reward":"Opportunity for semesterly progress report on the project"},
                {"reward":"Sponsorship recognized on one of our annual club T-shirts"},
                {"reward":"Club T-shirts with your logo on it"}
            ],
            "donors": [
                {"name":"Alan & Gould Family Foundation", "date":"September 2016", "amount":"$5,000"},
                {"name":"Rotary", "date":"May 2015", "amount":"$35,000"}
            ]
        },

        { // GOLD
            "level":"Gold",
            "description":"Between $1000 and $4999",
            "rewards": [
                {"reward":"Thank You card with club signatures"},
                {"reward":"Name/Logo listed on \"Sponsors\" page under Gold category"},
                {"reward":"Recognition in EWB-USA WPI newsletters and other formal publications"},
                {"reward":"Recognition in EWB-USA WPI presentations"},
                {"reward":"Name/Logo listed in the website footer"},
                {"reward":"Report documenting how the donation was used for the club"},
                {"reward":"Opportunity for semesterly progress report on the project"},
                {"reward":"Sponsorship recognized on one of our annual club T-shirts"},
                {"reward":"Club T-shirts with your logo on it"}
            ],
            "donors": [
                {"name":"Worcester Polytechnic Institute", "date":"November 2015", "amount":"$1,000"},
                {"name":"Pratt & Whitney", "date":"April 2016", "amount":"$2,500"}
            ]
        },

        { // SILVER
            "level":"Silver",
            "description":"Between $200 and $999",
            "rewards": [
                {"reward":"Thank You card with club signatures"},
                {"reward":"Name/Logo listed on \"Sponsors\" page under Silver category"},
                {"reward":"Recognition in EWB-USA WPI newsletters and other formal publications"}
            ],
            "donors": [
                // Donors in the Silver tier go here
            ]
        },

        { // FRIENDS
            "level":"Friends",
            "description":"Between $5 and $200",
            "rewards": [
                {"reward":"Thank You card"},
                {"reward":"Name/Logo listed on\"Sponsors\" page under Friends category"}
            ],
            "donors": [
                // Donors in the friends tier go here
            ]
        }
    ];
})