import { Produto } from "./Produto";

export class Cosmetico extends Produto {
    private _fragrancias: string;

    constructor(id: number, nome: string, tipo: number, preco: number, fragrancias: string) {
        super(id, nome, tipo, preco);
        this._fragrancias = fragrancias;
    }

	public get fragrancias(): string {
		return this._fragrancias;
	}

	public set fragrancias(nome: string) {
		this._fragrancias = nome;
	}

// Método visualizar sobrescrito, que chama o método visualizar da classe base Produto
// e depois exibe a fragrância do cosmético
    public visualizar(): void {
        super.visualizar();
        console.log("Fragrâncias: " + this._fragrancias);
    }

}