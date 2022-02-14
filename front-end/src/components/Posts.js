// import styles from '../styles/Posts.module.scss'
import Post from './Post'

const testData = [
  {
    id: '1',
    username: 'milobedini',
    userImage:
      'https://res.cloudinary.com/dvgbdioec/image/upload/v1641473906/x92clfsasiacrsyoxci6.jpg',
    postImage:
      'https://res.cloudinary.com/dvgbdioec/image/upload/v1644768223/peacock_yevwhu.png',
    caption: 'Spread your wings. ',
  },
  {
    id: '2',
    username: 'milobedini',
    userImage:
      'https://res.cloudinary.com/dvgbdioec/image/upload/v2641473906/x92clfsasiacrsyoxci6.jpg',
    postImage:
      'https://res.cloudinary.com/dvgbdioec/image/upload/v1644768223/peacock_yevwhu.png',
    caption: 'Spread your wings. ',
  },
  {
    id: '3',
    username: 'milobedini',
    userImage:
      'https://res.cloudinary.com/dvgbdioec/image/upload/v1641473906/x92clfsasiacrsyoxci6.jpg',
    postImage:
      'https://res.cloudinary.com/dvgbdioec/image/upload/v1644768223/peacock_yevwhu.png',
    caption: 'Spread your wings. ',
  },
]

const Posts = () => {
  return (
    <div>
      {testData.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImage={post.userImage}
          postImage={post.postImage}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
