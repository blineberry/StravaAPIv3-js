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
    define(['ApiClient', 'model/ActivityType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActivityType'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.UpdatableActivity = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.ActivityType);
  }
}(this, function(ApiClient, ActivityType) {
  'use strict';

  /**
   * The UpdatableActivity model module.
   * @module model/UpdatableActivity
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>UpdatableActivity</code>.
   * @alias module:model/UpdatableActivity
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdatableActivity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdatableActivity} obj Optional instance to populate.
   * @return {module:model/UpdatableActivity} The populated <code>UpdatableActivity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('commute'))
        obj.commute = ApiClient.convertToType(data['commute'], 'Boolean');
      if (data.hasOwnProperty('trainer'))
        obj.trainer = ApiClient.convertToType(data['trainer'], 'Boolean');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ActivityType.constructFromObject(data['type']);
      if (data.hasOwnProperty('gear_id'))
        obj.gearId = ApiClient.convertToType(data['gear_id'], 'String');
    }
    return obj;
  }

  /**
   * Whether this activity is a commute
   * @member {Boolean} commute
   */
  exports.prototype.commute = undefined;

  /**
   * Whether this activity was recorded on a training machine
   * @member {Boolean} trainer
   */
  exports.prototype.trainer = undefined;

  /**
   * The description of the activity
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * The name of the activity
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {module:model/ActivityType} type
   */
  exports.prototype.type = undefined;

  /**
   * Identifier for the gear associated with the activity. ‘none’ clears gear from activity
   * @member {String} gearId
   */
  exports.prototype.gearId = undefined;

  return exports;

}));
