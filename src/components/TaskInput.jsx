export const TaskInput = (props) => {
    const{onKeyDown, onChange, text} = props;
    return(
        <input
        className={"input"}
        type="text"
        placeholder="Enter to add" 
        value={text}
        onKeyDown={onKeyDown}
        onChange={onChange}
        />
    )
}