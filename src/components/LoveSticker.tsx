import "./LoveSticker.css";

type LoveStickerProps = {
  variant: "question" | "celebration";
};

export function LoveSticker({ variant }: LoveStickerProps) {
  return (
    <div className={`love-sticker love-sticker--${variant}`} aria-hidden="true">
      <svg className="sticker-art" viewBox="0 0 320 250">
        <rect className="sticker-card" x="56" y="22" width="208" height="162" rx="18" />
        {variant === "question" ? <QuestionSticker /> : <CelebrationSticker />}
      </svg>
    </div>
  );
}

function QuestionSticker() {
  return (
    <>
      <g className="sticker-float sticker-float-left">
        <Heart x={103} y={54} size={18} />
        <Heart x={138} y={39} size={29} />
        <text className="cute-question" x="210" y="61">
          ?
        </text>
      </g>

      <g className="character-bob character-bob-left">
        <circle className="bear-ear" cx="122" cy="88" r="15" />
        <circle className="bear-ear" cx="168" cy="91" r="15" />
        <path
          className="bean-character"
          d="M133 73c-32 4-50 31-47 67 3 37 30 61 62 55 32-5 51-35 46-74-5-37-29-52-61-48z"
        />
        <circle className="face-dot" cx="129" cy="126" r="4.5" />
        <circle className="face-dot" cx="158" cy="126" r="4.5" />
        <path className="cute-mouth" d="M139 140c4 4 8 4 12 0" />
        <circle className="cheek cheek-left" cx="113" cy="135" r="9" />
        <circle className="cheek cheek-right" cx="172" cy="137" r="9" />
      </g>

      <g className="character-bob character-bob-right">
        <ellipse className="white-character" cx="181" cy="133" rx="48" ry="57" />
        <circle className="face-dot" cx="166" cy="128" r="4.5" />
        <circle className="face-dot" cx="196" cy="128" r="4.5" />
        <path className="cute-mouth" d="M176 143c4 4 8 4 12 0" />
        <circle className="cheek" cx="151" cy="139" r="9" />
        <circle className="cheek" cx="211" cy="140" r="9" />
      </g>
    </>
  );
}

function CelebrationSticker() {
  return (
    <>
      <g className="sticker-float sticker-float-left">
        <Heart x={96} y={49} size={20} />
        <Heart x={136} y={35} size={31} />
        <Heart x={190} y={51} size={17} />
      </g>

      <g className="character-bob character-bob-left">
        <ellipse className="white-character" cx="133" cy="132" rx="49" ry="58" />
        <circle className="face-dot" cx="117" cy="124" r="4.5" />
        <circle className="face-dot" cx="145" cy="124" r="4.5" />
        <path className="happy-mouth" d="M123 139c7 8 17 8 24 0" />
        <circle className="cheek" cx="100" cy="137" r="9" />
        <circle className="cheek" cx="160" cy="137" r="9" />
        <path className="white-arm-outline" d="M164 145c18 10 34 8 49-8" />
        <path className="white-arm" d="M164 145c18 10 34 8 49-8" />
      </g>

      <g className="character-bob character-bob-right">
        <circle className="bear-ear" cx="176" cy="86" r="15" />
        <circle className="bear-ear" cx="220" cy="91" r="15" />
        <path
          className="bean-character"
          d="M186 73c-31 6-49 33-45 68 5 39 31 61 63 56 33-6 51-34 47-72-4-37-31-58-65-52z"
        />
        <circle className="face-dot" cx="184" cy="124" r="4.5" />
        <circle className="face-dot" cx="213" cy="124" r="4.5" />
        <path className="cute-mouth" d="M194 139c4 4 8 4 12 0" />
        <circle className="cheek cheek-left" cx="168" cy="135" r="9" />
        <circle className="cheek cheek-right" cx="228" cy="137" r="9" />
        <path className="bear-arm-outline" d="M155 154c16 15 34 16 50 3" />
        <path className="bear-arm" d="M155 154c16 15 34 16 50 3" />
      </g>
    </>
  );
}

type HeartProps = {
  x: number;
  y: number;
  size: number;
};

function Heart({ x, y, size }: HeartProps) {
  return (
    <path
      className="sticker-heart"
      d={`M${x} ${y + size * 0.3}c${-size * 0.55}-${size * 0.62}-${size * 1.4}-${size * 0.25}-${size * 1.4} ${size * 0.54} 0 ${size * 0.98} ${size * 1.4} ${size * 1.7} ${size * 1.4} ${size * 1.7}s${size * 1.4}-${size * 0.72} ${size * 1.4}-${size * 1.7}c0-${size * 0.79}-${size * 0.85}-${size * 1.16}-${size * 1.4}-${size * 0.54}z`}
    />
  );
}
