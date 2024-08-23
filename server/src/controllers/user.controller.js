import * as UserService from "../services/user.service.js";


export const ctrlGetAllUser = async(req, res) => {
    const users = await UserService.getAllUsers()

    if(!users.length) {
        res.status(404).send({
            status: 404,
            message: "No se han encontrado usuarios"
        });
    }

    res.status(200).send(users);
}

export const ctrlGetUserById = async(req, res) => {
    const { id } = req.params;
    const user = await UserService.getUserById( id );

    if(!user) {
        res.status(404).send({
            status: 404,
            message: "No se ha encontrado el usuario"
        });
    }

    res.status(200).send(user);
}

export const ctrlCreateUser = async(req, res) => {
    const data = req.body;
    const user = await UserService.createUser( data );

    if(!user) {
        res.status(500).send({
            status: 500,
            message: "No se ha podido crear el usuario"
        });
    }

    res.status(201).send(user);
}

export const ctrlUpdateUser = async(req, res) => {
    const { id } = req.params;
    const data = req.body;
    const user = await UserService.updateUser(id, data);

    if(!user) {
        res.status(404).send({
            status: 404,
            message: "No se ha encontrado el usuario"
        });
    }

    res.status(200).send(user);
}

export const ctrlDeleteUser = async(req, res) => {
    const { id } = req.params;
    const user = await UserService.deleteUser( id );

    if(!user) {
        res.status(404).send({
            status:404,
            message: "No se ha encontrado el usuario"
        })
    }

    res.status(200).send(user);
}