// actions.js
export const setLogoImage = (path) => ({
  type: 'setLogoImage',
  payload: path,
});

export const setMenu = (menuList) => ({
  type: 'setMenu',
  payload: menuList,
});

export const updateDate = (dateObject) => ({
  type: 'updateDate',
  payload: dateObject,
});
