'use strict';

const express = require('express');

const Categories = require('../models/categories.js');
const categories = new Categories();

const router = express.Router();

// ROUTES
router.get('/api/v1/categories', getCategories);
router.post('/api/v1/categories', postCategories);

router.get('/api/v1/categories/:id', getCategory);
router.put('/api/v1/categories/:id', putCategories);
router.delete('/api/v1/categories/:id', deleteCategories);

// FUNCTIONS.
/**
 *Gets all categories
 *
 * @param {object} request
 * @param {object} response.status
 * @param {object} next
 */
function getCategories(request,response,next) {
  // expects an array of object to be returned from the model
  categories.get()
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch( next );
}

/**
 *Gets one category by id
 *
 * @param {object} request.paramas.id
 * @param {object} response.status
 * @param {object} next
 */
function getCategory(request,response,next) {
  // expects an array with the one matching record from the model
  categories.get(request.params.id)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}

/**
 *Posts a new Category
 *
 * @param {object} request.body
 * @param {object} response.status
 * @param {object} next
 */
function postCategories(request,response,next) {
  // expects the record that was just added to the database
  categories.post(request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}


/**
 *Updates an existing category
 *
 * @param {object} request.params.id
 * @param {object} response.status
 * @param {object} next
 */
function putCategories(request,response,next) {
  // expects the record that was just updated in the database
  categories.put(request.params.id, request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

/**
 *Deletes an existing category by id
 *
 * @param {object} request.params.id
 * @param {object} response.status
 * @param {object} next
 */
function deleteCategories(request,response,next) {
  // Expects no return value (resource was deleted)
  categories.delete(request.params.id)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

module.exports = router;
