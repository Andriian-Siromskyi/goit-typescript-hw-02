import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { Image } from "../App/type";
import { FC } from "react";

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image;
}

export const ImageModal: FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  image,
}) => {
  // console.log(image);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img
        src={image.urls.regular}
        alt={image.description}
        className={css.img}
      />
    </Modal>
  );
};
