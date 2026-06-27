import { useState } from "react";

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}

interface IProps {
    name?: string;
    addNewTodo: (v: ITodo) => void;
}

const TodoInput = (props: IProps) => {
    const { addNewTodo } = props;

    const [todo, setTodo] = useState<string>("");

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value)
    }

    const  randomIntFromInterval = (min:number , max: number) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const handleClick = () => {
      if(!todo) {
        alert("Empty todo")
        return
    }
        addNewTodo({
            id: randomIntFromInterval(1, 100000),
            title: todo,
            isComplete: false,
        })
        setTodo("")
    }

    // const [todo, setTodo] = useState<number>();
    return (
        <div style={{ display: "flex", gap: 15, marginBottom: 20 }}>
            <input
                value={todo}
                onChange={handleTextChange}
                type="text" />
            <button
                onClick={handleClick}
            >Add To Do</button>
        </div>
    )
}

export default TodoInput;