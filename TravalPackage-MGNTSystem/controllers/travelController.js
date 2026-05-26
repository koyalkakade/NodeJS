const packages=[
  {
    "id": 1,
    "packagename": "Beach Paradise Escape",
    "location": "Goa, India",
    "days": 5,
    "price": 12000
  },
  {
    "id": 2,
    "packagename": "Mountain Adventure Trek",
    "location": "Manali, India",
    "days": 7,
    "price": 18000
  },
  {
    "id": 3,
    "packagename": "Desert Safari Experience",
    "location": "Dubai, UAE",
    "days": 4,
    "price": 25000
  },
  {
    "id": 4,
    "packagename": "European Highlights Tour",
    "location": "Paris, Rome, Zurich",
    "days": 10,
    "price": 95000
  },
//   {
//     "id": 5,
//     "packagename": "Island Getaway",
//     "location": "Bali, Indonesia",
//     "days": 6,
//     "price": 30000
//   }
]


const getAllPackages = (req, res) => {
    try {
        res.status(200).send({ packages: packages })
    }
    catch (error) {
        res.status(500).send({ msg: "server error" })
    }
}

function createTravelPkg(req, res) {
    try {
        const { id,packagename, location, days, price} = req.body
        const newPkg = {
            id: Date.now(),
            packagename: packagename,
            location: location,
            days: days,
            price: price,
        }
        packages.push(newPkg)
        res.status(200).send({ msg: "Travel Packages added sucessfully.." })
    }
    catch (error) {
        res.status(500).send({ msg: "server error" })
    }
}

const getPkgById = (req, res) => {
    const { ID } = req.params
    try {
        const pkgById = packages.filter((e, i) => e.id == ID)
        if (pkgById.length > 0) {
            res.status(200).send({ package: pkgById })
        }
        else{
             res.status(404).send({ msg: "package not found" })
        }
    } catch (error) {
        res.status(500).send({ msg: "server error" })
    }

}

const updatePkg = (req, res) => {
    const { ID } = req.params;
    const { location } = req.body
    try {
        const index = packages.findIndex((e) => e.id == ID)
        if (index == -1) {
            res.status(404).send({ msg: "package not found" })
        }
        packages[index].location = location
        res.status(200).send({ msg: "Package updated secessfully" })

    } catch (error) {
        res.status(500).send({ msg: "server error" })
    }
}

const deletePkg = (req, res) => {
    const { ID } = req.params;
   // console.log(ID)
    try {
        const index = packages.findIndex((e) => e.id == ID)
        if (index == -1) {
            res.status(400).send({ msg: "package not found" })
        }
        packages.splice(index, 1)
        res.status(200).send({ msg: "package delete secessfully" })

    } catch (error) {
        res.status(500).send({ msg: "server error" })
    }
}

const getLocationWisePkg = (req, res) => {
    const location = req.query.location

    try {
        const result = packages.filter((e) => {
           return e.location.toLowerCase() === location.toLowerCase()
        }
        )
        // console.log(result)
        if (result.length > 0) {
            res.status(200).send({ locationWiseEmp: result })
        }
        else{
             res.status(203).send({ locationWiseEmp: "Data not found" })
        }

    } catch (error) {
        res.status(500).send({ msg: "server error" })
    }
}


module.exports={
    getAllPackages,createTravelPkg,getPkgById,updatePkg,deletePkg,getLocationWisePkg
}