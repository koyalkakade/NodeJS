const express=require('express')
const travelController=require('../controllers/travelController')
const router=express.Router()

router.get('/getAllPackages',travelController.getAllPackages)

router.post('/createTravelPkg',travelController.createTravelPkg)

router.get('/getPkgById/:ID',travelController.getPkgById)

router.patch('/updatePkg/:ID',travelController.updatePkg)

router.delete('/deletePkg/:ID',travelController.deletePkg)

router.get('/package/search',travelController.getLocationWisePkg)

module.exports=router