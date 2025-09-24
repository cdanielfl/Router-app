export const formatCep = (value) => {
    const cep = value.replace(/\D/g, ''); // Remove tudo que não é número
    return cep.replace(/(\d{5})(\d{3})/, '$1-$2'); // Formato 00000-000
}

export const formatPhone = (value) => {
    const phone = value.replace(/\D/g, ''); // Remove tudo que não é número
    
    if (phone.length <= 10) {
        // Telefone fixo: (11) 1234-5678
        return phone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
        // Celular: (11) 99999-9999
        return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
}