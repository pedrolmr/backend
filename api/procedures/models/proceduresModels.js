const db = require("../../../data/dbConfig");

module.exports = {
  getProcedures,
  getProceduresBy,
  getProceduresCoverages,
  addProcedure
};

async function getProcedures() {
  const procedures = await db("procedures");
  return procedures;
}

async function getProceduresBy(param) {
  const procedure = await db("procedures").where(param);
  // .first();

  return procedure;
}

async function getProceduresCoverages(id) {
  const coverages = await db("procedures")
    .join("coverages", "procedures.id", "coverages.procedure_id")
    .where({ "procedures.id": id });

  return coverages;
}

async function addProcedure(procedure) {
  const [id] = await db("procedures")
    .insert(procedure)
    .returning("id");

  const newprocedure = await getProceduresBy({ id: id });

  return newprocedure;
}