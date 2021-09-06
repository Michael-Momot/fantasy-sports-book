'use strict';

describe('matchList', function() {
    // Load the module that contaisn the 'matchList' component
    beforeEach(module('matchList'));

    // Test the controller
    describe('matchListController', function() {
        it('should create a matches model with 2 matches', 
        inject(function($componentController){
            var ctrl = $componentController(matchList);

            expect(ctrl.matches.length).toBe(2);
        }));
    });
});