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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SegmentLeaderboardEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SegmentLeaderboardEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.SegmentLeaderboard = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.SegmentLeaderboardEntry);
  }
}(this, function(ApiClient, SegmentLeaderboardEntry) {
  'use strict';

  /**
   * The SegmentLeaderboard model module.
   * @module model/SegmentLeaderboard
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SegmentLeaderboard</code>.
   * A
   * @alias module:model/SegmentLeaderboard
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SegmentLeaderboard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SegmentLeaderboard} obj Optional instance to populate.
   * @return {module:model/SegmentLeaderboard} The populated <code>SegmentLeaderboard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('entry_count'))
        obj.entryCount = ApiClient.convertToType(data['entry_count'], 'Number');
      if (data.hasOwnProperty('effort_count'))
        obj.effortCount = ApiClient.convertToType(data['effort_count'], 'Number');
      if (data.hasOwnProperty('kom_type'))
        obj.komType = ApiClient.convertToType(data['kom_type'], 'String');
      if (data.hasOwnProperty('entries'))
        obj.entries = ApiClient.convertToType(data['entries'], [SegmentLeaderboardEntry]);
    }
    return obj;
  }

  /**
   * The total number of entries for this leaderboard
   * @member {Number} entryCount
   */
  exports.prototype.entryCount = undefined;

  /**
   * Deprecated, use entry_count
   * @member {Number} effortCount
   */
  exports.prototype.effortCount = undefined;

  /**
   * @member {module:model/SegmentLeaderboard.KomTypeEnum} komType
   */
  exports.prototype.komType = undefined;

  /**
   * @member {Array.<module:model/SegmentLeaderboardEntry>} entries
   */
  exports.prototype.entries = undefined;


  /**
   * Allowed values for the <code>komType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.KomTypeEnum = {
    /**
     * value: "kom"
     * @const
     */
    kom: "kom",

    /**
     * value: "cr"
     * @const
     */
    cr: "cr"
  };

  return exports;

}));
