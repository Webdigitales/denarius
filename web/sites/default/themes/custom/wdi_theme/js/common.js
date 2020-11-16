/* */
var mobile = isMobile();

/**
 * is Mobile
 * @returns {boolean}
 */
function isMobile() {
  if(document.documentElement.clientWidth < 1200) {
    return true;
  }
  return false;
}
