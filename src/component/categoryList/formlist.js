import React, { useState } from "react"

const formList = (props)=>{
    const [row, setRow] = useState({
        input: ""
    })

    const handleClick = () => {
        axios.post(api`/types?type=${props.type}`)
    }
    use

    return <>
    <input type="text" name="type" value={row.input} />
    <button onClick={handleClick}>Submit</button>
    </>
}
export default formList