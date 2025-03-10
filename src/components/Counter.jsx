import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <div>
                <p>Count is: {count}</p>
            </div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}