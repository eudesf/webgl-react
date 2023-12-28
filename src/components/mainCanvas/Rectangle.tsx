import { useGL } from "../../hooks/useGL"
import * as twgl from "twgl.js"

export const Rectangle = () => {
    const { gl, programs } = useGL()

    const arrays = {
        a_position: [
            0.5, 0.5, 0, 
            0.5, -0.5, 0, 
            -0.5, 0.5, 0, 
            -0.5, -0.5, 0, 
        ],
    };

    const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);
    gl.useProgram(programs.simpleProgram.program)
    twgl.setBuffersAndAttributes(gl, programs.simpleProgram, bufferInfo)
    twgl.drawBufferInfo(gl, bufferInfo, gl.TRIANGLE_STRIP);
    return null
}