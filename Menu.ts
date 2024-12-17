import readlinesync = require('readline-sync');
import { colors } from "./util/cores";
import { Medicamento } from "./model/Medicamento";
import { Cosmetico } from "./model/Cometico";
import { ProdutoController } from "./controller/ProdutoController";
export function main() {
   let id, tipo, preco: number;
   let nome: string;

   const tipoProduto = ['Medicamento', 'Cosmetico']
   let produtos = new ProdutoController();

   while (true) {
    menu()
    let opcao = readlinesync.questionInt("")

    switch (opcao) {
    case 1:
        nome = readlinesync.question("Nome do produto: ")
        preco = readlinesync.questionFloat("Preço do produto: ")

        tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel : false}) + 1;

        switch(tipo) {
            case 1:
                console.log("Digite a marca do medicamento: " )
                const marca = readlinesync.question("")
                produtos.criar(new Medicamento(produtos.gerarId(), nome, tipo, preco, marca))
            break;
            case 2:
                console.log("Digite a porra da fragrancia: " )
                const fragrancias = readlinesync.question("")
                produtos.criar(new Cosmetico(produtos.gerarId(), nome, tipo, preco, fragrancias))
            break;
        }

        keyPress();
        break
    case 2:
        produtos.listar()
        keyPress();
        break
    case 3:
        id = readlinesync.questionInt("ID do produto: ")
        produtos.pesquisar(id)
        keyPress();
        break
    case 4:
        id = readlinesync.questionInt("ID do produto: ")
        const produtoExistente = produtos.buscarId(id);
        if(produtoExistente) { 
            nome = readlinesync.question("Novo nome do produto: ")
            preco = readlinesync.questionFloat("Novo preço do produto: ")

            if (produtoExistente.tipo === 1) {
                console.log("Digite a nova marca do medicamento: ");
                const marca = readlinesync.question("");
                produtos.atualizar(new Medicamento(id, nome, produtoExistente.tipo, preco, marca));
            } else if (produtoExistente.tipo === 2) {
                console.log("Digite a nova fragrância do cosmético: ");
                const fragrancias = readlinesync.question("");
                produtos.atualizar(new Cosmetico(id, nome, produtoExistente.tipo, preco, fragrancias));
            }
        } else {
            console.log(`Produto com ID ${id} não encontrado.`);
        }
        keyPress();
        break
    case 5:
        id = readlinesync.questionInt("ID do produto: ")
        produtos.deletar(id);
        keyPress();
        break
    case 0:
        about()
        keyPress();
        break
    default:
        console.log(colors.fg.redstrong + "\nOpcao invalida! Tente novamente." + colors.reset);
        break 
    }
}
}

function menu(): void {
    console.log(colors.fg.magenta + "\n" + "=".repeat(30) + "❀ Farmacia ❀" + "=".repeat(30) + "\n" + colors.reset);
    console.log("   1 - Criar Produto")
    console.log("   2 - Listar todos os produtos")
    console.log("   3 - Pesquisar produto por id")
    console.log("   4 - Atualizar produto")
    console.log("   5 - Apagar produto")
    console.log("   0 - Sair")

    console.log(colors.fg.magenta + "\n","-".repeat(68) ,"\n" + colors.reset)
    console.log(colors.fg.blue + "Digite a opcao desejada: " + colors.reset) 
}

function about() {
    console.log(colors.fg.magentastrong + "\n","=".repeat(22) ,"✨ Programa encerrado! ✨", "=".repeat(20), "\n"+ colors.reset)
    console.log("Desenvolvido por: Isis Yume")
    console.log("GitHub: iyumw")
    console.log("LinkedIn: https://www.linkedin.com/in/isis-okamoto/")
    console.log(colors.fg.magentastrong + "\n","=".repeat(68) ,"\n"+ colors.reset)
    process.exit(0)
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...")
    readlinesync.prompt();
}

main();