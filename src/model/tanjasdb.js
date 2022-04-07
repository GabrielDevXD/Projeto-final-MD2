import Sequelize from "sequelize";
import { connection } from "../database/connection.js";

export const personagens = connection.define(
  "personagens",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false, // não pertimite nulo
      primaryKey: true,
      autoIncrement: true, //gera altomaticamente
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false, //nulo
    },
    idade: {
      type: Sequelize.INTEGER,
      allowNull: false, //nulo
    },
    fruta: {
      type: Sequelize.STRING,
      allowNull: false, //nulo
    },
    img: {
      type: Sequelize.STRING,
      allowNull: false, //nulo
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false, //nulo
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timetamps: false,
  }
);
const initTable = async () => {
  await personagens.sync();
};

initTable();
