// import {
//     REGISTER_SUCCESS, 
//     REGISTER_FAIL, 
//     AUTH_ERROR,
//     LOGIN_SUCCESS,
//     LOGIN_FAIL, 
//     LOGOUT,
//     ACCOUNT_DELETED,
//     LOADING_PROFILE,
//     LOADING_USERNAME,
//     LOADING_PASSWORD,
//     LOADING_AUTH,
//     SET_ROLE,
//     SET_IMAGE,
//     SET_PERMISSIONS} from '../actions/types.js';

// const initialState = {
//     isAuthenticated: null,
//     loading: true,
//     loadingProfile: false,
//     loadingUsername: false,
//     loadingPassword: false,
//     loadingAuth: false,
//     user: null,
//     role: null,
//     permissions: null,
// }

// export default function(state = initialState, action){
//     const {type, payload} = action;
//     switch(type){
//         case REGISTER_SUCCESS:
//         case LOGIN_SUCCESS:
//             return{
//                 ...state,
//                 user: payload,
//                 isAuthenticated:true,
//                 loading: false,
//             };
//         case REGISTER_FAIL:
//         case AUTH_ERROR:
//         case LOGIN_FAIL:
//         case LOGOUT:
//         case ACCOUNT_DELETED:
//             return{
//                 ...state,
//                 isAuthenticated:false,
//                 loading: false,
//                 user: null,
//             };
//         case LOADING_PROFILE:
//             return{
//                 ...state,
//                 loadingProfile: payload,
//             };
//         case LOADING_USERNAME:
//             return{
//                 ...state,
//                 loadingUsername: payload,
//             };
//         case LOADING_PASSWORD:
//             return{
//                 ...state,
//                 loadingPassword: payload,
//             };
//         case LOADING_AUTH:
//             return{
//                 ...state,
//                 loadingAuth: payload,
//             };
//         case SET_ROLE:
//             return{
//                 ...state,
//                 role: payload,
//             }
//         case SET_PERMISSIONS:
//             return{
//                 ...state,
//                 permissions: payload,
//             }
//         case SET_IMAGE:
//             return{
//                 ...state,
//                 user: {...state.user, profile: {...state.user.profile, imagen: payload}},
//             }
//         default:
//             return state;
//     }
// }