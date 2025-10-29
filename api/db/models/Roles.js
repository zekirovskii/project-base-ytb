const mongoose = require('mongoose');
const Schema = mongoose.Schema(
    {
        role_name: {type: String, required: true, unique: true},
        is_active: {type: Boolean, default: true},
        created_by: {
            type: mongoose.SchemaTypes.ObjectId,
            required: true,
            }
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