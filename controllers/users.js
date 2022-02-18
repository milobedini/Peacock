import User from '../models/user.js'

export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}
export const getAllUsers = async (req, res) => {
  const users = await User.find()
  console.log(req.currentUser)
  const shuffled = shuffle(users)
  return res.status(200).json(shuffled)
}

export const getRandomUsers = async (_req, res) => {
  const users = await User.find()
  const shuffled = shuffle(users)
  shuffled.splice(7, 19)
  return res.status(200).json(shuffled)
}

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.currentUser._id)
    if (!user) throw new Error()
    return res.status(200).json(user)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Not Found' })
  }
}

export const updateAvatar = async (req, res) => {
  try {
    const { id } = req.params
    const updatedUser = await User.findByIdAndUpdate(id, {
      ...req.body,
      avatar: req.body.image,
      new: true,
    })
    return res.status(201).json(updatedUser)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Not Found' })
  }
}
