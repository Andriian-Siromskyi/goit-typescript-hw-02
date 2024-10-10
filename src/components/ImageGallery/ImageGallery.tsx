import { FC } from "react";
import { Image } from "../App/type";
import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Image[];
  onOpenModal: (image: Image) => void;
}

export const ImageGallery: FC<ImageGalleryProps> = ({
  images,
  onOpenModal,
}) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li key={image.id} className={css.galleryItem}>
          <ImageCard image={image} onOpenModal={onOpenModal} />
        </li>
      ))}
    </ul>
  );
};
