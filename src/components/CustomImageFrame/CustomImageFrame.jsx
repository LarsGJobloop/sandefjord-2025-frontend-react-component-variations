import style from './CustomImageFrame.module.css'

export function CustomImageFrame({ src, alt }) {
  return (
    <div className={style.container}>
      <img src={src} alt={alt} />
    </div>
  )
}

// using the property object directly
export function CustomImageFrameA(properties) {
  return (
    <img src={properties.src} alt="" />
  )
}

// Using destructuring
export function CustomImageFrameB(properties) {
  const { src } = properties

  return (
    <img src={src} alt="" />
  )
}
