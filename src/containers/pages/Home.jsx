import Footer from "components/navigation/Footer";
import Layout from "hocs/layouts/Layout";
import NavBar from "components/navigation/NavBar";
function Home(){
    return (
        <Layout>
            <NavBar/>
            <div className="pt-28">
                Home
                
            </div>
            <Footer/>
            
        </Layout>
    );
}
export default Home