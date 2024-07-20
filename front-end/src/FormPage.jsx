import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import pic from './rose.png'
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import Response from "./Response";
import { set } from "zod";
function FormPage() {
const [response,setResponse] = useState("");
const [finished,setFinished] = useState(true);
const [picture,setPicture] = useState(pic);
    const fileInput = useRef(null);
    const handleButtonClick = () => {
        fileInput.current.click();

    };

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        setFinished(false)
        axios.post('http://localhost:8080/upload', {
            picture: event.target.picture.files[0],
            plant_type: event.target.plant_type.value
        },
        {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        })
        .then(r=>r.data)
        .then(h=>{setResponse(h)
            setFinished(true)
        })
    }
    return  <Card className="grid w-fit h-lvh grid-cols-2 py-4" >

    <form onSubmit={handleSubmit} 
    className='grid justify-items-center  gap-8 my-8'
    >
                
                <input type='file' 
                required 
                name='picture' 
                ref={fileInput}
                onChange={e=>setPicture(URL.createObjectURL(e.target.files[0]) )}
                style={{display:"none"}}
                />
            <Card className="w-4/6">
            <CardHeader>
                <CardTitle>
                    Visual Input
                </CardTitle>
            </CardHeader>
                <CardContent >

                    <img src={picture} alt="" className="aspect-video w-96 object-cover"/>
                    <CardDescription>
                        {picture==pic?"Add an image that would be analyzed for the diagnostics of the plant":"Image added"}
                    </CardDescription>
                </CardContent>
                <CardFooter>
                <Button 
                onClick={handleButtonClick}
                className=" rounded-xl"
                >
                    Select Image
                </Button>
                </CardFooter>
            </Card>
            
            <label htmlFor="plant_type" className="" >
                Type
                <Input type="text" name="plant_type" max={14}/>
                <CardDescription>Enter the name of the plant for the picture <br/>you are uploading</CardDescription>
            </label>

            <Button className="p-0">
                <Input type="submit" value="Analyze" />
            </Button>
        </form>
        <Response response={response} finished={finished}/>
        </Card>
    
}
export default FormPage;
