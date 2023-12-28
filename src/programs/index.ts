import { Programs } from "../types";
import { createSimpleProgramInfo } from "./simpleProgram";

export function buildPrograms(gl: WebGL2RenderingContext): Programs {
    return {
        simpleProgram: createSimpleProgramInfo(gl)
    }
}