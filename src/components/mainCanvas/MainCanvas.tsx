import { useEffect, useRef, useState } from 'react'
import { CanvasProvider } from '../../context/CanvasProvider'

export const MainCanvas = ({ children }: React.PropsWithChildren) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [canvasEl, setCanvasEl] = useState<HTMLCanvasElement | null>(null)

    useEffect(() => {
        setCanvasEl(canvasRef?.current)
    }, [])

    return (
        <>
            <canvas ref={canvasRef} width={640} height={320}/>
            {canvasEl && (
                <CanvasProvider canvasEl={canvasEl}>
                    {children}
                </CanvasProvider>
            )}
        </>
    )
}
