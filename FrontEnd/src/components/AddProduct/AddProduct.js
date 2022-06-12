import axios from 'axios';
import { useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { handleSubmit } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const [productName, setProductName] = useState(null);
    const [productWeight, setProductWeight] = useState(null);
    const [productPrice, setProductPrice] = useState(null);


    const onSubmit = data => {
        const productData = {
            name: productName,
            imageURL: imageURL,
            price: productPrice,
            weight: productWeight,
        };
        const url = `http://localhost:8080/addProduct`;

        console.log(productData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server side response', res))
    };
    const handleChange = (e) => {
        if (e.target.name === 'name') {
            setProductName(e.target.value)
        }
        if (e.target.name === 'price') {
            setProductPrice(e.target.value)
        }
        if (e.target.name === 'weight') {
            setProductWeight(e.target.value)
        }

    }

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '2f898a3b8cf9ed048515426724ba1cf7');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <Col md={8} className="mx-md-3">
            <h3 className="text-center">Add Product</h3>
            <Form className='product-input' onSubmit={handleSubmit(onSubmit)}>
                <Form.Row>
                    <Form.Group as={Col} >
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter Name" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control name="weight" type="text" placeholder="Enter quantity" defaultValue={1} onChange={handleChange} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} >
                        <Form.Label>Add Price</Form.Label>
                        <Form.Control type="text" name="price" placeholder="Enter Price" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} className="mt-1 mx-3">
                        <Form.File id="exampleFormControlFile1" onChange={handleImageUpload} label="Add Photo" />
                    </Form.Group>
                </Form.Row>

                <div className=" d-flex justify-content-end">
                    <button className="btn btn-success " type="submit">
                        Save
                    </button>
                </div>
            </Form>

        </Col>
    );
};

export default AddProduct;