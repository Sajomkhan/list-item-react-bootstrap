// import React, { useState } from 'react'
// import { Alert, Button, Form } from 'react-bootstrap'

// const CreatItemList = ({ items, setItems }) => {

//     const [error, setError] = useState("");
//     const [inputTitle, setInputTitle] = useState("");
//     const [inputBag, setInputBag] = useState("");
//     const [inputPrice, setInputPrice] = useState("");
//     const [inputDate, setInputDate] = useState("");

//     function handleSubmit(e) {
//         e.preventDefault();
//         if(titleRef.current === "" || dateRef.current || priceRef.current) {
//             return setError(`All fields are mandatory`)
//         } else {
//             setError("");
//             setItems([...items, {
//                 id: new Date().toString(),
//                 title: titleRef.current,
//                 price: priceRef.current,
//                 date: dateRef.current
//             }])
//         }
//         titleRef.current = "";
//         priceRef.current = "";
//         dateRef.current = "";
//     }

//     return (
//         <div className='m-3'>
//             <h1 className='mt-5 mb-3'>Insart Items</h1>
//             {error && <Alert varient = "danger">{error}</Alert>}
//             <Form>
//                 <Form.Group className="mb-3" onSubmit={(e)=>inputTitle(e.target.value)} controlId="">
//                     <Form.Label>Item's Name:</Form.Label>
//                     <Form.Control type="item-name" placeholder="Entry Item's Name" ref={titleRef} />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="">
//                     <Form.Label>Bag Weight:</Form.Label>
//                     <Form.Control type="weight" placeholder="50 kg" ref={bagRef} />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="">
//                     <Form.Label>Price:</Form.Label>
//                     <Form.Control type="price" placeholder="$ 50" ref={priceRef} />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="">
//                     <Form.Label>Date:</Form.Label>
//                     <Form.Control type="date" ref={dateRef} />
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                     Submit
//                 </Button>
//             </Form>
//         </div>
//     )
// }

// export default CreatItemList


import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'

const CreatItemList = ({ items, setItems }) => {

    const [error, setError] = useState("");
    const titleRef = React.useRef(null)
    const bagRef = React.useRef(null)
    const priceRef = React.useRef(null)
    const dateRef = React.useRef(null)

    function handleSubmit(e) {
        e.preventDefault();
        if(titleRef.current?.value === "" || dateRef.current?.value === "" || priceRef.current?.value === "") {
            return setError(`All fields are mandatory`)
        } else {
            setError("");
            setItems([...items, {
                id: new Date().toString(),
                title: titleRef.current.value,
                price: priceRef.current.value,
                date: dateRef.current.value
            }])
        }
        titleRef.current.value = "";
        bagRef.current.value = "";
        priceRef.current.value = "";
        dateRef.current.value = "";
    }

    return (
        <div className='m-3'>
            <h1 className='mt-5 mb-3'>Insart Items</h1>
            {error && <Alert varient = "warning">{error}</Alert>}
            <Form onSubmit={(e)=>handleSubmit(e)}>
                <Form.Group className="mb-3"  controlId="">
                    <Form.Label>Item's Name:</Form.Label>
                    <Form.Control type="item-name" placeholder="Entry Item's Name" ref={titleRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Bag Weight:</Form.Label>
                    <Form.Control type="weight" placeholder="50 kg" ref={bagRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control type="price" placeholder="$ 50" ref={priceRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Date:</Form.Label>
                    <Form.Control type="date" ref={dateRef} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CreatItemList