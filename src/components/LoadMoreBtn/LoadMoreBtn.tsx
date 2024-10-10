import { FC, Ref } from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreProps {
  onClick: () => void;
  loadMoreRef: Ref<HTMLButtonElement>;
}

export const LoadMoreBtn: FC<LoadMoreProps> = ({ onClick, loadMoreRef }) => {
  return (
    <button onClick={onClick} className={css.loadMoreBtn} ref={loadMoreRef}>
      Load more
    </button>
  );
};
