import React from 'react'

export const QuestionBubbleCard = ({question}) => {
  return (
    <div className='question w-full md:w-2/3 flex items-end gap-1 font-[inter]'>
        <div className="min-w-7 min-h-7 flex justify-center items-center rounded-full inset-shadow-question-bubble-card-avatar text-[10px] text-fg">
            <span>You</span>
        </div>
        <div className='rounded-lg p-4 text-fg text-base inset-shadow-question-bubble-card border-2 border-border-color'>
            <p>{question}</p>
        </div>
    </div>
  )
}
