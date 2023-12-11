import { AnimalPreview } from "./AnimalPreview"


export function AnimalList({ animalInfos }) {

    return (
        <section className="animal-list">
            <h1>Rare Animals</h1>
            <table>
                <tbody>
                    {animalInfos.map((animal) => {
                        return <AnimalPreview key={animal.type} animal={animal} />
                    })}
                </tbody>
            </table>
        </section>
    )
}