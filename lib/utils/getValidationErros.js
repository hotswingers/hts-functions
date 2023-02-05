export function getValidationErros(err) {
    const validationsErros = {};
    err.inner.forEach(error => {
        if (error.path) {
            validationsErros[error.path] = error.message;
        }
    });
    return validationsErros;
}
