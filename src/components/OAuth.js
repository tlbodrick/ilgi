import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'

function OAuth() {

    const navigate = useNavigate()

    const onGoogleClick = async (e) => {
        try {
            const auth = getAuth()
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider)
            const user = result.user;

            // check if user exists already in database
            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)

            //if user doesn't exist, create user in database
            if (!docSnap.exists()) {
                await setDoc(doc(db, 'users', user.uid), {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp()
                })
            }

            navigate('/')

        } catch (error) {
            toast.error('Could not authenticate with Google.')
        }
    }


    return (
        <>
            <div className="w-full h-3 border-b border-sage text-center mb-5">
                <p className="bg-white inline p-2 text-sage">OR</p>
            </div>
            <div onClick={onGoogleClick} className="cursor-pointer"><FcGoogle size={32} /></div>
        </>
    )
}

export default OAuth
