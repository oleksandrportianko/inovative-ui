import { FC } from 'react'

import closeSvg from '../../assets/close.svg'

import './alert.styles.css'

type AlertProps = {
    variant?: 'success' | 'error',
    position?: 'bottom-right' | 'top-right' | 'bottom-left' | 'top-left',
    close?: 'auto' | 'manually',
    content: string,
    onClose: () => any;
}

export const Alert: FC<AlertProps> = ({ variant = 'success', position = 'bottom-right', close = 'manually', content, onClose }) => {
    return (
        <div className={`alert-container alert-${variant} alert-${position}`}>
            {content}
            {
                close === 'manually' && (
                    <img onClick={onClose} className='alert-close' src={closeSvg} alt="" />
                )
            }
        </div>
    )
}