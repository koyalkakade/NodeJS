const express=require('express')
const empController=require('../controllers/empController')
const router=express.Router()

router.get('/getAllEmp',empController.getAllEmp)

router.post('/createEmp',empController.createEmp)

router.delete('/deleteEmp/:ID',empController.deleteEmp)

router.patch('/updateEmp/:ID',empController.updateEmp)

router.get('/getEmpById/:ID',empController.getEmpById)

router.get('/department/search',empController.getDepartmentWiseEmployee)

router.get('/month/search',empController.getJoiningMothWiseEmp)

router.get('/getThisMonthBirthdayEmp',empController.getThisMonthBirthdayEmp)

module.exports=router
