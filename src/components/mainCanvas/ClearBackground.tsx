import { useGL } from "../../hooks/useGL"

export const ClearBackground = () => {
    const { gl } =  useGL()

    gl.clearColor(0.5, 0.5, 1, 1)
    gl.clear(gl.COLOR_BUFFER_BIT)
    
    return null
}