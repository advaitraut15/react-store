"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearAllFilters = exports.changeSearchInput = exports.changePriceFilter = exports.removeProduct = exports.editProduct = exports.setProducts = void 0;

var actionTypes = _interopRequireWildcard(require("./actionsType"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var setProducts = function setProducts(products) {
  return {
    type: actionTypes.SET_PRODUCTS,
    products: products
  };
};

exports.setProducts = setProducts;

var editProduct = function editProduct(product) {
  return {
    type: actionTypes.EDIT_PRODUCT,
    product: product
  };
};

exports.editProduct = editProduct;

var removeProduct = function removeProduct(id) {
  return {
    type: actionTypes.REMOVE_PRODUCT,
    id: id
  };
};

exports.removeProduct = removeProduct;

var changePriceFilter = function changePriceFilter(order) {
  return {
    type: actionTypes.CHANGE_PRICE_FILTER,
    priceFilter: order
  };
};

exports.changePriceFilter = changePriceFilter;

var changeSearchInput = function changeSearchInput(payload) {
  return {
    type: actionTypes.CHANGE_SEARCH_RESULT,
    payload: payload
  };
};

exports.changeSearchInput = changeSearchInput;

var clearAllFilters = function clearAllFilters() {
  return {
    type: actionTypes.CLEAR_ALL_FILTER
  };
};

exports.clearAllFilters = clearAllFilters;