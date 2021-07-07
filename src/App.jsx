import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Write from './Write';
import Show from './Show';
import { useState } from 'react';

const App = () => {
    const [show, setShow] = useState([]);
    const AddNote = (note) => {
        setShow((prev) => {
            if (note.title !== '' || note.content !== "")
                return [...prev, note];

            else {
                alert('Add Content and Title');
                return [...prev];
            }
        });
    }

    const DeleteNote = (id) => {
        setShow((prev) => {
            return (
                prev.filter((val, ind) => {
                    return (ind !== id);
                })
            );
        })
    }

    return (
        <div className='app'>
            <Header />
            <Write pass={AddNote} />
            <div className="show">
                {show.map((val, i) => {
                    return <Show key={i} id={i} title={val.title} content={val.content} func={DeleteNote} />
                })}
            </div>

            <Footer />
        </div>
    );
}

export default App;