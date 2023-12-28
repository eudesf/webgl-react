import { useContext } from "react";
import { CanvasContext } from "../context/CanvasProvider";

export function useGL() {
    const { gl, programs } = useContext(CanvasContext)
    if (!gl) {
        throw new Error("Missing WebGL context")
    }
    if (!programs) {
        throw new Error("Missing shader programs")
    }
    return {
        gl,
        programs
    }
}