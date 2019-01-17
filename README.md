![CF](http://i.imgur.com/7v5ASc8.png) LAB 13
=================================================

## lab 13 Rest-Server

### Author: Ryan Gallaway

### Links and Resources

[![Build Status](https://www.travis-ci.com/rkgallaway/13-rest-server.svg?branch=master)](https://www.travis-ci.com/rkgallaway/13-rest-server)

* [repo](https://github.com/rkgallaway/13-rest-server)
* [travis](https://www.travis-ci.com/rkgallaway/13-rest-server)
* [back-end](https://lab-13-rest-server-rg.herokuapp.com)

#### Documentation
<!-- * [swagger](http://xyz.com) (API assignments only) -->
<!-- * [jsdoc](http://xyz.com) (All assignments) -->

### Modules
#### `modulename.js`
##### Exported Values and Methods

## Assignment 1: Data Modeling
* The provided API server is setup to work, but the data models are incomplete
* Implement 2 data models, in different manners, using only TDD
* Do not use the server routes to test the models. Once you're finished the TDD, the server should "just work", so long as your models obey the contract (noted in the routes)
  * **Categories**
    * Create this as an in-memory model
    * The model class should hold and manage the data
    * The model class should expose methods that match REST verbs
      * `get()`
      * `post()`
      * `put()`
      * `delete()`
  * **Products**
    * Create this as a mongoose model
    * Create a mongoose schemas for this collection
    * The model class should expose methods that match REST verbs
      * `get()`
      * `post()`
      * `put()`
      * `delete()`
* Write a full suite of tests 
      
## Assignment 2: Back Up The Truck...
Whoops.  Because ... 'reasons', you are being forced to unwind all of that hard work you just did and de-modularize the server code back into a "monolith"

### Setup
#### `.env` requirements
* `PORT` - Port define in ENV
 * [`MONGODB_URI` click](mongodb://heroku_v8g738d2:v49rqr9l6ls5arcabhpc68afn0@ds153814.mlab.com:53814/heroku_v8g738d2)

#### Running the app
* `npm start`
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it.
  
#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?

#### UML
Link to an image of the UML for your application and response to events
