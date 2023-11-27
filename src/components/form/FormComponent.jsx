import {InputComponent} from "../input/InputComponent.jsx";
import {formSection, formContainer, formComponent, row1, row2, selectLabel, textareaLabel} from "./Form.module.css"

export const FormComponent = ({handelSubmit}) => {
    return (
        <section className={formSection}>
            <h2>Product Information</h2>
            <form className={formComponent} onSubmit={handelSubmit}>
                <div className={formContainer}>
                    <div className={row1}>
                        <InputComponent name="productName" labelText="Product Name" placeholder="Your product name..."/>
                        <InputComponent name="productId" labelText="Product ID" placeholder="Your product id..."/>
                        <InputComponent name="productPrice" labelText="Product Price"
                                        placeholder="Your product price...$"/>
                    </div>
                    <div className={row2}>
                        <InputComponent name="productQuantity" labelText="Product Quantity"
                                        placeholder="Your product quantity..."/>
                        <label className={selectLabel}>
                            Chose a color :
                            <select name="productColor">
                                <option value="red">Red</option>
                                <option value="yellow">Yellow</option>
                                <option value="green">Green</option>
                            </select>
                        </label>
                        <label className={textareaLabel}>Product Description :
                            <textarea placeholder="Your product description..." name="productDescription" cols=""
                                      rows="3"/>
                        </label>
                    </div>
                </div>
                <button>Add Product</button>
            </form>
        </section>
    )
}