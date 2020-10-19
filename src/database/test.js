const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  //    // inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-24.0440641",
    lng: "-52.3884418",
    name: "Lar dos meninos",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "9898098765657",
    images: [
      "https://images.unsplash.com/photo-1572058685927-5175f7320c90?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1600711725615-d7dfb2215244?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 18h até 8h",
    opening_on_weekends: "0",
  });

  //consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  //consultar somente 1 orphanato, pelo id
  const orphanages = await db.all('SELECT * FROM orphanages WHERE id = "1"');
  console.log(orphanages);

  // deletar dado da tabela
  //   console.log(await db.run("DELETE FROM tabela orphanages WHERE id = '4'"))
  //  console.log(await db.run("DELETE FROM tabela orphanages WHERE id = '5'"))
});
