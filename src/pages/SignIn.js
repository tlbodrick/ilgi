import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { FaArrowAltCircleRight } from 'react-icons/fa'
import OAuth from '../components/OAuth'
import { IconContext } from 'react-icons'


function SignIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const navigate = useNavigate()

    const onChange = e => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [e.target.id]: e.target.value
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const auth = getAuth()

            const userCredential = await signInWithEmailAndPassword(auth, email, password)

            if (userCredential.user) {
                navigate('/')
            }
        } catch (error) {
            toast.error('User credentials are incorrect.')
        }

    }

    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen">
            <header>
                <h1 className='font-bold mb-5 text-sage'>Welcome back!</h1>
            </header>
            <form onSubmit={onSubmit} className="container flex flex-col items-center gap-4 max-w-xs">
                <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    className="input input-bordered w-full input-accent"
                    onChange={onChange}
                />
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="input input-bordered w-full input-accent"
                    onChange={onChange}
                />

                <Link to='forgot-password' className='text-sm self-end mb-5 text-sage'> Forgot Password</Link>

                <div className="flex justify-between w-full">
                    <p className='text-sage'>Sign In</p>
                    <button>
                        <IconContext.Provider
                            value={{ color: '#B1BCA0' }}
                        >
                            <FaArrowAltCircleRight size={25} />
                        </IconContext.Provider>
                    </button>
                </div>

                <OAuth />
            </form>
        </div >
    )
}

export default SignIn
