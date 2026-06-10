
import "./App.css"
// App : parent component
function App(): React.JSX.Element {
    return (
        // child component 
        <div className="container">
            <YoutubeItem image="https://images.unsplash.com/photo-1758273705890-204fdc2518fa?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ></YoutubeItem>
            <Footer></Footer>
        </div>
    );
}

let Footer = () => {
    return (
        <div className="youtube-footer">
            <img src="https://images.unsplash.com/photo-1780659760416-3b62b5f18e11?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="youtube-info">
                <h3 className="youtube-title">
                    Learning React
                </h3>
                <h4 className="youtube-author">
                    Suzune
                </h4>
            </div>
        </div>
    )
}
const array = [
    { YoutubeItem , Footer},
    { YoutubeItem , Footer},
    { YoutubeItem , Footer},
];
function renderComponent() {
  return array.map( item => { return item})
}
interface YoutubeItem {
    image: string
}
function YoutubeItem({ image }: YoutubeItem) {
    return (
        <div className="youtube-item">
            <div className="youtube-image">
                <img src={image} alt="" />
            </div>
        </div>
    )
}
export default App;
