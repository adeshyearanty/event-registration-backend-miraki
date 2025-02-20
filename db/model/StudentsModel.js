import mongoose from "mongoose";
import "mongoose-type-email"

const EventSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: mongoose.SchemaTypes.Email,
            required: true,
            unique: true
        },
        rollNo: {
            type: Number,
            required: true,
            unique: true
        },
        mobile: {
            type: Number,
            required: true,
            unique: true
        },
        event: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        fees: {
            type: Number,
            required: true
        }
    }
)

const StudentsModel = mongoose.model("eventregistration", EventSchema)

export default StudentsModel