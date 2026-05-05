import "./LoveSticker.css";

type LoveStickerProps = {
  variant: "question" | "celebration";
};

export function LoveSticker({ variant }: LoveStickerProps) {
  return (
    <div className={`love-sticker love-sticker--${variant}`} aria-hidden="true">
      <svg className="sticker-art" viewBox="0 0 260 210">
        <rect className="sticker-card" x="26" y="18" width="208" height="158" rx="18" />

        <g className="sticker-hearts">
          <path
            className="mini-heart mini-heart-one"
            d="M131 45c-6-7-18-3-18 7 0 12 18 21 18 21s18-9 18-21c0-10-12-14-18-7z"
          />
          <path
            className="mini-heart mini-heart-two"
            d="M170 58c-4-5-12-2-12 5 0 8 12 14 12 14s12-6 12-14c0-7-8-10-12-5z"
          />
          <path
            className="mini-heart mini-heart-three"
            d="M94 56c-4-5-12-2-12 5 0 8 12 14 12 14s12-6 12-14c0-7-8-10-12-5z"
          />
        </g>

        {variant === "question" ? <QuestionScene /> : <CelebrationScene />}
      </svg>
    </div>
  );
}

function QuestionScene() {
  return (
    <>
      <text className="question-mark" x="162" y="59">
        ?
      </text>

      <g transform="translate(82 70)">
        <g className="character character-warm question-left">
          <path className="ear ear-left" d="M11 20c-11-5-18 7-12 17 8-1 13-6 12-17z" />
          <path className="ear ear-right" d="M69 20c11-5 18 7 12 17-8-1-13-6-12-17z" />
          <path
            className="body"
            d="M40 9c29 0 48 24 48 56 0 36-20 61-48 61S-8 101-8 65C-8 33 11 9 40 9z"
          />
          <path className="belly" d="M24 75c0-13 8-22 16-22s16 9 16 22-7 24-16 24-16-11-16-24z" />
          <circle className="eye" cx="25" cy="47" r="4" />
          <circle className="eye" cx="55" cy="47" r="4" />
          <path className="mouth" d="M35 61c4 4 6 4 10 0" />
          <circle className="blush" cx="13" cy="57" r="7" />
          <circle className="blush" cx="67" cy="57" r="7" />
          <path className="arm arm-left" d="M5 78c-14 7-13 26 3 26" />
          <path className="arm arm-right holding-arm" d="M73 76c20 5 23 23 10 31" />
          <path className="tiny-flower" d="M88 82c8-10 16-1 7 6 10 3 5 15-5 9-2 11-15 7-11-4-11 1-12-13 0-12-5-10 7-16 9 1z" />
        </g>
      </g>

      <g transform="translate(132 78)">
        <g className="character character-soft question-right">
          <path className="body" d="M40 3c27 0 47 23 47 56 0 35-19 60-47 60S-7 94-7 59C-7 26 13 3 40 3z" />
          <circle className="eye" cx="26" cy="44" r="4" />
          <circle className="eye" cx="56" cy="44" r="4" />
          <path className="mouth" d="M36 58c3 3 5 3 8 0" />
          <circle className="blush" cx="14" cy="54" r="7" />
          <circle className="blush" cx="68" cy="54" r="7" />
          <path className="arm pat-arm" d="M8 69c-19 4-28 20-16 30" />
        </g>
      </g>
    </>
  );
}

function CelebrationScene() {
  return (
    <>
      <g transform="translate(67 65)">
        <g className="character character-soft celebration-left">
          <path className="body" d="M43 5c28 0 50 24 50 58 0 38-21 63-50 63S-7 101-7 63C-7 29 15 5 43 5z" />
          <circle className="eye" cx="29" cy="48" r="4" />
          <circle className="eye" cx="58" cy="48" r="4" />
          <path className="happy-mouth" d="M36 62c5 7 12 7 17 0" />
          <circle className="blush" cx="16" cy="58" r="8" />
          <circle className="blush" cx="71" cy="58" r="8" />
          <path className="hug-arm hug-arm-left" d="M72 80c18 8 23 22 12 34" />
        </g>
      </g>

      <g transform="translate(130 62)">
        <g className="character character-warm celebration-right">
          <path className="ear ear-left" d="M11 20c-11-5-18 7-12 17 8-1 13-6 12-17z" />
          <path className="ear ear-right" d="M69 20c11-5 18 7 12 17-8-1-13-6-12-17z" />
          <path
            className="body"
            d="M40 9c29 0 48 24 48 56 0 36-20 61-48 61S-8 101-8 65C-8 33 11 9 40 9z"
          />
          <circle className="eye" cx="25" cy="47" r="4" />
          <circle className="eye" cx="55" cy="47" r="4" />
          <path className="mouth" d="M35 61c4 4 6 4 10 0" />
          <circle className="blush" cx="13" cy="57" r="7" />
          <circle className="blush" cx="67" cy="57" r="7" />
          <path className="hug-arm hug-arm-right" d="M3 79c-17 8-21 24-9 35" />
        </g>
      </g>
    </>
  );
}
