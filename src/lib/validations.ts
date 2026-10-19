export const validatePhone = (telephone:string) => {
    const telephoneRegex = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
    return telephoneRegex.test(telephone);
}

export const validateEmail = (email:string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

export const validateDni = (dni:string) => {
    const dniRegex = /^\d{7,8}$/;
    return dniRegex.test(dni);
}

export const validatePassword = (password:string) => {
    const passwordRegex = /^(?=(?:.*[A-Z]){2,})(?=(?:.*\d){2,})(?=(?:.*[!@#$%^&*(),.?":{}|<>_+-]){2,}).{8,}$/;
    return passwordRegex.test(password);
}