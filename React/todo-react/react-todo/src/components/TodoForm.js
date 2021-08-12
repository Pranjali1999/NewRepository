import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : "");

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input,
        });

        console.log(input);

        setInput("");
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input
                        type="text"
                        placeholder="Update your details"
                        value={input}
                        name="text"
                        className="todo-input edit"
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button onClick={handleSubmit} className="todo-button edit">
                        Update
                    </button>
                </>
            ) : (
                <>
                    <input type="text" placeholder="Enter Your Id" value={input} name="text" className="todo-input" onChange={handleChange} ref={inputRef} />
                    <input
                        type="text"
                        placeholder="Enter Your Email-Id"
                        value={input}
                        name="text"
                        className="todo-input"
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <input type="text" placeholder="Enter your Name" value={input} name="text" className="todo-input" onChange={handleChange} ref={inputRef} />
                    <button onClick={handleSubmit} className="todo-button">
                        Add todo
                    </button>
                </>
            )}
        </form>
    );
}

export default TodoForm;
