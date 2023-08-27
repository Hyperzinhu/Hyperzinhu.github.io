const body = document.querySelector("body")

/** 
 * @param {object} menuId - Menu that will be manipulated
 */
function openMenu(menuId) {
  const menu = document.getElementById(menuId);
  body.classList.add("u-overflow_hidden");
  menu.classList.add("menu--open");
}

/** 
 * @param {object} event - event
 * @param {object} menuId - Menu that will be manipulated
 */
function closeMenu(e, menuId) {
  const menu = document.getElementById(menuId);
  if (e.target == e.currentTarget) {
    body.classList.remove("u-overflow_hidden");
    menu.classList.remove("menu--open");
  }
}