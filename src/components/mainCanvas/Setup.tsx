import { useGL } from "../../hooks/useGL"
import * as twgl from "twgl.js"

export const Setup = () => {
    const { gl } =  useGL()

    twgl.resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement)
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
    
    return null
}