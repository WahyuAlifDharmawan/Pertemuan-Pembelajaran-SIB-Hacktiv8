import Content from './kode/Content'
import Footer from './kode/Footer'
import Header from './kode/Header'

function Index(){
    return(
        <>
        <Header/>
        <div className="container">
            <Content/>
        </div>
        <Footer/>
        </>
    )
}

export default Index