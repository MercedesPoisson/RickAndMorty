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
    
    

    const image = 'https://i.pinimg.com/originals/6e/0c/fd/6e0cfd6895c9cf2450c02900696cf336.jpg'


    return(
        <div className={styles.Formulario}>
        <form onSubmit={handleSubmit}>
            <div className={styles.Formimage}>
            <img src={image} />
            </div>
            <label className={styles.Label}>EMAIL</label><br />
            <input name='email' type='email' placeholder="Ingrese su mail" value={userData.email} onChange={handleChange} />
            
            <br/>

            <label className={styles.Label}>PASSWORD</label><br />
            <input name='password' type='password' value={userData.password} onChange={handleChange} />

            
            <br />
            <button className={styles.Submit} >SUBMIT</button>

            <div>
            {errors.email && <span className={styles.Error}>{errors.email}</span>}
            <br />
            {errors.password && (<span className={styles.Error}>{errors.password}</span>)}

            </div>
        
        </form>
        </div>
    )
}

export default Form;