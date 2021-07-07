import React, { useState, useEffect } from 'react';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import Button from '@material-ui/core/Button';

const Show = (props) => {
    const [date, setDate] = useState(new Date())
    const Del = () => {
        props.func(props.id);
    }

    useEffect(() => {
        setDate(new Date())
    }, [date.toLocaleTimeString])

    return(
        <div className="showin">
            <p>{date.toLocaleDateString()}</p>
            <p>{date.toLocaleTimeString()}</p>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <div className='abs'>
            <Button onClick={Del} className='b1'>
                <DeleteRoundedIcon style={{color:'red'}}/>
            </Button>
            </div>
        </div>
    );
}

export default Show;