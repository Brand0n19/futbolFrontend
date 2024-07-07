export interface Futbolista{
    id: number
    nombres: string
    apellidos: string
    caracteristicas: string
    fecha_nac: string
    id_posicion: number
    objPosicion: Posicion
}

export interface Posicion{
    id: number
    descripcion: string
}