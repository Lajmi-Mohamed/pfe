import React,{useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import {Typography,Button,Form,message,Input,Icon} from "antd"
import GridItem from "../../components@material/Grid/GridItem.js";
import GridContainer from "../../components@material/Grid/GridContainer.js";
import CustomInput from "../../components@material/CustomInput/CustomInput.js";
import Card from "../../components@material/Card/Card.js";
import CardHeader from "../../components@material/Card/CardHeader.js";
import CardBody from "../../components@material/Card/CardBody.js";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FileUpload from "../../../utils/FileUpload"
const { TextArea }=Input;
const Continents=[
{key:1,value:"Sportif"},
{key:2,value:"Educatif"},
{key:3,value:"Scientifique"},
{key:4,value:"Festivate"},
{key:5,value:"Artisanat"}
]
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};
const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  const [TitleValue,setTitleValue]=useState("")
  const [DescriptionValue,setDescriptionValue]=useState("")
  const [ContinentValue,setContinentValue]=useState(1)
  const [DateValue,setDateValue]=useState("")
  const [Images,setImages]=useState([])
  const onContinentSelectChange=(event)=>{
    setContinentValue(event.currentTarget.value)
  }
  const onDescriptionChange=(event)=>{
    setDescriptionValue(event.currentTarget.value)
  }
const onTitleChange=(event)=>{
  setTitleValue(event.currentTarget.value)
}
const onDateChange=(event)=>{
  setDateValue(event.currentTarget.value)
}
const updateImages=(newImage)=>{
  setImages(newImage)
}
  return (
    <GridContainer styles={{ BackgroundColor: "blue !important" }}>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Ajouter évènement</h4>
            
          </CardHeader>
         <div>
           <Form on onSubmit>
            {/* DropZONE */}
            <h3 className="align-self-center" style={{marginLeft:"50px", fontFamily: "permanent Marker, cursive",
  letterSpacing: "0.3rem",textTransform:"uppercase",color:"rgb(109, 9, 109)",marginTop:"10px"
  }}>photos de l'événement</h3>

    
            <FileUpload refreshfunction={updateImages}/>
            <br />
            
          <h3 className="align-self-center" style={{marginLeft:"50px", fontFamily: "permanent Marker, cursive",
  letterSpacing: "0.3rem",textTransform:"uppercase",color:"rgb(109, 9, 109)"
  }}>Titre</h3>
        <TextField    value={TitleValue}
                      onChange={onTitleChange}
                      style={{ width: "90%",marginLeft:"50px" }}
                      name="firstName"
                     
                      InputLabelProps={{
                        shrink: true,
                      }}/>
       
           <br />
           <br />
           <h3 className="align-self-center" style={{marginLeft:"50px", fontFamily: "permanent Marker, cursive",
  letterSpacing: "0.3rem",textTransform:"uppercase",color:"rgb(109, 9, 109)"
  }}>Type</h3>
    
          
         
           <TextField style={{marginLeft:"50px"}}
          id="standard-select-currency"
          select
         
          value={ContinentValue}
          onChange={onContinentSelectChange}
          helperText="Please select your type"
        >
          {Continents.map((option) => (
            <MenuItem key={option.key} value={option.key}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
           <br />
           <br />
          
           
           
           <h3 className="align-self-center" style={{marginLeft:"50px", fontFamily: "permanent Marker, cursive",
  letterSpacing: "0.3rem",textTransform:"uppercase",color:"rgb(109, 9, 109)"
  }}>Date</h3>
  
           <TextField
                        value={DateValue}
                        onChange={onDateChange}
                      style={{  width: "90%",marginLeft:"50px" }}
                      label="Date de naissance"
                      type="date"
                      name="Age"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
           <br />
           <br />
           <h3 className="align-self-center" style={{marginLeft:"50px", fontFamily: "permanent Marker, cursive",
  letterSpacing: "0.3rem",textTransform:"uppercase",color:"rgb(109, 9, 109)"
  }}>Description</h3>
         


<TextField
              style={{ width: "90%", marginBottom: "25px" ,marginLeft:"50px"}}
              label="Description"
              name="Description"
              id="outlined-multiline-static"
              multiline
              rows={4}
              variant="outlined"
            
            />
           <Button onClick style={{marginLeft:"50px",backgroundColor:"rgb(109, 9, 109)",color:"white",fontSize:"20px",
          borderRadius:"5px",width:"150px",height:"50px",borderColor:"transparent",marginTop:"10px"}}>
             Submit
           </Button>
           





           </Form>
           <br />
         </div>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
