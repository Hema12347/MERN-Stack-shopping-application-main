import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { deleteOrder } from '../../action/order';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OrderProducts = ({order,deleteOrder}) => {
    AOS.init()
    return (
        <Fragment>
        {order.length>0?<Fragment>
            <h3>Order Products</h3>
            <div className="row OrderProduct">
            {order.map(item => 
            <div className="card-group col-sm-3 mt-3" data-aos='fade-up' style={{"height": "30rem"}}>
            <div className="card ">
            <img className="card-img-top" src={require(`./${item.imagename}`).default} alt={item.imagename} />
            <div className="card-body">
              <h5 className="card-title"><Link to={`/indproduct/${item.imagename}+${item.title}+${item.price}+${item._id} `}>{item.title}</Link></h5>
              <p><strong>Delivery address : </strong>{item.address}</p>
              <Link className="btn btn-primary">₹ {item.price} .00</Link> &nbsp; &nbsp;
              <Link onClick={() => deleteOrder(item._id)} className="btn btn-primary">Cancel Order</Link>
            </div>
            </div>
            </div>
                )}
            </div>
        </Fragment>: <div className="row OrderProducts"><h2 data-aos='fade-up'>Your Order Is Empty, Kindly Order Products</h2></div>}
        </Fragment>
    )
}

OrderProducts.propTypes = {
    order : PropTypes.array.isRequired,
    deleteOrder : PropTypes.func.isRequired,
}

const mapStateToProps = (state) =>({
    order : state.order,
})

export default connect(mapStateToProps,{deleteOrder})(OrderProducts);