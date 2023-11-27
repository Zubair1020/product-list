export const TableDataComponent = ({product, removeProduct}) => {
    const {
        productName,
        productColor,
        productPrice,
        productId,
        productQuantity,
        productDescription,
    } = product
    return (
        <>
            <td>{productName}</td>
            <td>{productColor}</td>
            <td>{productPrice}</td>
            <td>{productId}</td>
            <td>{productQuantity}</td>
            <td>{productDescription}</td>
            <td>
                <button onClick={() => removeProduct(productId)} className="delete-btn">Delete</button>
            </td>
        </>
    )

}