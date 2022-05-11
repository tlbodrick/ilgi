import { promptList } from "./prompts.js"
import { IconContext } from 'react-icons'
import { BsPencilSquare, BsTrash2 } from 'react-icons/bs'
import { VscSave } from 'react-icons/vsc'



function Entry() {
    const date = new Date();
    const year = date.getFullYear()
    const month = date.getMonth()
    const fullMonth = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate()

    const random = () => {
        return (year * day * (month + 1)) % promptList.length;
    }
    return (
        <div className="flex w-screen h-screen items-center justify-center">
            <div className="border p-10 w-2/3">
                <div className="flex items-center justify-between pb-3">
                    <p className="italic tracking-widest">{`${fullMonth} ${day}, ${year}`}</p>
                    <div className="flex gap-3">
                        <IconContext.Provider value={{ className: "cursor-pointer" }}>
                            <BsPencilSquare />
                            <VscSave />
                            <BsTrash2 />
                        </IconContext.Provider>
                    </div>


                </div>

                <div>
                    <p className="pb-4">{promptList[random()]}</p>
                    <textarea className="border w-full h-60"></textarea>
                </div>
            </div>
        </div >
    )
}

export default Entry
