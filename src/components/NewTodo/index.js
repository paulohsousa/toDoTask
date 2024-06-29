import React,{useState} from 'react'
import  PropTypes  from 'prop-types';
import './styles.css'
const NewToDo = ({onNewToDo}) =>  {
    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;

    const [value, setValue] = useState('')
    const erase = () => {
    
        setValue("")
      }
      const submit = () => {
        if(onNewToDo) {
            onNewToDo(value);
            erase();
        }
        console.log('submit', value);
      }
      const onChange = (event) => {
        setValue(event.target.value)
      }
      const onKeyDown = (event) => {
        if (event.which === ENTER_KEY) {
          submit();
        } else if (event.which === ESCAPE_KEY) {
          erase();
        }
      }
  return (
    <input
    className='new-todo'
    placeholder='O que precisa ser feito'
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown} />
  )
}


NewToDo.propTypes = {
    onNewToDo:PropTypes.func.isRequired
}
export default NewToDo
