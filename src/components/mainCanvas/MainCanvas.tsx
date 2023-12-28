import { useEffect, useRef } from 'react'
import { MainCanvasRenderer } from '../../renderer/MainCanvasRenderer'
import { buildPrograms } from '../../programs'

export function MainCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    
    useEffect(() => {
        const gl = canvasRef?.current?.getContext("webgl2")
        if (!gl) {
            throw new Error("Could not get WebGL context")
        }
        const programs = buildPrograms(gl)
        const renderer = new MainCanvasRenderer(gl, programs)
        renderer.startRenderer()
        return () => renderer.stopRenderer()
    }, [])

    return (
        <>
            <canvas ref={canvasRef} width={640} height={320}/>
        </>
    )
}
