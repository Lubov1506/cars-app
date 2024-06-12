import { useEffect } from 'react'
import s from './Modal.module.css'
import { IoCloseSharp } from "react-icons/io5";
import clsx from 'clsx';
const Modal = ({ children, title = 'Default modal', onClose, className }) => {
	const handleBackDropClick = e => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	useEffect(() => {
		const handleKeyDown = e => {
			if (e.key === 'Escape') {
				onClose()
			}
		}
		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [onClose])
	return (
		<div className={s.wrapper} onClick={handleBackDropClick}>
			<div className={clsx(s.content, className)}>
				<button className={s.closeBtn} onClick={onClose}>
					<IoCloseSharp width={24} heught={ 24} />
				</button>
				{children}
			</div>
		</div>
	)
}

export default Modal
