export async function getTournament() {
    const response = await fetch('http://localhost:80/tournaments/get-tournament');
    const jsonResponse = await response.json();
    const tournaments = jsonResponse.map((tournament: Tournament) => {
        return {
            id: tournament.id,
            name: tournament.name,
        };
    });
    return tournaments;
}

export interface Tournament {
    id: number;
    name: string;
}