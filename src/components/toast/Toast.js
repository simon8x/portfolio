export const Toast = ({ message, open, isLeaving }) => {

    if (open !== true) {
        return null;
    }

    const toastClass = isLeaving === true
        ? 'toast is-leaving'
        : 'toast';

    return (
        <div className={toastClass} role='status' aria-live='polite'>
            {message}
        </div>
    )
}
