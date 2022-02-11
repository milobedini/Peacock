import React from 'react'

const PostPreview = ({ image, description, owner, views, createdAt }) => {
  return (
    <div className="post-preview">
      <h2>
        <img src={image} alt={`from  ${owner.fullname.split(' ')[0]}`} />
      </h2>
      <p>{description}</p>
      <p>{owner.fullname}</p>
      <p>{views} views</p>
      <p>Posted at {createdAt}</p>
    </div>
  )
}

export default PostPreview
