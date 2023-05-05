import Footer from "./footer";
import NavBar from "./navbar"

function MainContainer({children}) {
    return (
        <>
            <NavBar />
            <div>{children}</div>
            <Footer />
        </>
    );
}

export default MainContainer;