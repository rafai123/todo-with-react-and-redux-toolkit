import {ImCheckboxUnchecked, ImCheckboxChecked} from 'react-icons/im'
import { IoTrashBinSharp } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";

const TodoCard = ({content, completed, onToggle, onRemove}) => {
    const cardStyle = "flex container justify-between mx-auto max-w-full border shadow-lg px-5 py-3 rounded-lg border mt-4 items-center"
    const contentStyle = "text-slate-700 font-medium capitalize text-xl"
    return (
        <>
            <div className={(completed) ? `bg-sky-200 ${cardStyle}` : `bg-red-200 ${cardStyle}`  } >
                <p className={completed ? `line-through  ${contentStyle}` : `${contentStyle}` }>{content}</p>
                <div className="flex gap-5 items-center">
                    <input 
                        type="checkbox" 
                        value={content}
                        name="completed"
                        checked={completed}
                        onChange={onToggle}
                        className="appearance-none checked:bg-red-600 "
                    />
                    <span className="ml-2 text-slate-700 font-semibold cursor-pointer hover:font-bold  inline-block text-2xl hover:text-green-700" onClick={onToggle}>{completed ?  <ImCheckboxChecked /> : (<ImCheckboxUnchecked /> )}</span>
                    <button className="ml-2 text-slate-700 font-semibold cursor-pointer hover:font-bold  inline-block text-2xl hover:text-indigo-600"><FiEdit /></button>
                <button onClick={onRemove} className="p-2 text-2xl hover:text-rose-500"><IoTrashBinSharp /></button>
                </div>
            </div>
        </>
    )

}

export default TodoCard