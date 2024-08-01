export interface Ticket {
    id:number;
    titulo:string;
    fechaRegistro:string;
    hora:string
    detalle:string;
    responsable:string;
    solicitante:string;
    empresa_id:number; // relacion empresa
    nom_empresa?:string
    area_id:number;  // relacion area
    nom_area?:string;
    requerimiento_id:number; // relacion requerimiento
    nom_requerimiento?:string;
    subtipo_id:number; // relacion subtipo
    nom_subtipo?:string;
    
}
