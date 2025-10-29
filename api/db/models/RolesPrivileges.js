const mongoose = require('mongoose');
const Schema = mongoose.Schema(
    {
        role_id: { type: mongoose.SchemaTypes.ObjectId, required: true },
        permission: { type: String, required: true },
        created_by:{ type: mongoose.SchemaTypes.ObjectId, required: true}
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

class RolesPrivileges extends mongoose.Model {

}

Schema.laodClass(RolesPrivileges);
module.exports = mongoose.Model('roles_privileges', Schema);