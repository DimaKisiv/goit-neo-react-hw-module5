/**
 * Service to build TMDB image URLs.
 * Usage:
 *   movieApiImagesService.getImageUrl('/1E5baAaEse26fej7uHcjOgEE2t2.jpg', 'w500')
 *   movieApiImagesService.getLogoUrl('wwemzKWzjKYJFfCeiB57q3r4Bcm', 'svg')
 */

const BASE_URL = "https://image.tmdb.org/t/p/";

class ImagesService {
  getImageUrl(filePath, size = "w500") {
    if (!filePath) return "";
    return `${BASE_URL}${size}${filePath}`;
  }

  getLogoUrl(logoPath, type = "svg") {
    if (!logoPath) return "";
    return `${BASE_URL}original/${logoPath}.${type}`;
  }
}

const imagesService = new ImagesService();
export default imagesService;
