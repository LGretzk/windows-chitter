function Button(props) {

    return (
      <div>
        <button type="button" value="delete" onClick={props.onClick}>Delete</button>
      </div>
    );
  }
  
  export default Button;