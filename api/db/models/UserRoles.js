const mongoose = require('mongoose');
const Schema = mongoose.Schema(
    {
        role_id: { type: mongoose.SchemaTypes.ObjectId, required: true },
        user_id: { type: mongoose.SchemaTypes.ObjectId, required: true },
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

class UserRoles extends mongoose.Model {

}

Schema.laodClass(UserRoles);
module.exports = mongoose.Model('use_roles', Schema);