
export class ImageRepository {

    static images = [];

    static setImages(images){
       ImageRepository.images = images;
    }

    static getImageById(imageId){
        var found = null;
        for (var image of ImageRepository.images){
            if(image.id.toString() === imageId){
                found = image;
                break;
            }
        }
        return found;
    }
}