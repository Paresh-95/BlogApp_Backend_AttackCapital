import express  from 'express'
const router = express.Router()

import {auth} from "../middlewares/auth-middleware.js"
import {signup,login,logout, getUserDetails,getAuthState} from "../controllers/UserController.js"



router.post('/auth/signup',signup)
router.post('/auth/login',login)
router.get('/auth/user',auth,getUserDetails)
router.get('/auth/isAuth',auth,getAuthState)
router.post('/auth/logout',logout)




export default router;