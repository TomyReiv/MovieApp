export interface Movie {
    id?:           number;
    Title?:        string;
    Description?:  string;
    Rating?:       number;
    Duration?:     string;
    Genre?:        string[];
    ReleasedDate?: string;
    image?:        string;
    TrailerLink?:  string;
}