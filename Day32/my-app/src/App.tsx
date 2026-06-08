
import "./App.css"
function App() : React.JSX.Element {
    return (
        <div className="container">
            <h1>Welcome to my</h1>
            <MyButton></MyButton>            
         </div>
    );
}
let MyButton = () => {
    return (
        <button> I am a button </button>
    )
};
export default App ;
