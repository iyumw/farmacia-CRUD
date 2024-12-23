import { Produto } from "../model/Produto";

export interface ProdutoRepository {
    criar(produto: Produto): void;
    listar(): void;
    pesquisar(id: number): void;
    atualizar(produto: Produto): void;
    deletar(id: number): void;
}