const options = [
    {
        value: "brazil",
        label: "Brasil"
    },
    {
        value: "china",
        label: "China"
    },
    {
        value: "germany",
        label: "Alemanha"
    },
    {
        value: "italy",
        label: "Itália"
    },
    {
        value: "usa",
        label: "Estados Unidos"
    }
];

const customStyles = {
    container: (provided, state) => ({
        ...provided,
        width: '50%',
        minWidth: '200px',
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'center',
    }),
    control: (provided, state) => ({
        ...provided,
        border: `1px solid ${state.isFocused ? '#f48c06b3' : '#CCC'} `,
        boxShadow: 'none',
        width: '100%',
        height: '40px',
        fontFamily: 'Dosis, sans-serif',
        fontSize: '14px',
        fontWeight: '500',
        letterSpacing: '2px',
        padding: '0',
        "&:hover": {
            borderColor: "#f48c06b3",
            boxShadow: 'none'
        },
    }),
}

module.exports = {options, customStyles}