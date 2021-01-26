import {
  ADD_ITEM,
  REMOVE_ITEM,
  RESET_ITEM
} from "common/constants";

export const ADVANCE_SEARCH_DEVICE_STARTED = 'ADVANCE_SEARCH_DEVICE_STARTED'
export const ADVANCE_SEARCH_DEVICE_SUCCESS = 'ADVANCE_SEARCH_DEVICE_SUCCESS'
export const ADVANCE_SEARCH_DEVICE_FAILED = 'ADVANCE_SEARCH_DEVICE_FAILED'
export const GET_BIG_URL_STARTED = 'GET_BIG_URL_STARTED'
export const GET_BIG_URL_SUCCESS = 'GET_BIG_URL_SUCCESS'
export const GET_BIG_URL_FAILED = 'GET_BIG_URL_FAILED'
export const GET_BRANDS_STARTED = 'GET_BRANDS_STARTED'
export const GET_BRANDS_SUCCESS = 'GET_BRANDS_SUCCESS'
export const GET_BRANDS_FAILED = 'GET_BRANDS_FAILED'
export const GET_CATEGORIES_STARTED = 'GET_CATEGORIES_STARTED'
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
export const GET_CATEGORIES_FAILED = 'GET_CATEGORIES_FAILED'
export const GET_FILTERED_VALUES_STARTED = 'GET_FILTERED_VALUES_STARTED'
export const GET_FILTERED_VALUES_SUCCESS = 'GET_FILTERED_VALUES_SUCCESS'
export const GET_FILTERED_VALUES_FAILED = 'GET_FILTERED_VALUES_FAILED'
export const GET_MODELS_STARTED = 'GET_MODELS_STARTED'
export const GET_MODELS_SUCCESS = 'GET_MODELS_SUCCESS'
export const GET_MODELS_FAILED = 'GET_MODELS_FAILED'
export const GET_POPULAR_CATEGORIES_STARTED = 'GET_POPULAR_CATEGORIES_STARTED'
export const GET_POPULAR_CATEGORIES_SUCCESS = 'GET_POPULAR_CATEGORIES_SUCCESS'
export const GET_POPULAR_CATEGORIES_FAILED = 'GET_POPULAR_CATEGORIES_FAILED'
export const GET_POPULAR_PRODUCTS_STARTED = 'GET_POPULAR_PRODUCTS_STARTED'
export const GET_POPULAR_PRODUCTS_SUCCESS = 'GET_POPULAR_PRODUCTS_SUCCESS'
export const GET_POPULAR_PRODUCTS_FAILED = 'GET_POPULAR_PRODUCTS_FAILED'
export const GET_SHORT_URL_STARTED = 'GET_SHORT_URL_STARTED'
export const GET_SHORT_URL_SUCCESS = 'GET_SHORT_URL_SUCCESS'
export const GET_SHORT_URL_FAILED = 'GET_SHORT_URL_FAILED'
export const GET_VERSION_SPECIALFICATION_STARTED = 'GET_VERSION_SPECIALFICATION_STARTED'
export const GET_VERSION_SPECIALFICATION_SUCESS = 'GET_VERSION_SPECIALFICATION_SUCESS'
export const GET_VERSION_SPECIALFICATION_FAILED = 'GET_VERSION_SPECIALFICATION_FAILED'
export const GET_SMARTPHONE_DETAILS_STARTED = 'GET_SMARTPHONE_DETAILS_STARTED'
export const GET_SMARTPHONE_DETAILS_SUCCESS = 'GET_SMARTPHONE_DETAILS_SUCCESS'
export const GET_SMARTPHONE_DETAILS_FAILED = 'GET_SMARTPHONE_DETAILS_FAILED'
export const GET_TRENDING_PRODUCTS_STARTED = 'GET_TRENDING_PRODUCTS_STARTED'
export const GET_TRENDING_PRODUCTS_SUCCESS = 'GET_TRENDING_PRODUCTS_SUCCESS'
export const GET_TRENDING_PRODUCTS_FAILED = 'GET_TRENDING_PRODUCTS_FAILED'
export const GET_DEVICE_BY_NAME_STARTED = 'GET_DEVICE_BY_NAME_STARTED'
export const GET_DEVICE_BY_NAME_SUCCESS = 'GET_DEVICE_BY_NAME_SUCCESS'
export const GET_DEVICE_BY_NAME_FAILED = 'GET_DEVICE_BY_NAME_FAILED'
export const GET_DEVICE_BY_NAME_RESET = 'GET_DEVICE_BY_NAME_RESET'
export const GET_DEVICE_BY_NAME_CATEGORY_WISE_STARTED =
  'GET_DEVICE_BY_NAME_CATEGORY_WISE_STARTED'
export const GET_DEVICE_BY_NAME_CATEGORY_WISE_SUCCESS =
  'GET_DEVICE_BY_NAME_CATEGORY_WISE_SUCCESS'
export const GET_DEVICE_BY_NAME_CATEGORY_WISE_FAILED =
  'GET_DEVICE_BY_NAME_CATEGORY_WISE_FAILED'
export const GET_RELATED_PRODUCTS_STARTED = 'GET_RELATED_PRODUCTS_STARTED'
export const GET_RELATED_PRODUCTS_SUCCESS = 'GET_RELATED_PRODUCTS_SUCCESS'
export const GET_RELATED_PRODUCTS_FAILED = 'GET_RELATED_PRODUCTS_FAILED'

export const GET_VS_FOOTER_PRODUCTS_STARTED = 'GET_VS_FOOTER_PRODUCTS_STARTED'
export const GET_VS_FOOTER_PRODUCTS_SUCCESS = 'GET_VS_FOOTER_PRODUCTS_SUCCESS'
export const GET_VS_FOOTER_PRODUCTS_FAILED = 'GET_VS_FOOTER_PRODUCTS_FAILED'

export const GET_VS_MULTI_PRODUCTS_STARTED = 'GET_VS_MULTI_PRODUCTS_STARTED'
export const GET_VS_MULTI_PRODUCTS_SUCCESS = 'GET_VS_MULTI_PRODUCTS_SUCCESS'
export const GET_VS_MULTI_PRODUCTS_FAILED = 'GET_VS_MULTI_PRODUCTS_FAILED'


export const GET_CATEGORIES_FILTER_STARTED = 'GET_CATEGORIES_FILTER_STARTED'
export const GET_CATEGORIES_FILTER_SUCCESS = 'GET_CATEGORIES_FILTER_SUCCESS'
export const GET_CATEGORIES_FILTER_FAILED = 'GET_CATEGORIES_FILTER_FAILED'


export const GET_CB_FILTER_PRODUCTS_STARTED = 'GET_CB_FILTER_PRODUCTS_STARTED'
export const GET_CB_FILTER_PRODUCTS_SUCCESS = 'GET_CB_FILTER_PRODUCTS_SUCCESS'
export const GET_CB_FILTER_PRODUCTS_FAILED = 'GET_CB_FILTER_PRODUCTS_FAILED'
export const GET_CB_FILTER_PRODUCTS_RESET ='GET_CB_FILTER_PRODUCTS_RESET'
export function addItem(payload) {
  return {
    type: ADD_ITEM,
    payload
  };
}

export function removeItem(payload) {
  return {
    type: REMOVE_ITEM,
    payload
  };
}

export function resetItem(payload) {
  return {
    type: RESET_ITEM,
    payload
  }
}