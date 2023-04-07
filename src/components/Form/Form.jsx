import { useState } from "react";
import styles from './Form.module.css';
import Validation from './Validation.jsx';


const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {        
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(Validation ({
            ...userData,
            [event.target.name]: event.target.value
        }))
    
    }
    
    const handleSubmit = (event) => { 
        event.preventDefault();
        login(userData)                       
        };
    
    

    const image = 'https://www.latercera.com/resizer/6xg86UnIpeVu5PYgZ3E2GNn_ESg=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/SEWDAUGH3BENTDKGUGIQREJYS4.jpg'


    return(
        <div className={styles.Formulario}>
        <form onSubmit={handleSubmit}>
            <div className={styles.Formimage}>
            <img src={image} />
            </div>
            <label className={styles.Label}>EMAIL</label><br />
            <input name='email' type='email' placeholder="Ingrese su mail" value={userData.email} onChange={handleChange} />
            {errors.email && <span className={styles.Error}>{errors.email}</span>}
            <br/>

            <label className={styles.Label}>PASSWORD</label><br />
            <input name='password' type='password' value={userData.password} onChange={handleChange} />

            {errors.password && (<span className={styles.Error}>{errors.password}</span>)}
            <br />
            <button className={styles.Submit} >SUBMIT</button>
        
        </form>
        </div>
    )
}

export default Form;