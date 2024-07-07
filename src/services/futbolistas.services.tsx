import { baseApi } from "../api/baseApi";
import { Futbolista } from "../model/futbolista.model";

export const getDataAll = async():Promise<Futbolista[]> => {
    const response = await fetch(`${baseApi}/`)
    if(!response.ok){
        throw new Error(`Error: ${response.statusText}`)
    }

    const data: Futbolista[] = await response.json();
    return data;
}

export const getDataById = async (id: number): Promise<Futbolista> => {
    const response = await fetch(`${baseApi}/${id}`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
  
    const data: Futbolista = await response.json();
    return data;
  };