-- CreateTable
CREATE TABLE "empresa" (
    "id_empresa" SERIAL NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nome" TEXT NOT NULL,
    "desativado" BOOLEAN NOT NULL DEFAULT false,
    "data_desativacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "empresa_pkey" PRIMARY KEY ("id_empresa")
);

-- CreateTable
CREATE TABLE "nota_fiscal" (
    "id_nota_fiscal" SERIAL NOT NULL,
    "data_emicao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "numero_nota" INTEGER NOT NULL,
    "valor_nota" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "nota_fiscal_pkey" PRIMARY KEY ("id_nota_fiscal")
);

-- CreateTable
CREATE TABLE "pedido" (
    "id_pedido" SERIAL NOT NULL,
    "id_pedido_status" INTEGER NOT NULL,
    "id_nota_fiscal" INTEGER NOT NULL,
    "data_pedido_realizado" TIMESTAMP(3) NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "razao_social" TEXT NOT NULL,
    "nome_fantasia" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "desativado" BOOLEAN NOT NULL DEFAULT false,
    "data_desativacao" TIMESTAMP(3) NOT NULL,
    "id_entrega" INTEGER NOT NULL,
    "data_pedido_concluido" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pedido_pkey" PRIMARY KEY ("id_pedido")
);

-- CreateTable
CREATE TABLE "pedido_status" (
    "id_pedido_status" SERIAL NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status_pedido" TEXT NOT NULL,
    "data_desativacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pedido_status_pkey" PRIMARY KEY ("id_pedido_status")
);

-- CreateTable
CREATE TABLE "unidade" (
    "id_unidade" SERIAL NOT NULL,
    "id_empresa" INTEGER NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "razao_social" TEXT NOT NULL,
    "nome_fantasia" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "desativado" BOOLEAN NOT NULL DEFAULT false,
    "data_desativacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "unidade_pkey" PRIMARY KEY ("id_unidade")
);

-- CreateIndex
CREATE UNIQUE INDEX "empresa_nome_key" ON "empresa"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "pedido_id_pedido_status_key" ON "pedido"("id_pedido_status");

-- CreateIndex
CREATE UNIQUE INDEX "pedido_id_nota_fiscal_key" ON "pedido"("id_nota_fiscal");

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_id_nota_fiscal_fkey" FOREIGN KEY ("id_nota_fiscal") REFERENCES "nota_fiscal"("id_nota_fiscal") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_id_pedido_status_fkey" FOREIGN KEY ("id_pedido_status") REFERENCES "pedido_status"("id_pedido_status") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "unidade" ADD CONSTRAINT "unidade_id_empresa_fkey" FOREIGN KEY ("id_empresa") REFERENCES "empresa"("id_empresa") ON DELETE RESTRICT ON UPDATE CASCADE;

