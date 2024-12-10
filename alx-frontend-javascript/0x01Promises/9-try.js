export default function guardrail(mathFunction) {

    let value;
    try {
        value = [mathFunction()];
    } catch (error) {
        value = [`Error: ${error.message}`];
    } finally {
        value.push('Guardrail was processed')
    }

    return value;
}