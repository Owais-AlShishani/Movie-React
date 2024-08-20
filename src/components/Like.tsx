import { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";

interface ILike {
    onClick: () => void,
}
const Like = ({ onClick }: ILike) => {
    const [status, setStatus] = useState(false);
    const handleToggle = () => {
        setStatus(!status);
        onClick()
    }
    if (status) {
        return <IoMdHeart color="red" size={50} onClick={handleToggle} />
    }
    else {
        return <IoIosHeartEmpty size={50} onClick={handleToggle} />
    }

}

export default Like