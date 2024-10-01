const Serie = require("../models/Serie");

async function criarSerie(req, res) {
    try {
        const novaSerie = new Serie({ req, res });
        const serieSalva = await novaSerie.save();
        res
            .status(201)
            .json({ mensagem: "Serie adicionada com sucesso!", serie: serieSalva });
    } catch (erro) {
        res
            .status(500)
            .json({ mensagem: "Erro ao adicionar serie", erro: erro.message });
    }
}

async function listarSeries(req, res) {
    try {
        const series = await Serie.find();
        res.status(200).json(series);
    } catch (erro) {
        res
            .status(500)
            .json({ mensagem: "Erro ao listar series", erro: erro.message });
    }
}


async function attSerie(req, res) {
    try {
        const { id } = req.params;
        const serieatt = await Serie.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (serieatt) {
            res.status(200).json({ mensagem: "Serie atualizada", serie: serieatt });
        } else {
            res.status(404).json("Série não encontrada");
        }
    } catch (erro) {
        res
            .status(500)
            .json({ mensagem: "Não foi possivel atualizar", erro: erro.message });
    }
}


async function delSerie(id) {
    try {
        const { id } = req.params;
        const seriedel = await Serie.findByIdAndDelete(id);
        if (seriedel) {
            res.
                status(200).json({ message: "Deletado com sucesso!", serie: seriedel });
        } else {
            res.status(404).json("Série não encontrada");
        }
    } catch (erro) {
        console.error("Não foi possivel deletar", erro);
        res.status(500).json({ message: "Erro ao deletar série", erro: erro.message });
    }
}

module.exports = {criarSerie, listarSeries, attSerie, delSerie};