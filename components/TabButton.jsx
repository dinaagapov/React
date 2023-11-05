export default function TabButton({label, onClick}){
    function handleClick(){
        console.log("Hello World");
    }
    return(
        <li> 
        <button onClick={onClick}>{label} </button>
        </li> 
    );
}