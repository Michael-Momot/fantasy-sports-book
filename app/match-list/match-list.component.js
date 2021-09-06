'use strict';

// Register `matchList` component, along with its associated controller and template
angular.
  module('matchList').
  component('matchList', {
    templateUrl: "match-list/match-list.template.html", // Path is relative to /app
    controller: function MatchListController() {
      this.matches = [
        {
          team1:  {
            name: "Steven",
            spread: "+10",
            spreadOdds: "+110"
            },

          team2: {
            name: "Clint",
            spread: "-10",
            spreadOdds: "-110"
          }
        }, {
         team1: {
            name: "Brian",
            spread: "+10",
            spreadOdds: "+110"
            },
            
          team2: {
            name: "Tom",
            spread: "-10",
            spreadOdds: "-110"
          }
        }
      ];
   }
});