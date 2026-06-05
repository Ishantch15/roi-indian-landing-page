import React from 'react';

export default function AnimatedHeadline() {
  const text1 = "Your Next Customer Is Searching AI.";
  const text2 = "Will They Find You?";

  const allLetters = [
    ...text1.split('').map(ch => ({ char: ch, orange: false })),
    { char: 'BREAK', orange: false },
    ...text2.split('').map(ch => ({ char: ch, orange: true })),
  ];

  return (
    <>
      {allLetters.map((item, i) => {
        if (item.char === 'BREAK') return <br key={i} />;
        return (
          <span
            key={i}
            className={`hero-letter${item.orange ? ' orange' : ''}${item.char === ' ' ? ' space' : ''}`}
            style={{ animationDelay: `${0.3 + i * 0.03}s` }}
          >
            {item.char === ' ' ? '\u00A0' : item.char}
          </span>
        );
      })}
    </>
  );
}
