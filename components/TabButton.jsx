export default function TabButton({label, onClick,isClicked}){
    function handleClick(){
        console.log("Hello World");
    }
    return(
        <li> 
        <button className={isClicked? 'active' : undefined} onClick={onClick}>{label} </button>
        </li> 
    );
}