import { useState } from 'react'
import { useNavigate } from 'react-router'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { db } from "../firebase.config"
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { serverTimestamp, setDoc, doc } from '@firebase/firestore'
import OAuth from '../components/OAuth'
import { IconContext } from 'react-icons'


function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formData

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

            const userCredential = await createUserWithEmailAndPassword(auth, email, password)

            const user = userCredential.user

            updateProfile(auth.currentUser, {
                displayName: name
            })

            const formDataCopy = { ...formData }
            delete formDataCopy.password
            formDataCopy.timestamp = serverTimestamp()

            await setDoc(doc(db, 'users', user.uid), formDataCopy)

            navigate('/')
        } catch (error) {

        }

    }

    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen">
            <header>
                <h1 className='font-bold mb-5 text-sage'>welcome</h1>
            </header>
            <form onSubmit={onSubmit} className="container flex flex-col items-center gap-4 max-w-xs">
                <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="input input-bordered w-full input-accent"
                    onChange={onChange}
                />
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

                <div className="flex justify-between w-full">
                    <p className="text-sage">Sign Up</p>
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

export default SignUp
