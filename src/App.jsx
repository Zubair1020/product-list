import {FormComponent} from "./components/form/FormComponent.jsx";
import {useState} from "react";
import {TableDataComponent} from "./components/table-data/TableDataComponent.jsx";

function App() {
    const [products, setProducts] = useState([])
    const handelSubmit = (e) => {
        e.preventDefault()
        const elements = [...e.target.elements]
        const inputValues = {}
        elements.forEach(e => {
            if (!(e instanceof HTMLButtonElement)) inputValues[e.name] = e.value
            if (!(e instanceof HTMLSelectElement)) e.value = ""
        })
        setProducts(prevState => ([...prevState, inputValues]))
    }
    const removeProduct = (id) => {
        setProducts(prevState => prevState.filter(({productId}) => productId !== id))
    }
    return (
        <>
            <FormComponent handelSubmit={handelSubmit}/>
            {
                products.length > 0 ? <table id="customers">
                    <tr>
                        <th>Product Name</th>
                        <th>Product Color</th>
                        <th>Product Price</th>
                        <th>Product ID</th>
                        <th>Product Quantity</th>
                        <th>Product Description</th>
                        <th>Remove Product</th>
                    </tr>
                    {products.map(product => (
                        <tr key={product.id}>
                            <TableDataComponent removeProduct={removeProduct} product={product}/>
                        </tr>
                    ))}
                </table> : ""
            }
        </>
    )
}

export default App;
