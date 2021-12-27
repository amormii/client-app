import React from 'react';
import Select from 'react-select'

const Guests = () => {
    const options = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '4', label: '4' },
        { value: '6', label: '6' }
    ]

    const styles = {
        option: (provided) => ({
            ...provided,
            textAlign: "center",
            fontFamily: "'Oswald', sans-serif",
            color: "black",
            fontSize: "18px",
            ':hover': {
                backgroundColor: "#3E2620",
                color: "white"
            }
        }),
        singleValue: (provided) => ({
            ...provided,
            color: "black",
            fontFamily: "'Oswald', sans-serif",
            fontSize: "20px",
            fontWeight: "lighter",
            textAlign: "center",
        }),
        indicatorsContainer: (provided) => ({
            ...provided,
            display: "none",
        }),
        control: (provided) => ({
            ...provided,
            border: "none",
        }),
        input: (provided) => ({
            ...provided,
            margin: "0",
            padding: "0",
            cursor: "pointer"
        }),
        container: (provided) => ({
            ...provided,
            width: "640px",
            left: "0",
            right: "0",
            margin: "auto",
            marginTop: "15px"
        }),
        menu: (provided) => ({
            ...provided,
            top: "-23px"
        }),
    };

    return (
        <Select
            defaultValue={options[0]}
            options={options}
            styles={styles}
            theme={(theme) => ({
                ...theme,
                colors: {
                    ...theme.colors,
                    primary25: 'white',
                    primary50: "white",
                    primary: 'white',
                },
            })}/>
    );
};

export default Guests;