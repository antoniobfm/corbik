import React, { DetailedHTMLProps, HTMLAttributes, useEffect, useRef } from 'react';

import { Container } from './styles';

interface IModalProps {
  children: React.ReactNode;
  active: boolean;
  setActive: (active: boolean) => void;
}

const Modal: React.FC<IModalProps> = ({ children, active, setActive }: IModalProps) => {
	// : Modal Management
	const node = useRef<HTMLDivElement>()

	useEffect(() => {
    const handleClickOutside = async (e: any) => {
      if (node.current!.contains(e.target)) {
        console.log('clicking inside')
        return
      }
      setActive(false)
    }

		// When the modal is shown, we want a fixed body
		// document.body.style.position = 'fixed'
		document.body.style.top = `-${window.scrollY}px`

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			// When the modal is hidden, we want to remain at the top of the scroll position
			const scrollY = document.body.style.top
			// document.body.style.position = ''
			document.body.style.top = ''
			window.scrollTo(0, parseInt(scrollY || '0') * -1)

			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [setActive])

  return (
    <Container>
      <div ref={node}>
        {children}
      </div>
    </Container>
  )
}

export default Modal;