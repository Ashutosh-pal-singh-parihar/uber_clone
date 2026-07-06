const express = require('express')
const { body } = require("express-validator")
const router = express.Router()
const captainController = require("../controllers/captain.controller")


router.post('/register', [
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({min : 3}).withMessage('min length of firstname shoould be 3'),
    body('password').isLength({min : 6}).withMessage("pasword must be at least be 6 char long"),
    body('vehicle.color').isLength({ min : 3}).withMessage('color must be at least 3 char long'),
    body('vehicle.plate').isLength({ min : 3}).withMessage('plate must be at least 3 char long'),
    body('vehicle.capacity').isInt({ min : 1}).withMessage('capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid vehicle type'),
], captainController.registerCaptain )

module.exports = router