import { FC } from 'react'

import closeSvg from '../../assets/close.svg'

import './alert.styles.css'

type AlertProps = {
    variant?: 'success' | 'error',
    position?: 'bottom-right' | 'top-right' | 'bottom-left' | 'top-left',
    close?: 'auto' | 'manually',
    closetime?: number, 
    onClose: () => any,
    children: JSX.Element | JSX.Element[],
}

export const Alert: FC<AlertProps> = ({ variant = 'success', position = 'bottom-right', close = 'manually', closetime = 3000, onClose, children }) => {

    if (close === 'auto') {
        setTimeout(() => {
            onClose()
        }, closetime)
    }

    return (
        <div className={`alert-container alert-${variant} alert-${position}`}>
            { children }
            {
                close === 'manually' && (
                    <img onClick={onClose} className='alert-close' src={closeSvg} alt="" />
                )
            }
        </div>
    )
}