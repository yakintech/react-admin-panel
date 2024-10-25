import React, { useRef } from 'react'
import { useId } from 'react';
import { useTranslation } from 'react-i18next';

function RefHook() {

    const h1Ref = useRef<HTMLHeadingElement>(null)
    const changeColor = () => {
        h1Ref.current!.style.color = "red"
    }

    const idSample = useId();

    const { t, i18n } = useTranslation()

    return <>
        <h1 ref={h1Ref} >{t("ref")}</h1>
        <button onClick={changeColor}>Change Color</button>
 
    </>
}

export default RefHook