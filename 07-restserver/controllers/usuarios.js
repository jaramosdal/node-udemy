const { response, request } = require('express');
const Usuario = require('../models/usuario');

const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;
    res.json({
        msg: 'get API - controlador',
        q, 
        nombre, 
        apikey,
        page,
        limit
    });
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;
    const { nombre, edad } = req.body;

    res.status(400).json({
        msg: 'put API - controlador',
        id
    });
}

const usuariosPost = async(req, res = response) => {

    const body = req.body;
    const usuario = new Usuario(body);

    await usuario.save();

    res.json({
        usuario
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}