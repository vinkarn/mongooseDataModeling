import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
    },

    worksInHospital: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
      },
    ], //if we want to store some other thing related to this too, we can do that by declaring our own schema and passing it in array of this field
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
