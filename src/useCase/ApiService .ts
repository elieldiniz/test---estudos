import axios, { AxiosResponse } from 'axios';
import {Exercicio} from '../entities/exercio';

export class ApiService {
    private readonly url: string;

    constructor(url: string) {
        this.url = url;
    }

    private async obterDadosDaApi(): Promise<Exercicio[]> {
        try {
            const response: AxiosResponse<Exercicio[]> = await axios.get(this.url);
            return response.data;
        } catch (error) {
            console.error('Erro ao obter dados da API:');
            throw error;
        }
    }

    async obterExercicios(): Promise<Exercicio[]> {
        try {
            const exercicios: Exercicio[] = await this.obterDadosDaApi();
            console.log('Exercícios obtidos:', exercicios);
            return exercicios;
        } catch (error) {
            throw error;
        }
    }
}