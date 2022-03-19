
const Button = (props) => {

   const redirect = () => {
       window.location.assign('/' + props.text)
   }

    return (
        <button style={{backgroundColor: props.color}} className={props.text, "btn"} onClick={redirect}>
            {props.text}</button>
    )
}
export default Button