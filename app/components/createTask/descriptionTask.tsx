
export default function DescriptionTask(props: any) {
    return (
        <input onChange={ (e) => props.setDescriptionTask(e.target.value)} data-testid="inputDescriptionTask" className="h-10 w-72 rounded-lg border-2 text-primary bg-transparent text-center" type="text" name="description" id="description" placeholder="Descrição" />
    )
}