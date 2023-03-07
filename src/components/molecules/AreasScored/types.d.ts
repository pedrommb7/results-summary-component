export interface AreasScoredProps {
    svg?: JSX.Element;
    score: number;
    status: 'Reaction' | 'Memory' | 'Verbal' | 'Visual';
    className?: string;
}

export interface DataProps {
    id: number;
    category?: string;
    score?: number;
    icon?: JSX.Element;
}