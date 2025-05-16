import imagesService from "../../services/images.service";
import styles from "./MovieImage.module.css";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

export function MovieImage({
  image,
  pathKey = "poster_path",
  altKey = "title",
  size = "w200",
}) {
  const path = image?.[pathKey];
  const alt = image?.[altKey] || "";
  const src = path ? imagesService.getImageUrl(path, size) : defaultImg;
  return <img className={styles.img} src={src} alt={alt} />;
}
