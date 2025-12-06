import { useEffect, useState } from 'react';

import {
  DELETING_SPEED,
  PAUSE_BEFORE_DELETE,
  PAUSE_BEFORE_NEXT,
  TYPING_SPEED,
} from './constants';

import './TypedLine.scss';
import { Text } from '../Text';
import type { TextColor } from '../Text/Text';

interface Props {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseBeforeDelete?: number;
  pauseBeforeNext?: number;
  className?: string;
  color?: TextColor;
}

export const TypedLine = ({
  phrases,
  typingSpeed = TYPING_SPEED,
  deletingSpeed = DELETING_SPEED,
  pauseBeforeDelete = PAUSE_BEFORE_DELETE,
  pauseBeforeNext = PAUSE_BEFORE_NEXT,
  className,
  color = 'black',
}: Props) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!phrases.length) return;

    const phrase = phrases[currentPhraseIndex];
    let timeoutId: number;

    if (!isDeleting) {
      if (displayedText.length < phrase.length) {
        timeoutId = window.setTimeout(() => {
          setDisplayedText(phrase.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timeoutId = window.setTimeout(() => {
          setIsDeleting(true);
        }, pauseBeforeDelete);
      }
    } else {
      if (displayedText.length > 0) {
        timeoutId = window.setTimeout(() => {
          setDisplayedText(phrase.slice(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        timeoutId = window.setTimeout(() => {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, pauseBeforeNext);
      }
    }

    return () => window.clearTimeout(timeoutId);
  }, [
    phrases,
    currentPhraseIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseBeforeDelete,
    pauseBeforeNext,
  ]);

  if (!phrases.length) {
    return null;
  }

  return (
    <div
      className={`typed-line${className ? ` ${className}` : ''}`}
      aria-live="polite"
    >
      <span className="typed-line__text">
        <Text variant="subtitle" color={color} font="helvetica" weight="light">
          {displayedText}
        </Text>
      </span>

      <span
        className={`typed-line__cursor typed-line__cursor--${color}`}
        aria-hidden="true"
      />
    </div>
  );
};
