import React,{ useState } from 'react';

export default ({user,chatlist, show, setShow}) => {
    const [list, setList] = useState([{}])
    const handleClose = () => {
        setShow(false);
    }
        return(
            <div className="OpenFiles">
                <input type="file" name="file"/>
                
            </div>
        )


}