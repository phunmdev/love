import "./LoveSticker.css";

type LoveStickerProps = {
  variant: "question" | "celebration";
};

export function LoveSticker({ variant }: LoveStickerProps) {
  return (
    <div className={`love-sticker love-sticker--${variant}`} aria-hidden="true">
      <span className="sticker-glow" />
      <span className="sticker-envelope">
        <span className="sticker-flap" />
        <span className="sticker-note">
          <span className="sticker-note-heart" />
        </span>
      </span>
      <span className="sticker-heart sticker-heart-one" />
      <span className="sticker-heart sticker-heart-two" />
      <span className="sticker-heart sticker-heart-three" />
      <span className="sticker-spark sticker-spark-one" />
      <span className="sticker-spark sticker-spark-two" />
    </div>
  );
}
