import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


export default function UserForm(): any {
    const [value, setValue] = React.useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e);
        console.log(value);
    }



    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input type='text' value={value} onChange={e => setValue(e.target.value)} required />
                <button type='submit'>submit</button>
            </form>
        </React.Fragment>
    )


}

