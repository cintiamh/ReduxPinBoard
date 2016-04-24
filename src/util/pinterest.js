import { PIN_APP, PIN_SCOPE } from './config';

console.log('GOT PIN', PDK);
// Initialize once with app id
PDK.init({ appId: PIN_APP, cookie: true });


/*
 *  Wrapper for all Pinterest SDK actions
 */
var Pinterest = {
  /*
   *  Use the SDK to login to Pinterest
   *  @param {Function} callback - function fired on completion
   */
  login: function(callback) {
    PDK.login({ scope : PIN_SCOPE }, callback);
  },
  /*
   *  Use the SDK to logout of Pinterest
   */
  logout: function() {
    PDK.logout();
  },
//  /*
//   *  Use DK to determine auth state of user
//   *  @returns {Boolean}
//   */
//  loggedIn: function() {
//    return !!PDK.getSession();
//  },
//  /*
//   *  Use SDK to create a new Pin
//   *  @param {Object}   data     - {board, note, link, image_url}
//   *  @param {Function} callback - function fired on completion
//   */
//  createPin: function(data, callback) {
//    PDK.request('/pins/', 'POST', data, callback);
//  },
//  /*
//   *  Use SDK to request current users boards
//   *  @param {Function} callback - function fired on completion
//   */
//  myBoards: function(callback) {
//    PDK.me('boards', { fields: Const.PIN_FIELDS }, callback);
//  }
};

export default Pinterest;