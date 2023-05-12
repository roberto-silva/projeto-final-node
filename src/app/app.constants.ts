import {environment} from "../assets/environments/environment";

export const ACCESS_TOKEN = "ACCESS_TOKEN";
export const BASE_API = environment.BASE_URL;
export const FIRST_VERSION_API = '';
export const AUTH_API = BASE_API + FIRST_VERSION_API + 'seguranca/login';
export const SIGN_UP_API = BASE_API + FIRST_VERSION_API + 'seguranca/register';
export const USER_API = BASE_API + FIRST_VERSION_API + 'users';
export const PRODUCTS_API = BASE_API + FIRST_VERSION_API + 'v1/produtos';
