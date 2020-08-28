import React, { useState} from 'react';
import './Courses.css';
import Course from '../../FakeData/Fakedata';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';

const Courses = (props) => {
    

    const [Courses, setCourses] = useState(Course);
    // const Data = () => {
    //     setCourses(Course)
    // }

    const handleAddProduct = (product) => {
        console.log('product added', product);

        const newCart = [...cart, product]
        setCart(newCart);
    }
    const [cart, setCart] = useState([]);

    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     let product = cart[i];
    //     total = total + product.price; 
        
    // }
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
        


    return (
           <div>
               <p>Buy Total Course: {cart.length}</p>
               <p>Total Course Amount : $</p>
               <h5>Courses Available</h5>
            <div>
                {
                    Courses.map(user => <Footer user={user} key={user.id} AddCourse={handleAddProduct}></Footer>)
                }
             </div>
             
             <footer>
             © 2020 masud.md272@gmail.com All rights reserved.
             </footer>
          </div>
    );
};

export default Courses;