const mongoose = require('mongoose');
const Schema = mongoose.Schema(
    {
        is_active: { type: Boolean, default: true },
        created_by:{type: mongoose.SchemaTypes.ObjectId, required: true,}
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

class Categories extends mongoose.Model {

}

Schema.laodClass(Categories);
module.exports = mongoose.Model('categories', Schema);