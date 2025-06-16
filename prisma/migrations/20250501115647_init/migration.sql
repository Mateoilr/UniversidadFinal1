-- CreateTable
CREATE TABLE "carreradocente" (
    "id" SERIAL NOT NULL,
    "carreraId" INTEGER NOT NULL,
    "docenteId" INTEGER NOT NULL,

    CONSTRAINT "carreradocente_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "carreradocente" ADD CONSTRAINT "carreradocente_carreraId_fkey" FOREIGN KEY ("carreraId") REFERENCES "Carrera"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carreradocente" ADD CONSTRAINT "carreradocente_docenteId_fkey" FOREIGN KEY ("docenteId") REFERENCES "Docente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
