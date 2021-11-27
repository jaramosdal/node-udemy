const Role = require('../models/role');

const esRolValido = async(rol = '') => {
    const existeRol = await Role.findeOne({rol});
    if (!existeRol) {
        throw new Error(`El rol ${rol} no está registrado en la BD`)
    }
}

// Verificar si el correo existe
const emailExiste = async(correo = '') => {
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo:  ${correo}, ya está registrado`);
    }
}

const existeUsuarioPorId = async(id) => {
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`El id no existe:  ${id}`);
    }
}

module.exports = {
    esRolValido,
    emailExiste,
    existeUsuarioPorId
}