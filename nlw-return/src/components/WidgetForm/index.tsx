import { CloseButton } from "../CloseButton";
import bugUrl from "../../img/bug.svg";
import ideiaUrl from "../../img/ideia.svg";
import otherUrl from "../../img/other.svg";
import { useState } from "react";
import { FeedbackContentType } from "./Steps/FeedbackContentType";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackContentSucess } from "./Steps/FeedbackContentSucess";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugUrl,
      alt: "bug",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideiaUrl,
      alt: "ideia",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: otherUrl,
      alt: "outros",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;
export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedBackSend, setFeedBackSend] = useState(false);

  function handleRestartFeedBack() {
    setFeedBackSend(false)
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedBackSend ? (
        <FeedbackContentSucess handleRestartFeedBack={handleRestartFeedBack} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackContentType setFeedbackType={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              setFeedBackSend={() => setFeedBackSend(true)}
              feedbackType={feedbackType}
              handleRestartFeedBack={handleRestartFeedBack}
            />
          )}
        </>
      )}
      <footer className="text-xs text-neutral-400">
        feito pelo{" "}
        <a
          className="underline underline-offset-2"
          href="https://github.com/dejazz"
        >
          Dejazz
        </a>
      </footer>
    </div>
  );
};
