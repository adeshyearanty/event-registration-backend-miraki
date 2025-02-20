import mongoose from "mongoose";

const EventSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        fees: {
            type: Number,
            required: true,
        },
        imagePath: {
            type: String,
            required: true,
        },
    }
)

const EventsModel = mongoose.model("listofevents", EventSchema);
export default EventsModel