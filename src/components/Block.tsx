import React from 'react'

interface BlockProps {
    value?: string | null
    onClick?: () => void
}

const Block: React.FC<BlockProps> = (props) => {
    return (
        <div
            className='
                h-20 
                w-20 
                border-2
                cursor-pointer 
                flex 
                justify-center 
                items-center
                text-lg
                font-semibold
            '
            onClick={props.onClick}
        >
            {props.value}
        </div>
    )
}

export default Block