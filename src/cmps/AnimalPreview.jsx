

export function AnimalPreview({ animal }) {
    return (
        <tr>
            <td>{animal.type}</td>
            <td>{animal.count}</td>
            <td><a target="_blank" href={`https://www.google.com/search?q=${animal.type}`}>Search</a></td>
        </tr>
    )
}


