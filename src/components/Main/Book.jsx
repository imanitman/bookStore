import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
function Book(props) {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 500px)'
    })
    if (isDesktopOrLaptop) {
        return <a href={'book/' + props.data.id} className="card" style={{ width: "12rem", height: '21rem',justifyContent:'center' }}>
            <img src={props.data.images[0].base_url} className="card-img-top" alt={props.data.name}
                style={{ width: '8rem', height: '9rem' }} />
            <div className="card-body">
                <div className="card-text" style={{ fontSize: '13.5px', fontWeight:"450" }}>
                    <p
                        style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            maxWidth: 200,
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        }}
                    >
                        {props.data.name}
                    </p>
                    <p style={{fontSize:'10px',color:'#808089'}}>{props.data.quantity_sold ? `${props.data.quantity_sold.text}` : ''}</p>
                    <b style={{ fontSize: '12px' }}>{props.data.list_price}.đ</b>
                </div>
            </div>
            <div style={{borderTop:'1px solid #808089',width:'100%'}}><p style={{fontSize:'12px',color:'#808089'}}>Giao siêu tốc trong 2h</p></div>
        </a>
    }
    else {
        return <a href={'book/' + props.data.id} className="card" style={{ width: "12rem", height: '20rem', justifyContent: 'center', alignItems: 'center' }}>
            <img src={props.data.images[0].large_url} className="card-img-top" alt="..."  style={{width:'8rem', height:'10rem'}}/>
            <div className="card-body" style={{ width: 'inherit' }}>
                <p className="card-text" style={{ fontSize: '9px' }}>
                <p
                        style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            maxWidth: 200,
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        }}
                    >
                        {props.data.name}
                    </p>
                    <p style={{fontSize:'10px',color:'#808089'}}>{props.data.quantity_sold ? `${props.data.quantity_sold.text}` : ''}</p>
                    <b style={{ fontSize: '12px' }}>{props.data.list_price}.đ</b>
                    
                </p>
            </div>
            <div style={{borderTop:'1px solid #808089',width:'100%'}}><p style={{fontSize:'12px',color:'#808089'}}>Giao siêu tốc trong 2h</p></div>
        </a>
    }
}
export default Book;