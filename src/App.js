import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
    return (
        <main className={"app"}>
            <Logo/>
            <Form/>
            <PackingList/>
            <Stats/>
        </main>
    );
}

export default App;
