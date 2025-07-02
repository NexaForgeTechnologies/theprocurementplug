import React from 'react';

const Checkbox = ({ id, name, checked, onChange, label }) => {
    return (
        <div className="flex items-center gap-2">
            <input
                type="checkbox"
                id={id}
                name={name}
                checked={checked}
                onChange={onChange}
                className="p-2 border border-[#85009D] rounded focus:outline-none"
            />
            <label
                htmlFor={id}
                className="block text-[#808080] font-medium"
            >
                {label}
            </label>
        </div>
    );
};

export default Checkbox;