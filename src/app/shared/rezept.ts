export interface Rezept {
    name: string;
    zubereitungsschritte: zubereitungsschritt[]
    
}

export interface Zutat {
    name: string;
    zubereitungsschritt: string[]
    
}


export interface zubereitungsschritt {
    zutaten: Zutat;
    zubereitungsschritte: zubereitungsschritt[];
    verarbeitung: string[]


}

