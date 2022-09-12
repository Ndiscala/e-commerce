import React from 'react'

const Form = () => {
    const [name, setName] = useState('');
    const [direccion, setDireccion] = useState('')
    const [contact, setContact] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    }
    const handleChangeName = (event) => {
        setName(event.target.value)
    }
    const handleChangeDireccion = (event) => {
        setDireccion(event.target.value)
    }
    const handleChangeContact = (event) => {
        setContact(event.target.value)
    }

    useEffect(() => {
    }, [third])
    

  return (
    <div>
        <form action='' onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='Name..'
                name='nombre'
                value={name} 
                onChange={handleChangeName}/>
            <input 
                type='text' 
                placeholder='Direccion' 
                name='direccion'
                value={direccion}
                onChange={handleChangeDireccion}/>
            <input 
                type='number' 
                placeholder='Contact'
                name='contact'
                value={contact}
                onChange={handleChangeContact} />
            <button>Enviar</button>
        </form>
    </div>
  )
}

export default Form;