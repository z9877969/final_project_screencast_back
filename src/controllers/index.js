import { registerUser } from './auth/registerUser.js';
import { logoutUser } from './auth/logoutUser.js';

import { getCategories } from './categories/getCategories.js';

export const auth = {
  registerUser,
  logoutUser,
};

export const categories = {
  getCategories,
};
