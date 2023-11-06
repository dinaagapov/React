export default function TabButton({children,isClicked,...props}){
    function handleClick(){
        console.log("Hello World");
    }
    return (
        <li> 
            <button className={isClicked ? 'active' : undefined} {...props}>
                {children}
            </button>
        </li> 
    );
}