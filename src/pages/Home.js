import Entry from "../components/Entry"
import { useNavigate } from 'react-router-dom'
import { signOut, getAuth } from 'firebase/auth'
import { toast } from 'react-toastify'

function Home() {

    const navigate = useNavigate()

    const signUserOut = () => {
        const auth = getAuth()
        try {
            signOut(auth)
            navigate('/sign-in')
        } catch (error) {
            toast.error('Sign out failed.')
        }
    }

    return (
        <>
            <header className="container">
                <p className="cursor-pointer absolute right-0 mt-5 mr-5" onClick={signUserOut}>Sign out</p>
            </header>
            <div className="flex">
                <Entry />
            </div>
        </>

    )
}

export default Home
