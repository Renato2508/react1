const Vignette =  function Vignette({index, src, stmi}){

    function setToMainImage(){
        console.log('image clicked'+index);
        stmi(index);
    }

    return(
        <img src={src} alt="Vignette" height="100%" onClick={setToMainImage}/>
    );
}

export default Vignette;