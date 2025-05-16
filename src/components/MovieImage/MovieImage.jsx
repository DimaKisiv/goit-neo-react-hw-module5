import imagesService from "../../services/images.service";
import styles from "./MovieImage.module.css";

export function MovieImage({
  image,
  pathKey = "poster_path",
  altKey = "title",
  size = "w200",
}) {
  const path = image?.[pathKey];
  const alt = image?.[altKey] || "";
  if (!path) return null;
  return <img className={styles.img} src={imagesService.getImageUrl(path, size)} alt={alt} />;
}
