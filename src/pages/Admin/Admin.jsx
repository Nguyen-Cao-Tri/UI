import React,{useState} from 'react'
import Sidebar from '../../components/Sidebar/SidebarAdmin'
import Content from './Content/Content'
const Admin = () => {
  const [ clickKeyValue,setKeyClickValue ] = useState('')
  console.log('value',clickKeyValue);

  return (
    <div style={{display:'flex'}}>
      <Sidebar onClick={value=>setKeyClickValue(value.key)}/>
      <Content clickKeyValue={clickKeyValue} style={{with:'100%',heigth:'100vh'}}/>
    </div>
  )
}

export default Admin
