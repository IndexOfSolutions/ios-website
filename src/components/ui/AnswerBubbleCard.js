import React from 'react'

export const AnswerBubbleCard = ({answer}) => {
  return (
    <div className='answer w-full md:w-2/3 flex flex-row-reverse items-end gap-1 self-end font-[inter]'>
        <div className="min-w-7 min-h-7 flex justify-center items-center rounded-full inset-shadow-answer-bubble-card-avatar text-[10px] bg-mainbg text-fg">
            <span>IOS</span>
        </div>
        <div className='rounded-lg p-4 text-fg text-base inset-shadow-answer-bubble-card border-2 border-border-color text-wrap'>
            <p>{answer}</p>
        </div>
    </div>
  )
}
