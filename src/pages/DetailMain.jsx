import { books } from '../../data.json'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser';
import { useState,useEffect } from 'react';
function DetailMain() {
    const { id } = useParams()
    const [book, setBook] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:3000/books/${id}`)
        .then(res => res.json())
        .then(book => {
            console.log(book);
            setBook(book);
        })
    }, [])
    

    if (!book) {
        return <div>
            <h3>We already havent the details of this book</h3>
        </div>
    }
    else {
        return <div className='container col-7 bg-white'>
            <div className='d-flex' style={{ gap: '10px' }}>
                <div className='d-flex align-items-center' style={{ gap: '5px' }} >
                    <img src="https://salt.tikicdn.com/ts/upload/81/61/d4/92e63f173e7983b86492be159fe0cff4.png" alt="" style={{ width: '17px', height: '17px', marginBottom: '12px' }} />
                    <p><b>Authenticated</b></p>
                </div>
                <div>
                    {book.authors.map(author => (
                        <p key={author.id}>Tác giả: {author.name}</p>
                    ))}
                </div>
            </div>
            <div>
                <h4>Bản đồ</h4>
                <div className='d-flex' style={{ gap: '10px' }}>
                    <div className='d-flex' style={{ gap: '5px' }} >
                        <p>Đánh giá {book.rating_average}</p>
                        <i className="fa-solid fa-star" style={{ marginTop: '5px' }}></i>
                    </div>
                    <p>Đã bán: {book.quantity_sold.value}</p>
                </div>
                <div>
                    <p><b style={{ color: 'Red' }}>{book.list_price}. VNĐ</b></p>
                </div>
            </div>
            <div>
                <h5>Thông tin chi tiết</h5>
                {book.specifications[0].attributes.map(value =><div className='d-flex' style={{justifyContent:'space-between'}}><p style={{color:'#808089'}}>{value.name}:</p> 
                                                                <p>{value.value}</p></div>)}
            </div>
            <div className='mt-3'>
                <h4>Mô tả sản phẩm</h4>
                <div className=''>
                    <p>{parse(book.description)}</p>
                </div>
            </div>
        </div>
    }
}

export default DetailMain