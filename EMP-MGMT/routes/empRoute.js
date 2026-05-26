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

router.get('/name/search',empController.getEmployeeByName)

router.get('/city/search',empController.getEmployeeByCity)

router.get('/sortByJoiningDate',empController.sortByJoiningDate)

router.get('/sortByName',empController.sortByName)

router.get('/getAllEmpCount',empController.getAllEmpCount)

router.get('/getTotalDepartmentWise',empController.getTotalDepartmentWise)

router.get('/getOldestEmp',empController.getOldestEmp)

router.get('/getNewestJoinedEmp',empController.getNewestJoinedEmp)

router.get('/filter',empController.filterEmployeeTwoJoiningDates)

router.patch('/updateAllEmpDetails/:ID',empController.updateAllEmpDetails)

module.exports=router
