
import Image from 'next/image'

interface DayStateProps {
    day: boolean | undefined
}

export function DayState({ day }: DayStateProps) {

    let image: [string, string, number?] = ['/images/gray-mark.svg', 'gray mark', 12]

    if (day === true) image = ['/images/check.svg', 'green check icon', 24]
    if (day === false) image = ['/images/x.svg', 'red x mark', 24]

    const [src, alt, size] = image

    return(
        <div className='flex items-center justify-center h-9'>
            <Image 
            src={src}
            alt={alt}
            width={size}
            height={size} 
            />
        </div>
    )
}