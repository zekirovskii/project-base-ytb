const mongoose = require('mongoose');
const Schema = mongoose.Schema(
    {
        level: String,
        email: String,
        location: String,
        proc_type: String,
       log:String
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

class AuditLogs extends mongoose.Model {

}

Schema.laodClass(AuditLogs);
module.exports = mongoose.Model('audit_logs', Schema);