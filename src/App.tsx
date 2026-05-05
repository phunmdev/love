import { useRef, useState } from "react";
import { LoveSticker } from "./components/LoveSticker";
import "./App.css";

type ButtonPosition = {
  x: number;
  y: number;
};

const noLabels = [
  "NO",
  "Are you sure?",
  "Think again",
  "Not this one",
  "Catch me first",
  "Too slow",
  "Nope",
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

  const resetGame = () => {
    setAccepted(false);
    setMoveCount(0);
    setNoPosition(null);
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
            <LoveSticker variant="celebration" />
            <p className="eyebrow">Deal sealed</p>
            <h1>I knew it!</h1>
            <p className="subtitle">You picked the cutest answer.</p>
            <button className="reset-button" type="button" onClick={resetGame}>
              Play again
            </button>
          </div>
        ) : (
          <>
            <LoveSticker variant="question" />
            <p className="eyebrow">One tiny question</p>
            <h1>Do you love me?</h1>
            <p className="subtitle">
              Choose carefully. The other button is hard to catch.
            </p>

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
