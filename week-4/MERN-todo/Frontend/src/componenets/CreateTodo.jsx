export function CreateTodo () {
    return <div>
        <input style={{
            padding: 10,
            margin: 10,
        }} type = "text" placeholder="title"></input> <br />
        <input style={{
            padding: 10,
            margin: 10,
        }}type = "text" placeholder="Desc"></input> <br />

        <button style={{
            padding: 10,
            margin: 10,
        }}>Add A Todo</button>
    </div>
}