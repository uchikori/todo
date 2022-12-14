export const TodoItem = (props) => {
    const {item, handleChange} = props;

    return (
        <label className={"panel-block"}>
          <input
          type="checkbox"
          checked={item.done}
          onChange={() => handleChange(item)}
          />
          <span className={item.done ? "has-text-grey-light" : ""}>{item.text}</span>
          
        </label>
    )
}