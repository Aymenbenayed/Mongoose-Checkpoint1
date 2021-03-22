//require express
const express = require('express')

//routes 
const router = express.Router()

//require user model 
const User = require ('../models/User')

const {postUser,getAllUsers,getUser,deleteUser,editUser} = require('../controllers/usercontroller')

    //*********** Routes ********** */




/**
 * @desc : test route
 * @method : GET
 * @path : http://localhost:7000/api/users/test
 * @data : nothing
 * @acess : public
 */
router.get('/test', (req, res) => {
    res.status(200).send('Hello test')
})



/**
 * @desc : add user
 * @method : POST
 * @path : http://localhost:7000/api/users
 * @data : req.body
 * @acess : public
 */
router.get('./',postUser)




/**
 * @desc : get all users
 * @method : GET
 * @path : http://localhost:7000/api/users
 * @data : no data
 * @acess : public
 */
router.get('/', getAllUsers)





/**
 * @desc : get one user
 * @method : GET
 * @path : http://localhost:7000/api/users/:_id
 * @data : req.params
 * @acess : public
 */
router.get('/:_id', getUser)




/**
 * @desc : delete user
 * @method : DELETE
 * @path : http://localhost:7000/api/users/:_id
 * @data : req.params
 * @acess : public
 */
router.delete('/:_id', deleteUser)




/**
 * @desc : edit user
 * @method : PUT
 * @path : http://localhost:7000/api/users/:_id
 * @data : req.params & req.body
 * @acess : public
 */
router.put('/:_id', editUser)



module.exports = router