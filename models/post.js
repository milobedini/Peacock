import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const commentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, maxlength: 300 },
    owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
)

const postSchema = new mongoose.Schema({
  image: { type: String, required: true },
  description: { type: String, required: true, maxlength: 350 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [commentSchema],
  likedBy: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  views: { type: Number, min: 0, default: 0 },
})

postSchema.set('toJSON')

postSchema.plugin(uniqueValidator)

export default mongoose.model('Post', postSchema)
