export const Table = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Hair Color</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {data.map((character, index) => (
                    <tr key={index}>
                        <td>{character.name}</td>
                        <td>{character.height}</td>
                        <td>{character.hair_color}</td>
                        <td>{character.gender}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};