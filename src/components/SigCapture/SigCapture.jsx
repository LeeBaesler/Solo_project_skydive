import React, {useRef} from "react";
import ReactSignatureCanvas from "react-signature-canvas";

export default function SigPad() {
    let sigPad = useRef({})

    return (
        <div>
            <ReactSignatureCanvas 
            ref={sigPad}
            />
        </div>
    )
}