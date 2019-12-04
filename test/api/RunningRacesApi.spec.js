/*
 * Strava API v3
 * The [Swagger Playground](https://developers.strava.com/playground) is the easiest way to familiarize yourself with the Strava API by submitting HTTP requests and observing the responses before you write any client code. It will show what a response will look like with different endpoints depending on the authorization scope you receive from your athletes. To use the Playground, go to https://www.strava.com/settings/api and change your “Authorization Callback Domain” to developers.strava.com. Please note, we only support Swagger 2.0. There is a known issue where you can only select one scope at a time. For more information, please check the section “client code” at https://developers.strava.com/docs.
 *
 * OpenAPI spec version: 3.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.StravaApiV3);
  }
}(this, function(expect, StravaApiV3) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new StravaApiV3.RunningRacesApi();
  });

  describe('(package)', function() {
    describe('RunningRacesApi', function() {
      describe('getRunningRaceById', function() {
        it('should call getRunningRaceById successfully', function(done) {
          // TODO: uncomment, update parameter values for getRunningRaceById call and complete the assertions
          /*
          var id = 56;

          instance.getRunningRaceById(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(StravaApiV3.RunningRace);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(0);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.runningRaceType).to.be.a('number');
            expect(data.runningRaceType).to.be(0);
            expect(data.distance).to.be.a('number');
            expect(data.distance).to.be(0.0);
            expect(data.startDateLocal).to.be.a(Date);
            expect(data.startDateLocal).to.be(new Date());
            expect(data.city).to.be.a('string');
            expect(data.city).to.be("");
            expect(data.state).to.be.a('string');
            expect(data.state).to.be("");
            expect(data.country).to.be.a('string');
            expect(data.country).to.be("");
            {
              let dataCtr = data.routeIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(0);
              }
            }
            expect(data.measurementPreference).to.be.a('string');
            expect(data.measurementPreference).to.be("feet");
            expect(data.url).to.be.a('string');
            expect(data.url).to.be("");
            expect(data.websiteUrl).to.be.a('string');
            expect(data.websiteUrl).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getRunningRaces', function() {
        it('should call getRunningRaces successfully', function(done) {
          // TODO: uncomment, update parameter values for getRunningRaces call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;

          instance.getRunningRaces(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(StravaApiV3.RunningRace);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be(0);
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.runningRaceType).to.be.a('number');
              expect(data.runningRaceType).to.be(0);
              expect(data.distance).to.be.a('number');
              expect(data.distance).to.be(0.0);
              expect(data.startDateLocal).to.be.a(Date);
              expect(data.startDateLocal).to.be(new Date());
              expect(data.city).to.be.a('string');
              expect(data.city).to.be("");
              expect(data.state).to.be.a('string');
              expect(data.state).to.be("");
              expect(data.country).to.be.a('string');
              expect(data.country).to.be("");
              {
                let dataCtr = data.routeIds;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(0);
                }
              }
              expect(data.measurementPreference).to.be.a('string');
              expect(data.measurementPreference).to.be("feet");
              expect(data.url).to.be.a('string');
              expect(data.url).to.be("");
              expect(data.websiteUrl).to.be.a('string');
              expect(data.websiteUrl).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
