import React, { useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';

const Write = (props) => {

    const [note, setNote] = useState({title:"",content:''});
    const [c, setC] = useState(false);

    const InputF = (event) => {
        // alert('clicked');
        const {name, value} = event.target;
        console.log(name, value);
        setNote((prev)=>{
            return{
                ...prev,
                [name] : value
            }
        });
    }

    const AddE = () => {
        props.pass(note);
        setNote({title:"", content:""});
    }

    const check = () => {
        setC(true);
    }

    return(
        <div className="write" onChange={InputF} onClick={check} onDoubleClick={()=>{setC(false)}}>
            {c === true ?
            <>
            <input type='text' value={note.title} name='title' placeholder='Title' className='title' autoComplete='off'/>
            </> : null
            }
            <textarea type='text-area' rows='' column ='' value={note.content} name='content' placeholder='Write here' autoComplete='off' className='content'/>
            {c === true ?
            <>
            
            <Button onClick={AddE} className='btn'>
                <AddCircleIcon style={{color:'green', fontsize:40}}/>
            </Button></> : null
            }
        </div>
    );
}

export default Write;