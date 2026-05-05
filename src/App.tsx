import { useRef, useState } from "react";
import "./App.css";

type ButtonPosition = {
  x: number;
  y: number;
};

const noLabels = [
  "NO",
  "Chắc chưa?",
  "Nghĩ lại đi",
  "Không được đâu",
  "Bắt anh đi",
  "Đố em bắt được",
  "Lêu lêu",
];

function App() {
  const arenaRef = useRef<HTMLDivElement>(null);
  const yesButtonRef = useRef<HTMLButtonElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const [accepted, setAccepted] = useState(false);
  const [moveCount, setMoveCount] = useState(0);
  const [noPosition, setNoPosition] = useState<ButtonPosition | null>(null);

  const moveNoButton = () => {
    const arena = arenaRef.current;
    const noButton = noButtonRef.current;

    if (!arena || !noButton) {
      return;
    }

    const padding = 14;
    const width = noButton.offsetWidth;
    const height = noButton.offsetHeight;
    const minX = padding;
    const minY = padding;
    const maxX = Math.max(arena.clientWidth - width - padding, minX);
    const maxY = Math.max(arena.clientHeight - height - padding, minY);
    const arenaRect = arena.getBoundingClientRect();
    const yesRect = yesButtonRef.current?.getBoundingClientRect();

    const overlapsYesButton = (position: ButtonPosition) => {
      if (!yesRect) {
        return false;
      }

      const buffer = 24;
      const yesLeft = yesRect.left - arenaRect.left - buffer;
      const yesTop = yesRect.top - arenaRect.top - buffer;
      const yesRight = yesRect.right - arenaRect.left + buffer;
      const yesBottom = yesRect.bottom - arenaRect.top + buffer;

      return !(
        position.x + width < yesLeft ||
        position.x > yesRight ||
        position.y + height < yesTop ||
        position.y > yesBottom
      );
    };

    let nextPosition: ButtonPosition = { x: minX, y: minY };

    for (let attempt = 0; attempt < 30; attempt += 1) {
      const candidate = {
        x: minX + Math.random() * (maxX - minX),
        y: minY + Math.random() * (maxY - minY),
      };

      const tooCloseToCurrent =
        noPosition !== null &&
        Math.hypot(candidate.x - noPosition.x, candidate.y - noPosition.y) < 90;

      if (!overlapsYesButton(candidate) && !tooCloseToCurrent) {
        nextPosition = candidate;
        break;
      }
    }

    setNoPosition(nextPosition);
    setMoveCount((count) => count + 1);
  };

  const noButtonText = noLabels[Math.min(moveCount, noLabels.length - 1)];

  return (
    <main className="app-shell">
      <div className="floating-hearts" aria-hidden="true">
        <span className="heart heart-one" />
        <span className="heart heart-two" />
        <span className="heart heart-three" />
        <span className="heart heart-four" />
      </div>

      <section className="proposal" aria-live="polite">
        {accepted ? (
          <div className="answer">
            <p className="eyebrow">Chốt đơn</p>
            <h1>Anh biết em sẽ chọn YES mà.</h1>
            <p className="subtitle">Từ giờ không được đổi ý đâu nha.</p>
          </div>
        ) : (
          <>
            <p className="eyebrow">Có một câu hỏi nhỏ</p>
            <h1>Làm người yêu anh nha?</h1>
            <p className="subtitle">Chọn cẩn thận, nút kia hơi khó tính.</p>

            <div ref={arenaRef} className="button-arena">
              <button
                ref={yesButtonRef}
                className="option-button yes-button"
                type="button"
                onClick={() => setAccepted(true)}
              >
                YES
              </button>
              <button
                ref={noButtonRef}
                className={`option-button no-button${noPosition ? " is-floating" : ""}`}
                style={
                  noPosition
                    ? {
                        left: noPosition.x,
                        top: noPosition.y,
                      }
                    : undefined
                }
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  moveNoButton();
                }}
                onFocus={moveNoButton}
                onPointerDown={(event) => {
                  if (event.pointerType !== "mouse") {
                    event.preventDefault();
                    moveNoButton();
                  }
                }}
                onPointerEnter={moveNoButton}
              >
                {noButtonText}
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
