import { Button, Image } from "react-bootstrap";


export default function IconButton({isTop, isBottom, className, onClick, imageUrl}){
    let margin ="light";

    if(isTop) {
        margin = "light my-4";
    } else if (isBottom) {
        margin = "light mt-auto mb-3";
    }

    return(
        <Button variant={margin} style={{marginBottom:"7px"}} onClick={onClick}>
            {imageUrl ? (
                <Image src={imageUrl} roundedCircle style={{width: "32px", height: "32px"}}/>
                ):(
                <i className={className} style={{fontSize: "24px"}}></i>
            )}
        </Button>
    );
}