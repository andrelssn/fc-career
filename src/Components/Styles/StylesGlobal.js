export const autoCompleteStyleUser = {
    // Estilo para o Input em geral
    "& .MuiInput-underline:before": {
        borderBottomColor: "var(--text)", // Cor da linha inferior padrão
    },
    // Estilo para a linha inferior ao passar o mouse
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
        borderBottomColor: "var(--text)", // Cor da linha inferior ao passar o mouse
    },
    // Estilo para a linha inferior quando focado
    "& .MuiInput-underline:after": {
        borderBottomColor: "var(--orange)", // Cor da linha inferior quando focado
    },
    // Estilo para o rótulo
    "& .MuiInputLabel-root": {
        color: "var(--text)", // Cor do rótulo
        "&.Mui-focused": {
            color: "var(--orange)", // Cor do rótulo quando focado
        },
        "&.Mui-error": {
            color: "red", // Cor do rótulo quando há erro
        },
    },
    // Estilo para o texto de entrada real
    "& .MuiInput-input": {
        color: "var(--text)", // Cor do texto digitado
    },
        // Estilo para as opções (dropdown)
    "& + .MuiAutocomplete-popper": {
        "& .MuiAutocomplete-paper": {
            backgroundColor: "#f0f0f0", // Cor de fundo do dropdown
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgb(117, 117, 117)"
        },
            "& .MuiAutocomplete-listbox": {
            padding: 0,
            "& .MuiAutocomplete-option": {
                color: "var(--text)",
                backgroundColor: "var(--theme)",
                "&:hover": {
                    backgroundColor: "var(--theme)", // Cor ao passar o mouse sobre a opção
                },
                '&[aria-selected="true"]': {
                    backgroundColor: "var(--theme-dark)",
                },
            },
        },
    },
    '& .MuiAutocomplete-popupIndicator': {
        color: 'var(--text)', // Cor do ícone
        fontSize: '2rem', // Tamanho do ícone
        '&:hover': {
            backgroundColor: 'rgba(255, 0, 0, 0.1)', // Fundo ao passar o mouse
        },
        '&.Mui-focused': { // Estilo quando o Autocomplete está focado
            color: 'darkred',
        },
    },
};
