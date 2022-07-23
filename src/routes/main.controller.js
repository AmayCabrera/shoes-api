const express = require('express')

const dummyRouter = require('./dummyes/index')
const shoesRouter = require('./shoes/index')
// const customerRouter = require('./customers/index')

const routerApi = (app) => {
    //const router = express.Router()
    app.use('/dummy', dummyRouter)
    app.use('/shoes', shoesRouter)
    // router.use('/customers', customerRouter)
}

module.exports = routerApi
