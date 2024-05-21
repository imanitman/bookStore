import { useParams } from 'react-router-dom'
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { books } from '../../data.json'
import DetailLeft from './DetailLeft';
import DetailMain from './DetailMain';
import DetailRight from './DetailRight';
import { useMediaQuery } from 'react-responsive';
import HeaderMobile from '../components/Header/HeaderMobile';
function BookDetail() {
    // React hook
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 500px)'
    })
    if (isDesktopOrLaptop) {
        return <>
            <div ><Header></Header></div>
            <div className='d-flex' style={{ gap: '10px', marginTop: '10px' }}>
                <DetailLeft></DetailLeft>
                <DetailMain></DetailMain>
                <DetailRight></DetailRight>
            </div>
            <Footer></Footer>
        </>
    }
    else {
        return<div>
            <HeaderMobile></HeaderMobile>
            <div style={{marignTop:'50px'}}>
                <DetailLeft></DetailLeft>
            </div>
            <div className='bg-white' style={{paddingLeft:'20px', marignTop:'30px'}}><DetailRight></DetailRight></div>
            
            
        </div>

    }

}

export default BookDetail;