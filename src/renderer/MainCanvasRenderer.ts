import { Programs, Renderer } from "../types";
import * as twgl from "twgl.js"

export class MainCanvasRenderer implements Renderer {

    gl: WebGL2RenderingContext
    programs: Programs
    time: number

    constructor(gl: WebGL2RenderingContext, programs: Programs) {
        this.gl = gl
        this.programs = programs
        this.time = 0
    }

    setup() {
        twgl.resizeCanvasToDisplaySize(this.gl.canvas as HTMLCanvasElement)
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height)
    }

    clearBackground() {
        this.gl.clearColor(0.5, 0.5, 1, 1)
        this.gl.clear(this.gl.COLOR_BUFFER_BIT)
    }

    drawRectangle() {
        const arrays = {
            a_position: [
                0.5, 0.5, 0, 
                0.5, -0.5, 0, 
                -0.5, 0.5, 0, 
                -0.5, -0.5, 0, 
            ],
        };
        const bufferInfo = twgl.createBufferInfoFromArrays(this.gl, arrays);
        this.gl.useProgram(this.programs.simpleProgram.program)
        twgl.setBuffersAndAttributes(this.gl, this.programs.simpleProgram, bufferInfo)
        twgl.drawBufferInfo(this.gl, bufferInfo, this.gl.TRIANGLE_STRIP);
    }

    startRenderer() {
        this.render()
    }

    stopRenderer() {
        // Nothing to do yet
    }

    render() {
        this.setup()
        this.clearBackground()
        this.drawRectangle()
    }
}

