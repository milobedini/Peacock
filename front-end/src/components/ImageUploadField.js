import axios from 'axios'
import styles from '../styles/EditPost.module.scss'

const uploadUrl = process.env.REACT_APP_CLOUDINARY_URL
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

const ImageUploadField = ({ value, handleImageUrl, oldImage }) => {
  const handleUpload = async (event) => {
    const data = new FormData()
    data.append('file', event.target.files[0])
    data.append('upload_preset', uploadPreset)

    const res = await axios.post(uploadUrl, data)
    handleImageUrl(res.data.url)
  }

  return (
    <div className={styles.imgUploadDiv}>
      {value ? (
        <div className={styles.previewPic}>
          <img src={value} alt="" />
        </div>
      ) : (
        <>
          {oldImage && (
            <div className={styles.previewPic}>
              <img src={oldImage} alt="" />
            </div>
          )}
          <input
            type="file"
            id="image"
            name="image"
            placeholder="Your Photo"
            onChange={handleUpload}
          />
          <label className={styles.formLabel} htmlFor="image"></label>
        </>
      )}
    </div>
  )
}

export default ImageUploadField
