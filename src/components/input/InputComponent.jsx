import {label, input} from "./Input.module.css"

export const InputComponent = ({name, labelText, placeholder, type = "text"}) => {
    return (
        <>
            <label className={label}>{labelText} :
                <input className={input} required name={name} type={type} placeholder={placeholder}/>
            </label>
        </>
    )
}