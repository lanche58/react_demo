import React, {useState} from 'react';

function HooksTest(props) {
    const [value, setValue] = useState('123');
    return (
        <div>
            <p>{value}</p>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        </div>
    )
}

export default HooksTest;