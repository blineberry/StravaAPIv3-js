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
    define(['ApiClient', 'model/SummaryClub'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SummaryClub'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.DetailedClub = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.SummaryClub);
  }
}(this, function(ApiClient, SummaryClub) {
  'use strict';

  /**
   * The DetailedClub model module.
   * @module model/DetailedClub
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DetailedClub</code>.
   * @alias module:model/DetailedClub
   * @class
   * @implements module:model/SummaryClub
   */
  var exports = function() {
    SummaryClub.call(this);
  };

  /**
   * Constructs a <code>DetailedClub</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DetailedClub} obj Optional instance to populate.
   * @return {module:model/DetailedClub} The populated <code>DetailedClub</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      SummaryClub.constructFromObject(data, obj);
      if (data.hasOwnProperty('membership'))
        obj.membership = ApiClient.convertToType(data['membership'], 'String');
      if (data.hasOwnProperty('admin'))
        obj.admin = ApiClient.convertToType(data['admin'], 'Boolean');
      if (data.hasOwnProperty('owner'))
        obj.owner = ApiClient.convertToType(data['owner'], 'Boolean');
      if (data.hasOwnProperty('following_count'))
        obj.followingCount = ApiClient.convertToType(data['following_count'], 'Number');
    }
    return obj;
  }

  /**
   * The membership status of the logged-in athlete.
   * @member {module:model/DetailedClub.MembershipEnum} membership
   */
  exports.prototype.membership = undefined;

  /**
   * Whether the currently logged-in athlete is an administrator of this club.
   * @member {Boolean} admin
   */
  exports.prototype.admin = undefined;

  /**
   * Whether the currently logged-in athlete is the owner of this club.
   * @member {Boolean} owner
   */
  exports.prototype.owner = undefined;

  /**
   * The number of athletes in the club that the logged-in athlete follows.
   * @member {Number} followingCount
   */
  exports.prototype.followingCount = undefined;

  // Implement SummaryClub interface:
  /**
   * The club's unique identifier.
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * Resource state, indicates level of detail. Possible values: 1 -> \"meta\", 2 -> \"summary\", 3 -> \"detail\"
   * @member {Number} resourceState
   */
  exports.prototype.resourceState = undefined;

  /**
   * The club's name.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * URL to a 60x60 pixel profile picture.
   * @member {String} profileMedium
   */
  exports.prototype.profileMedium = undefined;

  /**
   * URL to a ~1185x580 pixel cover photo.
   * @member {String} coverPhoto
   */
  exports.prototype.coverPhoto = undefined;

  /**
   * URL to a ~360x176  pixel cover photo.
   * @member {String} coverPhotoSmall
   */
  exports.prototype.coverPhotoSmall = undefined;

  /**
   * @member {module:model/SummaryClub.SportTypeEnum} sportType
   */
  exports.prototype.sportType = undefined;

  /**
   * The club's city.
   * @member {String} city
   */
  exports.prototype.city = undefined;

  /**
   * The club's state or geographical region.
   * @member {String} state
   */
  exports.prototype.state = undefined;

  /**
   * The club's country.
   * @member {String} country
   */
  exports.prototype.country = undefined;

  /**
   * Whether the club is private.
   * @member {Boolean} _private
   */
  exports.prototype._private = undefined;

  /**
   * The club's member count.
   * @member {Number} memberCount
   */
  exports.prototype.memberCount = undefined;

  /**
   * Whether the club is featured or not.
   * @member {Boolean} featured
   */
  exports.prototype.featured = undefined;

  /**
   * Whether the club is verified or not.
   * @member {Boolean} verified
   */
  exports.prototype.verified = undefined;

  /**
   * The club's vanity URL.
   * @member {String} url
   */
  exports.prototype.url = undefined;


  /**
   * Allowed values for the <code>membership</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MembershipEnum = {
    /**
     * value: "member"
     * @const
     */
    member: "member",

    /**
     * value: "pending"
     * @const
     */
    pending: "pending"
  };

  return exports;

}));
