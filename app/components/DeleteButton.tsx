
'use client'

import Image from 'next/image'
import { deleteHabit } from '../actions'

interface DeleteButtonProps{
    habit: string
}

export function DeleteButton({ habit }: DeleteButtonProps) {

    return(
        <button onClick={() => deleteHabit(habit)}>
            <Image
            src='/images/trash.svg'
            width={20}
            height={20}
            alt='Ícone de lixeira vermelha'
            />
        </button>
    )
}