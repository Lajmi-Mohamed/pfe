import React,{useState} from 'react'
import Dropzone from "react-dropzone"
import AddIcon from '@material-ui/icons/Add';
import Axios from 'axios';
function FileUpload(props) {
    const [Images,setImages]=useState([])
    const onDrop=(files)=>{
       let formData = new FormData();
       const config={
           header:{"content-type":"multipart/form-data"}
       }
       formData.append("file",files[0])
       //save the Image we chose inside the node server
       Axios.post("/api/event/uploadImage",formData,config)
       .then(response=>{
           if(response.data.success){
          setImages([...Images, response.data.image])
          props.refreshfunction([...Images, response.data.image])
           }else{
               alert("failed to save the image in server")
           }
       })
    }
    return (
        <div style={{display:"flex",justifyContent:"space-around"}}>
        <Dropzone
        onDrop={onDrop}
        multiple={false}
        maxSize={800000000}
        >
{({getRootProps,getInputProps})=>(
    <div style={{width:"250px",height:"200px",border:"1px solid lightgray",diplay:"flex",alignItems:"center"}}
    {...getRootProps()}
    >
    <input {...getInputProps()} />
    <AddIcon 
    style={{fontSize:"80px" ,marginLeft:"85px",marginTop:"60px"}}/>
    </div>
)}

        </Dropzone> 
        <div style={{display:"flex",width:"250px",height:"200px",overflowX:"scroll"}}>
<div onClick>
    <img />
</div>

        </div>
        </div>
    )
}

export default FileUpload
