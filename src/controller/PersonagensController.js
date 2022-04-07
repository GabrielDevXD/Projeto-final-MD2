import { personagens } from "../model/tanjasdb.js";

export const getHome = async (req, res) => {
  try {
    const characters = await personagens.findAll();
    res.render("index.ejs", { characters });
  } catch (err) {
    res.send(err.message);
  }
};

export const getAdd = (req, res) => {
  res.status(200).render("adicionar.ejs");
};

export const postAdd = async (req, res) => {
  console.log(req.body);
  const { nome, idade, fruta, img, descricao } = req.body;
  try {
    await personagens.create({ nome, idade, fruta, img, descricao });
    res.status(200).redirect("/");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const getRead = async (req, res) => {
  try {
    const id = +req.params.id;
    const personagen = await personagens.findByPk(id);
    res.render("detalhe.ejs", { personagen });
  } catch (err) {
    res.send(err.message);
  }
};
export const getDelete = async (req, res) => {
  try {
    const id = +req.params.id;
    await personagens.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).redirect("/");
  } catch (err) {
    res.status(500).send(err.message);
  }
};
export const getUpdate = async (req, res) => {
  try {
    const id = +req.params.id;
    const personagem = await personagens.findByPk(id);
    res.status(200).render("update.ejs", { personagem });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const updatePost = async (req, res) => {
  const { nome, idade, fruta, img, descricao } = req.body;
  try {
    await personagens.update(
      {
        nome: nome,
        idade: idade,
        fruta: fruta,
        img: img,
        descricao: descricao,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).redirect("/");
  } catch (err) {
    res.status(500).send(err.message);
  }
};
