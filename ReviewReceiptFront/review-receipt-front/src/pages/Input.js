import { useState } from "react";
import axios from 'axios';

const Input = () => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        try {
            console.log("title: ", title);
            console.log("text: ", text);

            axios.post(
                '/article/new',
                {
                    writerUid: 1,
                    title: title,
                    text: text,
                }
            )
        } catch (error) {
            console.log(error);
        }
    }

    const onChangeValue = (func, targetValue) => {
        func(targetValue);
        console.log(targetValue);
    }

    return (
        <div>
            <h1>
                Hello Receipt
            </h1>

            <form onSubmit={onSubmit}>
                <input type="text" value={title} onChange={(e) => onChangeValue(setTitle, e.target.value)} />
                <input type="text" value={text} onChange={(e) => onChangeValue(setText, e.target.value)} />
                <button>글쓰기</button>
            </form>
        </div>
    )
}

export default Input;