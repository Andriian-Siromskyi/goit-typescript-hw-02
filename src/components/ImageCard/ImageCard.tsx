import { FC } from "react";
import { Image } from "../App/type";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  image: Image;
  onOpenModal: (image: Image) => void;
}

export const ImageCard: FC<ImageCardProps> = ({ image, onOpenModal }) => {
  return (
    <div className={css.itemImg}>
      <img
        onClick={() => onOpenModal(image)}
        src={image.urls.small_s3}
        alt={image.description}
        className={css.galleryImg}
      />
    </div>
  );
};
