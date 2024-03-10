import React, { useState } from 'react';

function Home() {
    const [textBoxes, setTextBoxes] = useState([{ id: 1, value: '' }]);
    const [sum, setSum] = useState(0);

    const handleAddTextBox = () => {
        const newId = textBoxes.length + 1;
        setTextBoxes([...textBoxes, { id: newId, value: '' }]);
    };

    const handleDeleteTextBox = (id) => {
        setTextBoxes(textBoxes.filter((textBox) => textBox.id !== id));
    };

    const handleChange = (id, value) => {
        const updatedTextBoxes = textBoxes.map((textBox) =>
            textBox.id === id ? { ...textBox, value } : textBox
        );
        setTextBoxes(updatedTextBoxes);
        const newSum = updatedTextBoxes.reduce((acc, textBox) => acc + parseFloat(textBox.value || 0), 0);
        setSum(newSum);
    };

    return (
        <div className='flex flex-col justify-center items-center pt-16'>
            {textBoxes.map((textBox) => (
                <div key={textBox.id} className="flex items-center mb-2">
                    <input
                        type="text"
                        value={textBox.value}
                        onChange={(e) => handleChange(textBox.id, e.target.value)}
                        className='border-2 border-gray-500 rounded-md mr-2 p-2 focus:outline-none focus:border-blue-700'
                        placeholder="Enter a value"
                    />
                    <button onClick={() => handleDeleteTextBox(textBox.id)} className='bg-red-500 py-2 px-4 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600'>Delete</button>
                </div>
            ))}
            <div className='flex justify-between items-center gap-x-20'><button onClick={handleAddTextBox} className='bg-blue-500 py-2 px-4 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-5'>Add TextBox</button>
                <div className='mt-5 text-xl'>Total Sum: {sum}</div></div>

        </div>
    );
}

export default Home;
