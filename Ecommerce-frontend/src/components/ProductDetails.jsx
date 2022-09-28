import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
function ProductDetails({x}){

    return (
        <div className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5>
                            <AddShoppingCartIcon></AddShoppingCartIcon>
                            Add To Cart</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;