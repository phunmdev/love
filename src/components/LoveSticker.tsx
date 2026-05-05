import "./LoveSticker.css";

type LoveStickerProps = {
  variant: "question" | "celebration";
};

const stickerSrcByVariant: Record<LoveStickerProps["variant"], string> = {
  question: "/question.gif",
  celebration: "/celebration.gif",
};

export function LoveSticker({ variant }: LoveStickerProps) {
  return (
    <div className={`love-sticker love-sticker--${variant}`} aria-hidden="true">
      <img
        className="love-sticker__image"
        src={stickerSrcByVariant[variant]}
        alt=""
        draggable={false}
      />
    </div>
  );
}
