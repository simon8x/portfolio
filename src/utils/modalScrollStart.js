import { useEffect, useRef } from 'react';

const SCROLL_WRAPPER = '.modal-wrapper, .live-demo-modal-wrapper, .testimonial-modal-wrapper';

const pinToTop = (node) => {
	if (node == null || node.scrollTop === 0) {
		return;
	}
	node.scrollTop = 0;
};

export const resetModalScroll = (anchor) => {
	if (anchor == null) {
		return;
	}

	const modal = anchor.closest('.react-responsive-modal-modal');
	const container = anchor.closest('.react-responsive-modal-container');
	const wrapper = modal == null ? null : modal.querySelector(SCROLL_WRAPPER);

	pinToTop(wrapper);
	pinToTop(modal);
	pinToTop(container);
};

export const useModalDialogFocus = () => {
	const dialogRef = useRef(null);
	const initialFocusRef = useRef({
		focus: () => {
			const node = dialogRef.current;
			if (node == null) {
				return;
			}
			node.focus({ preventScroll: true });
		},
	});

	return {
		dialogRef: dialogRef,
		initialFocusRef: initialFocusRef,
	};
};

export const ModalScrollAnchor = () => {
	const anchorRef = useRef(null);

	useEffect(() => {
		const reset = () => {
			resetModalScroll(anchorRef.current);
		};

		reset();
		const frame = requestAnimationFrame(reset);
		const timer = setTimeout(reset, 0);

		return () => {
			cancelAnimationFrame(frame);
			clearTimeout(timer);
		};
	}, []);

	return <div ref={anchorRef} className='modal-scroll-start' />;
};
