import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos = new Array<Produto>();
    tipoProduto: any;
    id: number = 0;

    criar(produto: Produto): void {
        this.listaProdutos.push(produto)
        console.log(`Novo produto criado: ${produto.nome}`);
    }
    listar(): void {
        this.listaProdutos.forEach(produto => {
            produto.visualizar();
        });
    }
    pesquisar(id: number): void {
        const buscarProduto = this.buscarId(id);

        if(buscarProduto !== null) {
            buscarProduto.visualizar();
        } else {
            console.log(`Produto com ID ${id} não encontrado.`);
        }
    }
    atualizar(produto: Produto): void {
        const buscarProduto = this.buscarId(produto.id);

        if(buscarProduto !== null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscarProduto)] = produto;
        } else {
            console.log(`Produto com ID ${produto.id} não encontrado.`);
        }
    }
    deletar(id: number): void {
        const buscarProduto = this.buscarId(id);

        if(buscarProduto!== null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscarProduto), 1);
            console.log(`Produto com ID ${id} deletado.`);
        } else {
            console.log(`Produto com ID ${id} não encontrado.`);
        }
    }

    //Métodos Auxiliares
    public buscarId(id: number): Produto | null {
        for (let produto of this.listaProdutos){
            if(produto.id === id){
                return produto;
            }
        }   
    return null;
    }

    public gerarId(): number {
        return ++this.id;
    } 
    
}