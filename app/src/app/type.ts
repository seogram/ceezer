
export type Project = {
    id: string; 
    name: string; 
    country: string; 
    image: string; 
    price_per_ton: number;
    offered_volume_in_tons: number; 
    distribution_weight: number;
    supplier_name: string; 
    earliest_delivery: string; 
    sdgs: number[], 
    description: string
};
export type Projects = Project[];

export type CartItem = {
    id: string;
    name : string;
    volume: number;
    offeredVolume : number;
    pricePerTon : number;
    image? : string;
}
