
const emp = [
    {
        "id": "1",
        "name": "Priya Sharma",
        "email": "priya.sharma@company.com",
        "address": "12 MG Road, Pune, Maharashtra",
        "contactNumber": "9876543210",
        "dateOfBirth": "1990-03-15",
        "joiningDate": "2015-07-01",
        "department": "Human Resources"
    },
    {
        "id": "EMP002",
        "name": "Arjun Mehta",
        "email": "arjun.mehta@company.com",
        "address": "45 Nehru Nagar, Mumbai, Maharashtra",
        "contactNumber": "9123456789",
        "dateOfBirth": "1988-11-22",
        "joiningDate": "2013-09-16",
        "department": "IT"
    },
    {
        "id": "EMP003",
        "name": "Sneha Patil",
        "email": "sneha.patil@company.com",
        "address": "78 FC Road, Pune, Maharashtra",
        "contactNumber": "9988776655",
        "dateOfBirth": "1992-06-05",
        "joiningDate": "2019-09-15",
        "department": "Finance"
    },
    {
        "id": "EMP004",
        "name": "Rohan Kapoor",
        "email": "rohan.kapoor@company.com",
        "address": "23 Connaught Place, New Delhi",
        "contactNumber": "9765432109",
        "dateOfBirth": "1985-02-28",
        "joiningDate": "2020-11-05",
        "department": "Marketing"
    },
    {
        "id": "EMP005",
        "name": "Kavya Iyer",
        "email": "kavya.iyer@company.com",
        "address": "56 Anna Salai, Chennai, Tamil Nadu",
        "contactNumber": "9345678901",
        "dateOfBirth": "1993-05-12",
        "joiningDate": "2017-10-05",
        "department": "Operations"
    },
    {
        "id": 6,
        "name": "Alice",
        "email": "kavya.iyer@company.com",
        "address": "56 Anna Salai, Chennai, Tamil Nadu",
        "contactNumber": "9345678901",
        "dateOfBirth": "1993-05-12",
        "joiningDate": "2017-10-05",
        "department": "HR"
    }
];




const getAllEmp = (req, res) => {
    try {
        res.status(200).send({ employes: emp })
    }
    catch (error) {
        res.status(500).send({ msg: "server error" })
    }
}

function createEmp(req, res) {
    try {
        const { name, email, address, contactNumber, joiningDate, dateOfBirth, department } = req.body
        const newEmp = {
            id: Date.now(),
            name: name,
            email: email,
            address: address,
            contactNumber: contactNumber,
            joiningDate: joiningDate,
            dateOfBirth: dateOfBirth,
            department: department
        }
        emp.push(newEmp)
        res.status(200).send({ msg: "Emp added sucessfully.." })
    }
    catch (error) {
        res.status(500).send({ msg: "server error" })
    }
}

const deleteEmp = (req, res) => {
    const { ID } = req.params;
    console.log(ID)
    try {
        const index = emp.findIndex((e) => e.id == ID)
        if (index == -1) {
            res.status(400).send({ msg: "employee not found" })
        }
        emp.splice(index, 1)
        res.status(200).send({ msg: "employee delete secessfully" })

    } catch (error) {
        res.status(500).send({ msg: "server error" })
    }
}

const updateEmp = (req, res) => {
    const { ID } = req.params;
    const { address } = req.body
    try {
        const index = emp.findIndex((e) => e.id == ID)
        if (index == -1) {
            res.status(400).send({ msg: "employee not found" })
        }
        emp[index].address = address
        res.status(200).send({ msg: "employee updated secessfully" })

    } catch (error) {
        res.status(500).send({ msg: "server error" })
    }
}

const getEmpById = (req, res) => {
    const { ID } = req.params
    try {
        const empById = emp.filter((e, i) => e.id == ID)
        if (empById.length > 0) {
            res.status(200).send({ employee: empById })
        }
    } catch (error) {
        res.status(500).send({ msg: "server error" })
    }

}

const getDepartmentWiseEmployee = (req, res) => {
    const department = req.query.department

    try {
        const result = emp.filter((e) => {
            return e.department.toLowerCase() === department.toLowerCase()
        }
        )
        // console.log(result)
        if (result.length > 0) {
            res.status(200).send({ departmentWiseEmp: result })
        }
        else {
            res.status(203).send({ departmentWiseEmp: "Data not found" })
        }

    } catch (error) {
        res.status(500).send({ msg: "server error" })
    }
}

const getJoiningMothWiseEmp = (req, res) => {
    const month = req.query.month

    try {
        const result = emp.filter((e) => {
            // console.log(new Date(e.joiningDate).getMonth()+1)
            const joiningMonth = new Date(e.joiningDate).getMonth() + 1
            return joiningMonth == month
        }
        )
        // console.log(result)
        if (result.length > 0) {
            res.status(200).send({ monthtWiseEmp: result })
        }
        else {
            res.status(203).send({ monthtWiseEmp: "Data not found" })
        }

    } catch (error) {
        res.status(500).send({ msg: "server error" })
    }
}

const getThisMonthBirthdayEmp = (req, res) => {
    const currentMonth = new Date().getMonth() + 1
    // console.log('currentMonth- ',currentMonth)
    try {
        const result = emp.filter((e) => {
            const birthMonth = new Date(e.dateOfBirth).getMonth() + 1
            //  console.log('birthMonth- ',currentMonth)
            return birthMonth === currentMonth
        }
        )
        // console.log(result)
        if (result.length > 0) {
            res.status(200).send({ ThisMonthtBirthdayEmp: result })
        }
        else {
            res.status(203).send({ ThisMonthtBirthdayEmp: "Data not found" })
        }

    } catch (error) {
        res.status(500).send({ msg: "server error" })
    }

}

const getEmployeeByName = (req, res) => {
    const name = req.query.name

    try {
        const result = emp.filter((e) => {
            return e.name.toLowerCase() === name.toLowerCase()
            //  console.log(e.name.toLowerCase())
            //   console.log(name.toLowerCase())
        }
        )
        // console.log(result)
        if (result.length > 0) {
            res.status(200).send({ EmployeeByName: result })
        }
        else {
            res.status(203).send({ EmployeeByName: "Data not found" })
        }

    } catch (error) {
        res.status(500).send({ msg: "server error" })
    }
}

const getEmployeeByCity = (req, res) => {
    const city = req.query.city
    //console.log(city)
    try {
        const result = emp.filter((e) => {
            return e.address.toLowerCase() === city.toLowerCase()
        }
        )
        // console.log(result)
        if (result.length > 0) {
            res.status(200).send({ EmployeeByCity: result })
        }
        else {
            res.status(203).send({ EmployeeByCity: "Data not found" })
        }

    } catch (error) {
        res.status(500).send({ msg: "server error" })
    }
}

const sortByJoiningDate = (req, res) => {
    try {
        const sortEmp = emp.sort((a, b) => new Date(a.joiningDate) - new Date(b.joiningDate));
        if (sortEmp.length > 0) {
            res.status(200).send({ sortByJoiningDate: sortEmp })
        }
        else {
            res.status(203).send({ sortByJoiningDate: "Data not found" })
        }

    }
    catch (error) {
        res.status(500).send({ msg: "server error" })
    }
}

const sortByName = (req, res) => {
    try {
        const sortEmpByName = emp.sort((a, b) => a.name.localeCompare(b.name))
        if (sortEmpByName.length > 0) {
            res.status(200).send({ sortEmpByName: sortEmpByName })
        }
        else {
            res.status(203).send({ sortEmpByName: "Data not found" })
        }

    }
    catch (error) {
        res.status(500).send({ msg: "server error" })
    }
}

const getAllEmpCount = (req, res) => {
    try {
        const count = emp.length
        if (emp.length > 0) {
            res.status(200).send({ EmpCount: count })
        }
        else {
            res.status(203).send({ EmpCount: "Data not found" })
        }

    }
    catch (error) {
        res.status(500).send({ msg: "server error" })
    }
}

const getTotalDepartmentWise = (req, res) => {
    try {
        const depWiseCount = emp.reduce((acc, e) => {
            acc[e.department] = (acc[e.department] || 0) + 1
            return acc
        }, {})
        //console.log(depWiseCount);
        if (!depWiseCount) {
            res.status(203).send({ depWiseCount: "Data not found" })
        }
        else {
            res.status(200).send({ depWiseCount: depWiseCount })
        }

    }
    catch (error) {
        res.status(500).send({ msg: "server error" })
    }
}

const getOldestEmp = (req, res) => {
    try {
        const oldestEmp = emp.reduce((prev, current) => {
            return (new Date(prev.dateOfBirth) < new Date(current.dateOfBirth)) ? prev : current;
        })
        //console.log(depWiseCount);
        if (!oldestEmp) {
            res.status(203).send({ oldestEmp: "Data not found" })
        }
        else {
            res.status(200).send({ oldestEmp: oldestEmp })
        }

    }
    catch (error) {
        res.status(500).send({ msg: "server error" })
    }
}

const getNewestJoinedEmp = (req, res) => {
    try {
        const newestJoinedEmp = emp.reduce((prev, current) => {
            return (new Date(prev.joiningDate) < new Date(current.joiningDate)) ? current : prev;
        })
        //console.log(depWiseCount);
        if (!newestJoinedEmp) {
            res.status(203).send({ newestJoinedEmp: "Data not found" })
        }
        else {
            res.status(200).send({ newestJoinedEmp: newestJoinedEmp })
        }

    }
    catch (error) {
        res.status(500).send({ msg: "server error" })
    }
}

const filterEmployeeTwoJoiningDates = (req, res) => {
    const start = req.query.start
    const end = req.query.end
    //console.log(city)
    try {
        const result = emp.filter((e) => {
            return new Date(e.joiningDate) >= new Date(start) && new Date(e.joiningDate) <= new Date(end)
        }
        )
        // console.log(result)
        if (result.length > 0) {
            res.status(200).send({ EmployeeByCity: result })
        }
        else {
            res.status(203).send({ EmployeeByCity: "Data not found" })
        }

    } catch (error) {
        res.status(500).send({ msg: "server error" })
    }
}

const updateAllEmpDetails = (req, res) => {
    const { ID } = req.params;
    const { name, email, address, contactNumber, joiningDate, dateOfBirth, department } = req.body
    try {
        const index = emp.findIndex((e) => e.id == ID)
        if (index == -1) {
            res.status(400).send({ msg: "employee not found" })
        }
        emp[index].name = name
        emp[index].email = email
        emp[index].address = address
        emp[index].contactNumber = contactNumber
        emp[index].joiningDate = joiningDate
        emp[index].dateOfBirth = dateOfBirth
        emp[index].department = department
        res.status(200).send({ msg: "employee updated secessfully" })

    } catch (error) {
        res.status(500).send({ msg: "server error" })
    }
}

module.exports = {
    getAllEmp, createEmp, deleteEmp, updateEmp, getEmpById,
    getDepartmentWiseEmployee, getJoiningMothWiseEmp, getThisMonthBirthdayEmp,
    getEmployeeByName, getEmployeeByCity, sortByJoiningDate, sortByName, getAllEmpCount,
    getTotalDepartmentWise, getOldestEmp, getNewestJoinedEmp, filterEmployeeTwoJoiningDates,
    updateAllEmpDetails
}
