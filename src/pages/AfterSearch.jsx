import { useParams } from "react-router-dom";
import { useState } from "react";
import { books } from '../../data.json'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
function AfterSearch() {
    const { name } = useParams();
    console.log(name);
    const book = books.find(item => item.name == name)
    const [soLuong, setSoLuong] = useState(1);
    function handleUp (){
        setSoLuong( soLuong + 1)
    }
    function handleDown(){
        setSoLuong(soLuong - 1)
    }
    function handleBtnBuy(){
        alert(`Bạn đã mua:${soLuong} sản phẩm`)
    }
    function handleBtnAdd(){
        alert(`Bạn đã thêm vào giỏ hàng ${soLuong} sản phẩm` )
    }
    return <div>
        <Header></Header>
        <div className="d-flex" style={{ gap: '0px' }}>
            <img src={book.images[0].base_url} alt="" style={{ width: '430px', height: '480px' }} />
            <div className="bg-white" style={{marginLeft:'10px'}}>
                <h3>{book.name}</h3>
                {book.specifications[0].attributes.map(value => <p>{value.name}: {value.value}</p>)}
                <p></p>
                <p>{book.short_description}</p>
            </div>
            <div className="bg-white">
                <div>
                    <b>Số lượng</b>
                    <div>
                        <div className='d-flex' style={{ gap: '3px' }}>
                            <button onClick={() => handleDown()} className="spin-button spin-button-down">-</button>
                            <input type="text" value={soLuong} min="1" max="100" style={{ width: '50px', textAlign: 'center', borderRadius: '5px', height: '45px', border: '1px solid #A6A6B0' }} />
                            <button onClick={() => handleUp()} className="spin-button spin-button-up">+</button>
                        </div>
                    </div>
                    <b>Tạm tính </b>
                    <br />
                    <b style={{ fontSize: '25px' }}>{book.list_price * soLuong}. VNĐ</b>
                    <br />
                    <button onClick={() => handleBtnBuy()} style={{ background: 'red', color: 'white', width: '100%', marginBottom: '5px' }}>Mua ngay</button>
                    <button onClick={() => handleBtnAdd()} style={{ color: '#0A68FF', border: '1px solid #0A68FF', background: 'white', width: '100%', marginBottom: '5px' }}>Thêm vào giỏ</button>
                    <button style={{ color: '#0A68FF', border: '1px solid #0A68FF', background: 'white', width: '100%' }}>Mua trước trả sau</button>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
}
export default AfterSearch