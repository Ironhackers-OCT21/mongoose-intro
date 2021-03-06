const mongoose = require('mongoose');

let StudentModel = require('./models/Students.model')

//Create
//Read
//Update
//Delete

mongoose.connect('mongodb://localhost:27017/ironhack')
    .then(() => {
        console.log('Yayyy, my DB got connected!')

        // Deletes everything from the DB
        return StudentModel.deleteMany()
    })
    .then(() => {    

        //Creates one items
        return StudentModel.create({name:'Manish'})
    })
    .then((data) => {
        //console.log(data)

        let myData = [
            {name:'Taka', age: 21, country: 'France'},
            {name:'Joanne', age: 12},
            {name:'George', age: 23}
        ]
        //Create many items
        return StudentModel.insertMany(myData)
    })
    .then((manyData) => {
        //console.log(manyData)

        //Find/Read
        // StudentModel.findById()
        // StudentModel.findOne()

        // Second parameter are your projections
       return StudentModel.find({name: 'Taka'}, {age: 1, _id: 0})

    })
    .then((dataFound) => {
        //console.log(dataFound)

        // Update
        // StudentModel.findByIdAndUpdate(id, {})
        // StudentModel.updateMany()

        // Update does not validate , so you need to st an extra flag `runValidators` to true for that
        return StudentModel.updateOne({name:'Joanne'}, {country: 'Austria'}, {runValidators: true})

    })
    .then((updatedDoc) => {
        // console.log(updatedDoc)


        //Delete
        //StudentModel.findOneAndDelete(id)
        //StudentModel.findByIdAndDelete('618d29d01bf47468d171f1fc')
        //StudentModel.deleteOne({name:'George'})
        StudentModel.deleteMany({name:'George'})

    })
    .catch((err) => {
        console.log('DB connection error!', err)
    })