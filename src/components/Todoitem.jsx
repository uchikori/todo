export const TodoItem = (props) => {
    const {item, handleChange} = props;
    console.log(props);


    return (
        <label className={"panel-block"}>
          <input
          type="checkbox"
          checked={item.done}
          onChange={() => handleChange(item)}
          />
          {item.text}
        </label>
    )
}