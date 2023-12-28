import React, {  useEffect, useState } from "react"
import { buildPrograms } from "../programs"
import { Programs } from "../types";

interface CanvasContextProps {
    canvasEl?: HTMLCanvasElement,
    gl?: WebGL2RenderingContext,
    programs?: Programs,
}

interface CanvasProviderProps extends React.PropsWithChildren {
    canvasEl: HTMLCanvasElement,
}

export const CanvasContext = React.createContext<CanvasContextProps>({})

export const CanvasProvider = ({ canvasEl, children }: CanvasProviderProps) => {
    const [programs, setPrograms] = useState<Programs>();
    const [gl, setGl] = useState<WebGL2RenderingContext>();

    useEffect(() => {
        if (canvasEl) {
            const gl = canvasEl?.getContext("webgl2") ?? undefined
            if (!gl) {
                throw new Error("Could not get WebGL2 context!")
            }
            setPrograms(buildPrograms(gl))
            setGl(gl)
        }
    }, [canvasEl])

    const context: CanvasContextProps = {
        canvasEl,
        gl,
        programs,
    }

    const contextReady = context.gl && context.programs

    return <>
        <CanvasContext.Provider value={context}>
            {contextReady && children}
        </CanvasContext.Provider>
    </>
}