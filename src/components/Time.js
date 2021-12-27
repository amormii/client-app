import React from 'react';
import Select from 'react-select'

const Time = () => {
    const options = [
        { value: '1', label: '13:00' },
        { value: '2', label: '13:30' },
        { value: '3', label: '14:00' },
        { value: '4', label: '14:30' },
        { value: '5', label: '15:00' },
        { value: '6', label: '15:30' },
        { value: '7', label: '16:00' },
        { value: '8', label: '16:30' },
        { value: '9', label: '17:00' },
        { value: '10', label: '17:30' },
        { value: '11', label: '18:00' },
        { value: '12', label: '18:30' },
        { value: '1', label: '19:00' },
        { value: '2', label: '19:30' },
        { value: '3', label: '20:00' },
        { value: '4', label: '20:30' },
        { value: '5', label: '21:00' }
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
        menuList: (provided) => ({
            ...provided,
            height: "238px"
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

export default Time;