import { Produto } from "./Produto";

export class Medicamento extends Produto {
    private _marca: string;

    constructor(id:number, nome: string, tipo: number, preco: number, marca: string) {
        super(id, nome, tipo, preco);
        this._marca = marca;
    }

	public get marca(): string {
		return this._marca;
	}

	public set marca(generico:string) {
		this._marca = generico;
	}

// Método visualizar sobrescrito, que chama o método visualizar da classe base Produto
// e depois exibe a marca do medicamento
    public visualizar(): void {
        super.visualizar();
        console.log("Marca: " + this._marca);
    }

}