import {useState,useEffect} from "react";

const Example = () => {
    const [count, setCount] = useState(0);

    // 与 componentDidMount() 和 componentDidUpdate() 类似:
    useEffect(() => {
        // 使用浏览器 API 更新网页标题
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Example