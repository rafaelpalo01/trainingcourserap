const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please input your first name'],
        maxlength: [40, 'First Name cannot be more than 40 characters']
    },
    lastName: {
        type: String,
        required: [true, 'Please input your last name'],
        maxlength: [40, 'Last Name cannot be more than 40 characters']
    },
    email: {
        type: String,
        required: [true, 'Please input your email'],
        maxlength: [200, 'Email cannot be more than 40 characters']
    },
    contact: {
        type: String,
        required: [true, 'Please input your contact number'],
        maxlength: [40, 'Contact number cannot be more than 40 characters']
        
    },
    address: {
        type: String,
        required: [true, 'Please input your address'],
        maxlength: [200, 'Address cannot be more than 40 characters']
    }
})

module.exports = mongoose.models.Course || mongoose.model('Course', CourseSchema);
