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
export const getAllUsers = async (_req, res) => {
  const users = await User.find()
  const shuffled = shuffle(users)
  return res.status(200).json(shuffled)
}

export const getRandomUsers = async (_req, res) => {
  const users = await User.find()
  const shuffled = shuffle(users)
  shuffled.splice(6, 19)
  return res.status(200).json(shuffled)
}
