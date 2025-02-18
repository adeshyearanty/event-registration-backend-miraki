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
            required: true
        },
        rollNo: {
            type: Number,
            required: true
        },
        mobile: {
            type: Number,
            required: true
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

const Event = mongoose.model("EventRegistrations", EventSchema)

export default Event