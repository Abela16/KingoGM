import mongoose from 'mongoose';
import bcript from 'bcryptjs';

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: { 
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'trainer', 'member'],
    default: 'member',
  },
  profileImage: {
    type: String,
  },
  phone: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true, 
  },
}, { timestamps: true });

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcript.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcript.genSalt(10);
  this.password = await bcript.hash(this.password, salt);
}
);

export default mongoose.model("User", userSchema);