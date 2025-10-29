const mongoose = require('mongoose');
const Schema = mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        first_name: { type: String},
        last_name: { type: String},
        is_active: { type: Boolean, default: true },
        created_by: {
            type: mongoose.SchemaTypes.ObjectId,
            required: true,
        },
        phoneNumber: { type: String }
    },
    {
        // timeStamps: true,
        versionKEy: false,
        timeStamps: {
            createdAt: 'created_at',
            updateAt: 'updated_at'
        }
    }
)

class Roles extends mongoose.Model {

}

Schema.laodClass(Roles);
module.exports = mongoose.Model('roles', Schema);