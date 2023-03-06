export interface AreasScoredProps {
    svg: JSX.Element;
    text: string;
    score: number;
    //status?: 'reaction' | 'memory' | 'verbal' | 'visual';
    className?: string;
}

export interface DataProps {
    id: number;
    category?: string;
    score?: number;
    icon?: JSX.Element;
}