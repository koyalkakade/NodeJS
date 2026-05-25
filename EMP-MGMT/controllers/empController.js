
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
        "joiningDate": "2018-01-10",
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
        "joiningDate": "2014-03-20",
        "department": "Marketing"
    },
    {
        "id": "EMP005",
        "name": "Kavya Iyer",
        "email": "kavya.iyer@company.com",
        "address": "56 Anna Salai, Chennai, Tamil Nadu",
        "contactNumber": "9345678901",
        "dateOfBirth": "1993-05-12",
        "joiningDate": "2020-11-05",
        "department": "Operations"
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
        else{
             res.status(203).send({ departmentWiseEmp: "Data not found" })
        }

    } catch (error) {
        res.status(500).send({ msg: "server error" })
    }
}

const getJoiningMothWiseEmp=(req,res)=>{
      const month = req.query.month

    try {
        const result = emp.filter((e) => {
            // console.log(new Date(e.joiningDate).getMonth()+1)
           const joiningMonth= new Date(e.joiningDate).getMonth()+1
           return joiningMonth==month
        }
        )
        // console.log(result)
        if (result.length > 0) {
            res.status(200).send({ monthtWiseEmp: result })
        }
        else{
             res.status(203).send({ monthtWiseEmp: "Data not found" })
        }

    } catch (error) {
        res.status(500).send({ msg: "server error" })
    }
}

const getThisMonthBirthdayEmp=(req,res)=>{
      const currentMonth= new Date().getMonth()+1
      // console.log('currentMonth- ',currentMonth)
    try {
        const result = emp.filter((e) => {
           const birthMonth= new Date(e.dateOfBirth).getMonth()+1
          //  console.log('birthMonth- ',currentMonth)
           return birthMonth===currentMonth
        }
        )
        // console.log(result)
        if (result.length > 0) {
            res.status(200).send({ ThisMonthtBirthdayEmp: result })
        }
        else{
             res.status(203).send({ ThisMonthtBirthdayEmp: "Data not found" })
        }

    } catch (error) {
        res.status(500).send({ msg: "server error" })
    }

}



module.exports = { getAllEmp, createEmp, deleteEmp, updateEmp, getEmpById,
     getDepartmentWiseEmployee,getJoiningMothWiseEmp,getThisMonthBirthdayEmp }
