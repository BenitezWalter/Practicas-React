import { DiAndroid } from "react-icons/di";
export const Post = ()=>{
    return <button onClick={()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }}>
        <DiAndroid></DiAndroid>
        Traer Post
    </button>
}