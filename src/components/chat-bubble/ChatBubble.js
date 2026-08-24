export const ChatBubble = ({ message }) => {

    const isTyping = message == null || message === '';
    const bubbleClass = isTyping === true
        ? 'bubble ai-bubble typing-bubble'
        : 'bubble ai-bubble';

    return (
        <div
            className={bubbleClass}
            role='status'
            aria-live='polite'
            aria-busy={isTyping === true}
            aria-label={isTyping === true ? 'Typing' : undefined}
        >
            {
                isTyping === true
                    ? <>
                        <div className='dot dot-1'></div>
                        <div className='dot dot-2'></div>
                        <div className='dot dot-3'></div>
                      </>
                    : message
            }
        </div>
    )
}
